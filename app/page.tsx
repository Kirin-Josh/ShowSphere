"use client";
import { FooterComponent } from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { HomePage } from "@/components/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AboutPage } from "@/components/AboutPage";
import { GalleryPage } from "@/components/GalleryComponent";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="min-h-screen">
      <NavbarComponent currentpage={currentPage} onNavigate={handleNavigate} /> 
      <AnimatePresence mode="wait">
        <motion.div>
          {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "gallery" && <GalleryPage />}
        </motion.div>
        </AnimatePresence>
      <FooterComponent onNavigate={handleNavigate} />
    </div>
  );
}
