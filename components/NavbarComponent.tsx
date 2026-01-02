"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentpage: string;
  onNavigate: (page: string) => void;
}

export default function NavbarComponent({
  currentpage,
  onNavigate,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 text-black/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-2">
        <div className="flex items-center justify-between h-20">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NavItems.map((item) => {
              const isActive = currentpage === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : isScrolled
                      ? "text-black/80 hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}

            {/* CTA */}
            <Button
              onClick={() => handleNavClick("booking")}
              className="h-10 px-8 rounded-full bg-primary text-primary-foreground font-medium tracking-wide shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-6 py-6 space-y-3">
              {NavItems.map((item) => {
                const isActive = currentpage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left text-base font-medium tracking-wide px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}

              <Button
                onClick={() => handleNavClick("booking")}
                className="w-full mt-4 h-12 rounded-full bg-primary text-primary-foreground font-medium tracking-wide shadow-md hover:brightness-110"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
