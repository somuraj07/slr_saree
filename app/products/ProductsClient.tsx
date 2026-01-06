// app/products/ProductsClient.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { products, WHATSAPP_NUMBER, categories, priceRanges } from "@/constants/products";
import { useCart } from "@/contexts/CartContext";

/* ⬇️ KEEP YOUR CODE EXACTLY SAME BELOW ⬇️ */
export default function ProductsClient() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    searchParams.get("priceRange")
  );
  const [sortBy, setSortBy] = useState<string>("default");
  const [showFilters, setShowFilters] = useState(false);

  // 🔥 everything else remains unchanged

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category) {
        filtered = filtered.filter((p) =>
          p.category.toLowerCase().includes(category.title.toLowerCase().split(" ")[0])
        );
      }
    }

    // Filter by price range
    if (selectedPriceRange) {
      const priceRange = priceRanges.find((pr) => pr.id === selectedPriceRange);
      if (priceRange) {
        filtered = filtered.filter((p) => {
          const price = parseInt(p.price.replace(/[^0-9]/g, ""));
          return price >= priceRange.min && price < priceRange.max;
        });
      }
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered = [...filtered].sort(
        (a, b) =>
          parseInt(a.price.replace(/[^0-9]/g, "")) -
          parseInt(b.price.replace(/[^0-9]/g, ""))
      );
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort(
        (a, b) =>
          parseInt(b.price.replace(/[^0-9]/g, "")) -
          parseInt(a.price.replace(/[^0-9]/g, ""))
      );
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleWhatsApp = (product: typeof products[0]) => {
    const message = `Hi! I'm interested in purchasing:\n\n${product.title}\nPrice: ${product.price}\n\nCould you please provide more details?`;
    // Include image URL in WhatsApp message
    const imageUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${product.images[0]}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message + `\n\nView Image: ${imageUrl}`)}`;
    window.open(url, "_blank");
  };

  const calculateDiscount = (product: typeof products[0]) => {
    if (product.originalPrice) {
      const original = parseInt(product.originalPrice.replace(/[^0-9]/g, ""));
      const current = parseInt(product.price.replace(/[^0-9]/g, ""));
      return Math.round(((original - current) / original) * 100);
    }
    return product.discount || 0;
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent animate-gradient">
            Our Collection
          </h1>
          <p className="text-gray-300 text-lg font-description">
            Discover handcrafted sarees that celebrate tradition and elegance
          </p>
        </motion.div>

        {/* Filters and Sort */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#d4af37]/20 to-[#ffed9a]/20 border border-[#d4af37]/40 text-[#ffed9a] font-semibold hover:bg-gradient-to-r hover:from-[#d4af37]/30 hover:to-[#ffed9a]/30 transition-all"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 rounded-lg bg-black border border-[#d4af37]/40 text-[#ffed9a] font-semibold focus:outline-none focus:border-[#d4af37]"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/30 space-y-6"
            >
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-[#ffed9a] mb-3">Category</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      !selectedCategory
                        ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black border-[#d4af37]"
                        : "bg-transparent text-[#ffed9a] border-[#d4af37]/40 hover:border-[#d4af37]"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        selectedCategory === cat.id
                          ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black border-[#d4af37]"
                          : "bg-transparent text-[#ffed9a] border-[#d4af37]/40 hover:border-[#d4af37]"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-lg font-semibold text-[#ffed9a] mb-3">Price Range</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      !selectedPriceRange
                        ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black border-[#d4af37]"
                        : "bg-transparent text-[#ffed9a] border-[#d4af37]/40 hover:border-[#d4af37]"
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((pr) => (
                    <button
                      key={pr.id}
                      onClick={() => setSelectedPriceRange(pr.id)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        selectedPriceRange === pr.id
                          ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black border-[#d4af37]"
                          : "bg-transparent text-[#ffed9a] border-[#d4af37]/40 hover:border-[#d4af37]"
                      }`}
                    >
                      {pr.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedPriceRange) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPriceRange(null);
                  }}
                  className="px-6 py-2 rounded-lg bg-red-600/20 text-red-400 border border-red-600/40 hover:bg-red-600/30 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </motion.div>
          )}
        </div>

        {/* Filter Info */}
        {(selectedCategory || selectedPriceRange) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 rounded-lg bg-gradient-to-r from-[#d4af37]/20 to-[#ffed9a]/20 border border-[#d4af37]/40"
          >
            <p className="text-[#ffed9a]">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              {selectedCategory && ` in ${categories.find((c) => c.id === selectedCategory)?.title}`}
              {selectedPriceRange && ` in ${priceRanges.find((pr) => pr.id === selectedPriceRange)?.label}`}
            </p>
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const discount = calculateDiscount(product);
              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/30 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500">
                    {/* Image Container */}
                    <Link href={`/products/${product.id}`}>
                      <div className="relative h-80 w-full overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Badges */}
                        {product.featured && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                            Featured
                          </div>
                        )}
                        {discount > 0 && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            {discount}% OFF
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            Out of Stock
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="text-lg font-semibold font-title text-[#f9e8c9] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ffed9a] group-hover:to-[#d4af37] transition-all duration-300 line-clamp-2">
                          {product.title}
                        </h3>
                      </Link>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl font-bold font-title bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through font-description">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`flex-1 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                            product.inStock
                              ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                              : "bg-gray-700 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Add to Cart
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleWhatsApp(product)}
                          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-2xl text-gray-400 mb-4">No products found</p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
              >
                View All Products
              </Link>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

