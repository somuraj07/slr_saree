"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { categories } from "@/constants/products";

export default function CategoriesPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
            Shop by Category
          </h1>
          <p className="text-gray-300 text-lg font-description max-w-2xl mx-auto">
            Explore our exquisite collection of handcrafted sarees, each category representing a unique tradition and craftsmanship
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link href={`/products?category=${category.id}`}>
                <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-full w-full">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold font-title mb-2 bg-gradient-to-r from-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                        {category.title}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-gray-300 font-description opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                          {category.description}
                        </p>
                      )}
                      
                      {/* Arrow Icon */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] to-[#ffed9a] flex items-center justify-center">
                          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

