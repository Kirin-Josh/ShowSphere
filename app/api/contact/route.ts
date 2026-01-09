import { NextRequest, NextResponse } from "next/server";
import { ContactBookingSchema } from "@/lib/utils";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 3; // Max 3 requests per hour per IP

function getClientIp(request: NextRequest): string {
  // Try to get real IP from various headers (for proxies/load balancers)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback to a default (shouldn't happen in production)
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, resetTime: record.resetTime };
  }

  // Increment count
  record.count += 1;
  rateLimitStore.set(ip, record);
  return { allowed: true };
}

// Clean up old entries periodically (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 10 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIp);
    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime
        ? new Date(rateLimitCheck.resetTime).toLocaleTimeString()
        : "soon";
      return NextResponse.json(
        {
          error: `Too many requests. Please try again after ${resetTime}.`,
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = ContactBookingSchema.parse(body);

    // Check honeypot field (should be empty)
    if (validatedData.website) {
      // Bot detected, silently reject
      console.log("Bot detected via honeypot field");
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Additional spam checks
    const spamKeywords = ["viagra", "casino", "crypto", "investment opportunity"];
    const messageContent = `${validatedData.subject} ${validatedData.message}`.toLowerCase();
    
    if (spamKeywords.some(keyword => messageContent.includes(keyword))) {
      console.log("Potential spam detected");
      return NextResponse.json(
        { error: "Message contains inappropriate content" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "ngumnehemiah@neysax.com", // Use your verified domain
      to: ["ngumnehemiah@neysax.com"],
      replyTo: validatedData.email,
      subject: `New Contact Form: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6C63FF 0%, #5a52d5 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #6C63FF; }
              .label { font-weight: bold; color: #6C63FF; margin-bottom: 5px; }
              .value { color: #333; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${validatedData.subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
                </div>
                <div class="footer">
                  <p>This email was sent from the NeySax contact form</p>
                  <p>IP Address: ${clientIp}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
IP Address: ${clientIp}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
