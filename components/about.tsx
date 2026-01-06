"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
          About SLR Sarees
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold font-title text-[#ffed9a] mb-4">
            Handcrafted Excellence
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed font-description">
            At SLR Sarees, we celebrate the timeless art of handwoven sarees. Each piece in our collection 
            represents generations of craftsmanship, tradition, and elegance. From the intricate zari work 
            of Kanchipuram to the luxurious weaves of Banarasi, we bring you authentic sarees that tell a story.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed font-description">
            Our commitment is to preserve traditional weaving techniques while offering you the finest quality 
            sarees for every occasion. Whether it's a wedding, festival, or special celebration, find the perfect 
            saree that reflects your style and heritage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { title: "Premium Quality", desc: "Authentic handwoven sarees" },
            { title: "Traditional Craft", desc: "Preserving age-old techniques" },
            { title: "Wide Collection", desc: "Sarees for every occasion" },
            { title: "Expert Care", desc: "Dedicated customer support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <h4 className="text-xl font-bold font-title text-[#d4af37] mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm font-description">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
