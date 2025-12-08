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

function NavbarComponent({ currentpage, onNavigate }: NavigationProps) {
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg"
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
              <Image src="/sax-logo.jpg" alt="Logo" width={70} height={70} className="rounded-full" />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {NavItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-white transition-colors ${
                    currentpage === item.id
                      ? "opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.name}

                  {currentpage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#6C63FF]"
                    />
                  )}
                </motion.button>
              ))}

              <Button
                onClick={() => handleNavClick("booking")}
                className="h-10 w-32 bg-[#6C63FF] text-white rounded-full hover:bg-[#5449E0] transition-colors"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#1A1A1A] shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {NavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left text-white text-lg px-4 py-2 rounded-lg ${
                      currentpage === item.id
                        ? "bg-[#6C63FF]"
                        : "hover:bg-[#2D2D2D]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => handleNavClick("booking")}
                  className="block w-full px-6 py-3 bg-[#6C63FF] text-white rounded-full hover:bg-[#5449E0] transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default NavbarComponent;
