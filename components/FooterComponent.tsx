import { motion } from "motion/react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function FooterComponent({ onNavigate }: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/share/1MvzBwuYqk/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/neysax237?igsh=MXJjcHFwcHMxODd2Mg%3D%3D&utm_source=qr",
    },
    {
      icon: FaTiktok,
      label: "Tiktok",
      url: "https://www.tiktok.com/@neysax237",
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer px-4"
              onClick={() => onNavigate("home")}
            >
              <Image
                src="/sax-logo.jpg"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-full"
              />
            </motion.div>
            <p className="text-gray-400 mb-4">
              Live Events | Corporate & Luxury Events | Weddings & Private
              Ceremonies | Music Coaching & Sax Lessons | Online Mentoring |
              Brand Collaborations | Studio Sessions
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.1, backgroundColor: "text-primary" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Gallery", "Events", "Contact"].map((link) => (
                <li key={link}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:hello@stagelights.com"
                  className="hover:text-[#6C63FF] transition-colors"
                >
                  ngumnehemiah@neysax.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-[#6C63FF] transition-colors"
                >
                  +971582812647
                </a>
              </li>
              <li>Dubai, DB 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} NeySax. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#6C63FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6C63FF] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#6C63FF] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
