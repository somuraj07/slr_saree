"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { 
    img: "/image copy.png",
    title: "Exquisite Kanchipuram Silks",
    subtitle: "Handwoven with Pure Zari",
    cta: "Shop Now"
  },
  { 
    img: "/image copy 2.png",
    title: "Luxurious Banarasi Sarees",
    subtitle: "Traditional Elegance Redefined",
    cta: "Explore Collection"
  },
  { 
    img: "/image copy 5.png",
    title: "Wedding Collection",
    subtitle: "Heirloom Treasures for Your Special Day",
    cta: "Discover More"
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((old) => (old === slides.length - 1 ? 0 : old + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative h-[500px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, i) => (
          i === index && (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-description">
                      {slide.subtitle}
                    </p>
                    <Link href="/products">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
                      >
                        {slide.cta}
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-[#d4af37] w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
