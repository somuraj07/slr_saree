"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WHATSAPP_NUMBER } from "@/constants/products";

export default function AboutPage() {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about SLR Sarees and your collection.";
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-title mb-6 bg-gradient-to-r from-[#25D366] via-[#d4af37] to-[#25D366] bg-clip-text text-transparent animate-gradient">
            About SLR Sarees
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent mx-auto mb-8" />
          <p className="text-gray-300 text-xl font-description max-w-3xl mx-auto leading-relaxed">
            Celebrating the timeless art of handwoven sarees, where tradition meets elegance
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-title bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-description">
              SLR Sarees was born from a deep passion for preserving the rich heritage of Indian handwoven textiles. 
              We believe that every saree tells a story - a story of skilled artisans, traditional techniques, and 
              timeless elegance passed down through generations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-description">
              Our journey began with a simple mission: to bring authentic, handcrafted sarees to discerning customers 
              who appreciate the artistry and craftsmanship that goes into each piece. From the intricate zari work 
              of Kanchipuram to the luxurious weaves of Banarasi, we curate only the finest sarees.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-description">
              Today, we stand as a bridge between traditional artisans and modern customers, ensuring that these 
              beautiful traditions continue to thrive while making them accessible to saree lovers everywhere.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden border border-[#25D366]/30 shadow-2xl">
            <Image
              src="/image copy.png"
              alt="Our Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-title text-center mb-12 bg-gradient-to-r from-[#25D366] to-[#d4af37] bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Every saree is authentic, sourced directly from traditional weavers and verified for quality.",
                icon: "✨",
                gradient: "from-[#25D366] to-[#128C7E]",
              },
              {
                title: "Craftsmanship",
                description: "We honor the skilled artisans whose dedication brings these beautiful sarees to life.",
                icon: "🎨",
                gradient: "from-[#d4af37] to-[#ffed9a]",
              },
              {
                title: "Heritage",
                description: "Preserving traditional weaving techniques and cultural heritage for future generations.",
                icon: "🏛️",
                gradient: "from-[#25D366] to-[#d4af37]",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold font-title mb-4 bg-gradient-to-r from-[#25D366] to-[#d4af37] bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-description">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-title text-center mb-12 bg-gradient-to-r from-[#d4af37] to-[#25D366] bg-clip-text text-transparent">
            Why Choose SLR Sarees?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Direct sourcing from traditional weavers",
              "100% authentic handwoven sarees",
              "Wide range of categories and price points",
              "Expert guidance for every occasion",
              "Careful quality inspection",
              "Personalized customer service",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-[#25D366]/10 to-[#d4af37]/10 border border-[#25D366]/30"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#25D366] to-[#d4af37] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg font-description">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-[#25D366]/20 via-[#d4af37]/20 to-[#25D366]/20 border border-[#25D366]/40"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-title mb-6 bg-gradient-to-r from-[#25D366] to-[#d4af37] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg font-description mb-8 max-w-2xl mx-auto">
            Have questions about our sarees? Want to know more about a specific piece? 
            We're here to help! Reach out to us on WhatsApp for personalized assistance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center gap-3 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat with Us on WhatsApp
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

