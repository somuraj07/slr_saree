"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/constants/products";

export default function CategorySection() {
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
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-[#0a0a0a] to-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-title mb-2 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
          Shop by Category
        </h2>
        <p className="text-gray-300 text-lg font-description">
          Every weave tells a story — explore silks across traditions and find your perfect match
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            className="cursor-pointer group"
          >
            <Link href={`/products?category=${cat.id}`}>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl border border-[#d4af37]/30 shadow-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-500">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-semibold font-title text-transparent bg-clip-text bg-gradient-to-r from-[#ffd463] to-[#fff1a8] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {cat.title}
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-4 text-gray-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ffe18a] to-[#fff7c9] transition duration-300 text-center">
              {cat.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/categories"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          View All Categories
        </Link>
      </motion.div>
    </section>
  );
}
