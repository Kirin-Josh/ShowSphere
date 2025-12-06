import { motion } from "motion/react";
import { Award, Music, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Multiple industry awards for outstanding performances",
    },
    {
      icon: Music,
      title: "15+ Years Experience",
      description: "Over a decade of professional entertainment excellence",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "98% client satisfaction and repeat booking rate",
    },
    {
      icon: Sparkles,
      title: "Versatile Performances",
      description: "From intimate gatherings to grand celebrations",
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
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#6C63FF]/30 rounded-full blur-[150px]"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#6C63FF]/20 rounded-full blur-[160px]"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About <span className="text-[#6C63FF]">NeySax</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpeg"
                width={800}
                height={600}
                alt="Professional Performer"
                className="w-full h-[450px] object-cover"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6C63FF] rounded-full opacity-20 blur-2xl"
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
              StageLights began from a passion for creating extraordinary
              experiences through live music. With more than 15 years in the
              entertainment world, we’ve proudly performed for hundreds of
              events nationwide.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              From intimate jazz lounges to grand ballrooms, our journey has
              shaped a unique performance style rooted in authenticity and deep
              connection with audiences.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We customize every performance to match your event’s atmosphere,
              ensuring an unforgettable and meaningful experience.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <div className="px-6 py-3 bg-[#6C63FF] text-white rounded-full font-medium inline-block shadow-md">
                Trusted by 500+ Clients
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
                <div className="w-16 h-16 bg-[#6C63FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#6C63FF]" />
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#6C63FF]/15 rounded-full blur-[120px]"
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
            To elevate every event with performances that inspire, entertain,
            and create unforgettable memories. We believe in the transformative
            power of music — turning ordinary moments into extraordinary
            experiences.
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
                  "We deliver exceptional quality in every performance.",
              },
              {
                title: "Authenticity",
                description:
                  "We stay true to our artistic identity while adapting to your vision.",
              },
              {
                title: "Partnership",
                description:
                  "We work collaboratively with you to craft memorable experiences.",
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
                <div className="w-3 h-3 bg-[#6C63FF] rounded-full mx-auto mb-4" />
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
