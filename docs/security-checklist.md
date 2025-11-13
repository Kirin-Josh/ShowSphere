Security Checklist — Performer Booking Website
🔐 Environment & Secrets

 Store all credentials in .env (never commit to Git)

 Use Vercel / Render environment variable management

 Rotate API keys periodically

 Restrict API keys (domain or usage limits)

⚙️ Backend / API

 Use Helmet for secure headers

 Use express-rate-limit to prevent spam & brute-force

 Sanitize & validate all inputs (use express-validator)

 Restrict CORS to production domain only

 Use HTTPS-only (force SSL)

 Implement global error handling — no internal error messages exposed

 Use compression and body-parser limits to mitigate payload abuse

👥 Authentication

 Use bcrypt or argon2 for password hashing

 Store JWT secrets in env variables

 Token expiration set (e.g., 1h)

 Role-based access control for admin dashboard

 Rate limit login attempts

 Consider 2FA for admin

💳 Payment (Stripe / Flutterwave)

 Never expose secret keys on frontend

 Validate payment intents on the server

 Verify webhook signatures

 Log all payment activity

 Handle payment errors gracefully

🧱 Database (MongoDB / Postgres)

 Use non-root database user

 Validate schema on all writes

 Use parameterized queries (no raw strings)

 Enable IP whitelisting or private networking

 Enable automatic backups

 Encrypt data at rest (handled by cloud DB providers)

🧮 Frontend (Next.js)

 Escape all dynamic HTML (no dangerouslySetInnerHTML unless sanitized)

 Add Content Security Policy (CSP) headers

 Use secure cookies for sessions

 Implement CSRF protection if form submission is server-side

 Use reCAPTCHA on booking/contact forms

 Keep dependencies updated

📩 Email & Forms

 Use trusted email service (SendGrid, Resend, Mailgun)

 Validate all input before sending

 Don’t send sensitive data in plain email

☁️ Infrastructure

 Enable HTTPS (Vercel/Render do this automatically)

 Setup firewall rules for any VPS

 Regularly update OS and dependencies

 Enable monitoring & error logging (Sentry / Logtail)

 Use Cloudflare or similar WAF for DDoS protection

🧰 Maintenance

 Audit dependencies monthly (npm audit fix)

 Review access credentials quarterly

 Maintain regular DB backups

 Run occasional security scans (OWASP ZAP, Burp Suite)