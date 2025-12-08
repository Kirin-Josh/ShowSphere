/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Play } from "lucide-react";
import { events, eventCategories } from "@/lib/data";

interface EventsPageProps {
  onNavigate?: (page: string) => void;
}

export default function EventsPage({ onNavigate }: EventsPageProps) {
  const [filter, setFilter] = useState<
    "all" | "upcoming" | "past" | "featured"
  >("all");

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  const handleEventClick = (link: string) => {
    // Check if it's an external link (starts with http)
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      // Remove leading slash and use internal navigation
      const page = link.startsWith("/") ? link.slice(1) : link;
      if (onNavigate) {
        onNavigate(page);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-bold mb-4 mt-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            NeySax <span className="text-[#6C63FF]">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Discover upcoming performances, relive past concerts, and explore
            featured special events.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-24 z-40 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {eventCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id
                  ? "bg-[#6C63FF] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative cursor-pointer group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {event.type === "video" && (
                  <div className="absolute top-4 left-4 bg-white/20 text-white p-2 rounded-full flex items-center gap-1">
                    <Play size={16} /> Video
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2 font-[Poppins]">
                  {event.title}
                </h3>
                <p className="text-gray-500 flex items-center gap-2 mb-1">
                  <Calendar size={16} /> {event.date}
                </p>
                <p className="text-gray-500 flex items-center gap-2">
                  <MapPin size={16} /> {event.venue}
                </p>

                {event.link && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEventClick(event.link!)}
                    className="mt-4 inline-block px-6 py-2 bg-[#6C63FF] text-white rounded-full font-medium hover:bg-[#5449E0] transition-all"
                  >
                    {event.type === "video" ? "Watch Video" : "Book Now"}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
