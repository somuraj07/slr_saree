"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Wishlist", href: "/wishlist" },
  ];

  return (
    <header className="w-full bg-black">
      {/* Top Bar */}
      <div
        className="
          text-[#FFF8DC] 
          text-sm 
          text-center 
          py-2 
          bg-gradient-to-r 
          from-[#8d6b00] 
          via-[#d4af37] 
          to-[#8d6b00]
          animate-pulse
        "
      >
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* LOGO */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <Image 
              src="/image.png"
              alt="Company Logo"
              width={150}
              height={150}
              priority
              className="w-32 md:w-40"
            />
          </motion.div>
        </Link>

        {/* SEARCH INPUT WITH ICON - Hidden on mobile */}
        <div className="hidden md:block relative flex-1 max-w-md mx-8">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffd86b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search for SLR Silks"
            className="
              border 
              border-[#d4af37]/60 
              bg-black 
              rounded-full 
              pl-5 
              pr-12 
              py-3 
              w-full 
              focus:outline-none 
              placeholder-[#c9ab4e]
              text-[#ffe9a9]
              focus:shadow-[0_0_20px_rgba(212,175,55,0.5)]
              transition
            "
          />
        </div>

        {/* MENU - Desktop */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 font-semibold">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="
                  relative
                  font-title
                  bg-gradient-to-r 
                  from-[#ffd56b] 
                  via-[#fff3b0] 
                  to-[#d4af37] 
                  bg-clip-text 
                  text-transparent
                  transition 
                  duration-300
                "
              >
                {/* animated underline */}
                <span
                  className="
                    absolute 
                    left-0 
                    -bottom-1 
                    w-0 
                    h-[2px] 
                    bg-gradient-to-r 
                    from-[#ffeb9c] 
                    to-[#d4af37]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
                {item.label}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#d4af37] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#d4af37] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-[#d4af37]/30 bg-black/95 backdrop-blur-sm"
        >
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#ffed9a] font-semibold py-2 border-b border-[#d4af37]/20 hover:text-[#d4af37] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
