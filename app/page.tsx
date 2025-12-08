"use client";
import { FooterComponent } from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { HomePage } from "@/components/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutPage } from "@/components/AboutPage";
import { GalleryPage } from "@/components/GalleryComponent";
import EventsPage from "@/components/EventsComponent";
import { ContactPage } from "@/components/ContactComponent";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Initialize page from URL on mount
    if (typeof window !== "undefined") {
      return window.location.pathname.slice(1) || "home";
    }
    return "home";
  });

  const handleNavigate = (page: string) => {
    // Remove leading slash if present
    const cleanPage = page.startsWith("/") ? page.slice(1) : page;

    setCurrentPage(cleanPage);

    // Update URL without page reload
    window.history.pushState({}, "", `/${cleanPage}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || "home";
      setCurrentPage(path);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen">
      <NavbarComponent currentpage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "gallery" && <GalleryPage />}
          {currentPage === "events" && <EventsPage />}
          {currentPage === "contact" && <ContactPage />}
          {currentPage === "booking" && <ContactPage />}
        </motion.div>
      </AnimatePresence>
      <FooterComponent onNavigate={handleNavigate} />
    </div>
  );
}
