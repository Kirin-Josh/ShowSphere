import { motion } from "motion/react";
import { Award, Music, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "Professional Excellence",
      description:
        "We deliver world-class saxophone performances with precision, reliability, and attention to detail — meeting the highest standards",
    },
    {
      icon: Music,
      title: "Tailored Music Experiences",
      description:
        "Every performance is carefully customized to match your event’s vision, atmosphere, and audience, ensuring a unique and memorable experience.",
    },
    {
      icon: Heart,
      title: "Versatility & Adaptability",
      description:
        "From corporate and luxury events to private ceremonies and brand collaborations, Neysax adapts seamlessly across settings, styles, and platforms.",
    },
    {
      icon: Sparkles,
      title: "Purpose-Driven Artistry",
      description:
        "More than entertainment, our music is intentional — designed to create emotional connection, elevate moments, and leave a lasting impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ----------------- HERO ----------------- */}
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#121212] overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-125 h-125 bg-primary/30 rounded-full blur-[150px]"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-112.5 h-112.5 bg-primary/20 rounded-full blur-[160px]"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About <span className="text-primary">NeySax</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto"
          >
            Bringing world-class entertainment to life’s most meaningful
            moments.
          </motion.p>
        </div>
      </section>

      {/* ----------------- STORY ----------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl from-[#E8ECEE] via-[#D5DBDE] to-[#C5CDD1] bg-linear-to-br hover:scale-90 transition-transform duration-500">
              <Image
                src="/booking4.jpg"
                width={800}
                height={600}
                alt="Professional Performer"
                className="w-full h-112.5 object-contain scale-150"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Neysax is a professional saxophonist and creative brand delivering
              refined musical experiences for events, collaborations, and
              personal growth. Known for his expressive sound and intentional
              artistry, Neysax blends technical excellence with deep emotional
              storytelling — allowing the saxophone to truly speak.His journey
              with the saxophone is rooted in discipline, purpose, and a desire
              to inspire through music beyond entertainment. serves.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              From intimate private ceremonies to high-end corporate and luxury
              events, Neysax brings a signature sound that elevates atmospheres,
              connects audiences, and leaves lasting impressions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              More than a performer, Neysax is a mentor and creative partner —
              committed to excellence, authenticity, and meaningful impact in
              every space he
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <div className="px-6 py-3 bg-primary text-white rounded-full font-medium inline-block shadow-md">
                Trusted by many Clients
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ----------------- ACHIEVEMENTS ----------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Excellence in every moment, dedication in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <h4 className="text-xl font-semibold mb-3 text-center">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- MISSION ----------------- */}
      <section className="py-24 bg-[#121212] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-semibold mb-6"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            To use music as a powerful tool for expression, excellence, and
            inspiration — delivering meaningful saxophone experiences while
            empowering individuals and brands through intentional artistry.
          </motion.p>
        </div>
      </section>

      {/* ----------------- VALUES ----------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to delivering the highest standards in sound quality, professionalism, and service in every performance and collaboration.",
              },
              {
                title: "Authenticity",
                description:
                  "Our artistry is sincere and original — each performance reflects true expression, integrity, and a distinctive musical identity.",
              },
              {
                title: "Purpose",
                description:
                  "Music is approached with intention, meaning, and impact — creating experiences that go beyond sound to truly connect and inspire.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-6"
              >
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">{v.title}</h4>
                <p className="text-gray-600">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
