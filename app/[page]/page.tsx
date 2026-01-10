"use client";
import { FooterComponent } from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { AboutPage } from "@/components/AboutPage";
import { GalleryPage } from "@/components/GalleryComponent";
import EventsPage from "@/components/EventsComponent";
import { ContactPage } from "@/components/ContactComponent";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { use } from "react";

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

const validPages = ["about", "gallery", "events", "contact", "booking"];

export default function DynamicPage({ params }: PageProps) {
  const router = useRouter();
  const { page: currentPage } = use(params);

  // Redirect to home if page is not valid
  if (!validPages.includes(currentPage)) {
    router.push("/");
    return null;
  }

  const handleNavigate = (page: string) => {
    const cleanPage = page.startsWith("/") ? page.slice(1) : page;

    if (cleanPage === "home") {
      router.push("/");
    } else {
      router.push(`/${cleanPage}`);
    }
  };

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
          {currentPage === "about" && <AboutPage />}
          {currentPage === "gallery" && <GalleryPage />}
          {currentPage === "events" && (
            <EventsPage onNavigate={handleNavigate} />
          )}
          {currentPage === "contact" && <ContactPage />}
          {currentPage === "booking" && <ContactPage />}
        </motion.div>
      </AnimatePresence>
      <FooterComponent onNavigate={handleNavigate} />
    </div>
  );
}
