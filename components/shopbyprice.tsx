"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { priceRanges } from "@/constants/products";

export default function ShopByPrice() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-[#F4E7BD] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-title bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent mb-4">
            Shop by Price
          </h2>
          <p className="text-gray-300 text-lg font-description">
            Sarees for every occasion — from everyday elegance to heirloom treasures
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {priceRanges.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link href={`/products?priceRange=${item.id}`}>
                <div className="relative w-full h-64 overflow-hidden rounded-xl border border-[#d4af37]/40 shadow-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-lg font-bold bg-gradient-to-r from-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Link>

              <p className="text-center mt-4 font-semibold text-gray-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffed9a] transition-all duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
