"use client";

import { motion } from "motion/react";
import { Mail, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { ContactBookingSchema, ContactBookingSchemaType } from "@/lib/utils";

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactBookingSchemaType>({
    resolver: zodResolver(ContactBookingSchema),
  });

  async function onSubmit(data: ContactBookingSchemaType) {
    try {
      setLoading(true);
      setError(null);
      setSent(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setSent(true);
      reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Could not send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ngumnehemiah@neysax.com",
      link: "mailto:ngumnehemiah@neysax.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971582812647",
      link: "tel:+971582812647",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM EST",
      link: "#",
    },
    {
      icon: Clock,
      title: "Weekend Hours",
      value: "Sat - Sun: 10AM - 4PM EST",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mb-6 mt-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Get in <span style={{ color: "var(--primary)" }}>Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2
                className="mb-8"
                style={{ fontFamily: "Poppins, sans-serif", color: "#1A1A1A" }}
              >
                Send us a Message
              </h2>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                </motion.div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  {...register("website")}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 border rounded-lg focus:border-primary"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 border rounded-lg focus:border-primary"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border rounded-lg focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 border rounded-lg focus:border-primary"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Event Inquiry"
                    className="w-full px-4 py-3 border rounded-lg focus:border-primary"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your event..."
                    className="w-full px-4 py-3 border rounded-lg resize-none focus:border-primary"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2
                className="mb-8"
                style={{ fontFamily: "Poppins, sans-serif", color: "#1A1A1A" }}
              >
                Contact Information
              </h2>

              {/* Info Items */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.link}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon
                        className="w-6 h-6"
                        style={{ color: "var(--primary)" }}
                      />
                    </div>
                    <div>
                      <h4
                        className="mb-1"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Google Map Embed */}
              <motion.div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68288599616!2d54.947330484568074!3d25.076280747291226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1736512800000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Location"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
