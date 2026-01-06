"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products, WHATSAPP_NUMBER } from "@/constants/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  const handleWhatsApp = (product: typeof products[0]) => {
    const message = `Hi! I'm interested in purchasing:\n\n${product.title}\nPrice: ${product.price}\n\nCould you please provide more details?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-black to-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
          Featured Products
        </h2>
        <p className="text-gray-300 text-lg font-description">
          Fresh weaves added daily — discover sarees handwoven just for you
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-2xl border border-[#d4af37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-500 group"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black px-4 py-2 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>
            </Link>

            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold font-title text-lg text-[#f9e8c9] tracking-wide transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ffed9a] group-hover:to-[#d4af37] mb-3">
                  {product.title}
                </h3>
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffeb8a] font-bold font-title text-xl">
                  {product.price}
                </p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through font-description">
                    {product.originalPrice}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp(product)}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Buy on WhatsApp
              </motion.button>
            </div>
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
          href="/products"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          View All Products
        </Link>
      </motion.div>
    </section>
  );
}
