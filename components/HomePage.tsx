import { motion } from "framer-motion";
import { Play, Calendar, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { upcomingEvents } from "@/lib/data";
import Image from "next/image";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Calendar, value: "500+", label: "Events Performed" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Users, value: "10K+", label: "Happy Clients" },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-image.jpeg"
            alt="Stage Performance"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-white mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Elevate Your Event with
              <br />
              <span style={{ color: "#6C63FF" }}>
                Unforgettable Performances
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Professional live entertainment for corporate events, weddings,
              festivals, and private celebrations. Experience the magic of
              world-class performances.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(108, 99, 255, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("booking")}
                className="h-10 w-32 bg-[#6C63FF] text-white rounded-full hover:bg-[#5449E0] transition-all shadow-lg"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("gallery")}
                className="h-12 px-4 w-60 font-bold bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/30 flex items-center gap-2 justify-center"
              >
                <Play size={20} />
                View Performances
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Card className="bg-[#2D2D2D] border border-white/10 rounded-2xl shadow-md hover:bg-[#353535] transition-all w-[16rem]">
                <CardContent className="flex flex-col items-center text-center py-8">
                  <stat.icon className="w-12 h-12 mb-4 text-[#6C63FF]" />

                  <h3 className="text-3xl font-semibold text-white">
                    {stat.value}
                  </h3>

                  <p className="text-gray-400 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="mt-8 bg-white">
        <div className="">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-4"
          >
            <h2 className="md:text-4xl text-2xl font-semibold text-[#1A1A1A] font-[Poppins]">
              Upcoming Performances
            </h2>
            <p className="text-gray-600 mt-2 text-center max-w-2xl px-4">
              Don&apos;t miss out on our upcoming shows. Book your tickets now!
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="overflow-hidden border-none shadow-lg rounded-2xl bg-white w-[20rem]">
                  <div className="relative h-60 w-full group overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#6C63FF] text-white p-1.5 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>

                  <CardContent className="p-3 text-center">
                    <h4 className="text-2xl font-semibold text-[#1A1A1A] font-[Poppins] mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600">{event.venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("events")}
              className="px-8 py-3 mb-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              View All Events
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-[#6C63FF] to-[#5449E0] relative overflow-hidden">
        {/* Floating animation element */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 120, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl font-bold font-[Poppins] mb-6"
          >
            Ready to Make Your Event Spectacular?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xl mb-10"
          >
            Let&apos;s create an unforgettable experience together. Book your
            performance today.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("booking")}
            className="px-12 py-4 bg-white text-[#6C63FF] rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
}
