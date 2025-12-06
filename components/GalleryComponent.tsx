"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Volume2, VolumeX } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { categories } from "@/lib/data";

import Image from "next/image";

export function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>("all");
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [muted, setMuted] = useState(true);
    const [loaded, setLoaded] = useState(false);

    const toggleSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
      }
    };

    useEffect(() => {
      if (videoRef.current) {
        const v = videoRef.current;
        v.oncanplay = () => setLoaded(true);
      }
    }, []);


  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const handlePrev = () => {
    if (selected !== null)
      setSelected(selected > 0 ? selected - 1 : filtered.length - 1);
  };

  const handleNext = () => {
    if (selected !== null)
      setSelected(selected < filtered.length - 1 ? selected + 1 : 0);
  };

  return (
    <div className="min-h-screen">
      {/* ========================= HEADER ========================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND VIDEO */}
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/gallery-video.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* SHIMMER LOADER */}
        {!loaded && (
          <div className="absolute inset-0 bg-black/50 animate-pulse" />
        )}

        {/* MOBILE FALLBACK IMAGE */}
        <div className="absolute inset-0 w-full h-full block md:hidden">
          <Image
            src="/fallback-image.jpeg"
            alt="Fallback"
            fill
            className="object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

        {/* CINEMATIC FILM GRAIN */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
          style={{
            backgroundImage: "url('https://i.imgur.com/8nJkq7U.png')",
          }}
        />

        {/* PARALLAX FLOATING ELEMENT */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-16 right-20 w-32 h-32 bg-[#6C63FF]/20 blur-3xl rounded-full"
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-[#6C63FF]">NeySax</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto"
          >
            Bringing world-class entertainment to life’s most meaningful
            moments.
          </motion.p>
        </div>

        {/* SOUND TOGGLE BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSound}
          className="absolute bottom-24 right-6 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white"
        >
          {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </motion.button>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ========================= FILTERS ========================= */}
      <section className="py-8 sticky top-20 bg-white z-40 shadow-sm">
        <div className="flex justify-center gap-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative pb-1 text-lg transition-all
                ${
                  filter === cat.id
                    ? "text-[#6C63FF] font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
            >
              {cat.label}

              {filter === cat.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#6C63FF]"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ========================= GRID (MASONRY) ========================= */}
      <section className="py-16 px-6">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelected(i)}
              className="break-inside-avoid overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition-all relative"
            >
              {/* Image */}
              <Image
                src={item.image}
                width={800}
                height={800}
                alt={item.title}
                className="w-full rounded-xl object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium">{item.title}</p>
                  {item.type === "video" && (
                    <div className="flex items-center gap-1 text-white/80">
                      <Play size={16} />
                      <span>Video</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================= LIGHTBOX ========================= */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button className="absolute top-8 right-8 text-white hover:scale-110 transition">
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-10 text-white hover:scale-110 transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-10 text-white hover:scale-110 transition"
            >
              <ChevronRight size={40} />
            </button>

            {/* Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] w-full"
            >
              {filtered[selected].type === "video" ? (
                <video
                  src={filtered[selected].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <Image
                  src={filtered[selected].image}
                  width={1600}
                  height={1000}
                  alt="gallery item"
                  className="w-full h-full object-contain rounded-xl"
                />
              )}

              {/* Caption */}
              <div className="text-center text-white mt-4">
                <h3 className="text-xl">{filtered[selected].title}</h3>
                <p className="text-sm text-white/60">
                  {selected + 1} / {filtered.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
