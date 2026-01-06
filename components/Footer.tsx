"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/constants/products";

export default function Footer() {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about your saree collection.";
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-[#F4E7BD] border-t border-[#d4af37]/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-[#d4af37] font-bold font-title mb-4 tracking-wide text-lg">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-[#d4af37] transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#d4af37] transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors" onClick={handleWhatsApp}>
              Contact Us
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-[#d4af37] font-bold font-title mb-4 tracking-wide text-lg">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Our History</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Craftsmanship</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Quality Promise</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Care Instructions</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-[#d4af37] font-bold font-title mb-4 tracking-wide text-lg">CLIENT CARE</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Shipping Info</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Returns & Exchange</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-[#d4af37] transition-colors">Privacy Policy</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 text-sm"
        >
          <div>
            <p className="text-[#d4af37] font-bold font-title mb-2">CONTACT US</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </motion.button>
          </div>

          <div className="pt-4">
            <p className="text-gray-400 mb-3">Follow Us</p>
            <div className="flex gap-4 text-2xl">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="text-[#d4af37] hover:text-[#ffed9a] transition-colors"
              >
                📸
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="text-[#d4af37] hover:text-[#ffed9a] transition-colors"
              >
                👍
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="text-[#d4af37] hover:text-[#ffed9a] transition-colors"
              >
                📌
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#d4af37]/30 py-6">
        <p className="text-center text-xs text-gray-400">
          © 2024 SLR Sarees. All Rights Reserved. | Handcrafted with ❤️
        </p>
      </div>
    </footer>
  );
}

