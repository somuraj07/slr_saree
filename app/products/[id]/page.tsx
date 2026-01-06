"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { products, WHATSAPP_NUMBER } from "@/constants/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const product = products.find((p) => p.id === params.id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4af37] mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in purchasing:\n\n${product.title}\nPrice: ${product.price}${product.originalPrice ? `\nOriginal Price: ${product.originalPrice}` : ""}\n${product.description ? `\nDescription: ${product.description}` : ""}\n\nCould you please provide more details and availability?`;
    // WhatsApp Web API with image - Note: Image sharing via URL requires the image to be publicly accessible
    const imageUrl = `${window.location.origin}${product.images[0]}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message + `\n\nView Image: ${imageUrl}`)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Show notification or toast here
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const calculateDiscount = () => {
    if (product.originalPrice) {
      const original = parseInt(product.originalPrice.replace(/[^0-9]/g, ""));
      const current = parseInt(product.price.replace(/[^0-9]/g, ""));
      return Math.round(((original - current) / original) * 100);
    }
    return product.discount || 0;
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-[#d4af37] hover:text-[#ffed9a] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
              {product.featured && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black px-4 py-2 rounded-full text-sm font-bold">
                  Featured Product
                </div>
              )}
              {calculateDiscount() > 0 && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {calculateDiscount()}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-[#d4af37] scale-105"
                        : "border-transparent hover:border-[#d4af37]/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-semibold">
                      Save ₹{parseInt(product.originalPrice.replace(/[^0-9]/g, "")) - parseInt(product.price.replace(/[^0-9]/g, ""))}
                    </span>
                  </>
                )}
              </div>
            </div>

            {product.description && (
              <div>
                <h3 className="text-xl font-semibold font-title text-[#ffed9a] mb-2">Description</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-description">
                  {product.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 px-4 py-2 bg-gradient-to-r from-[#d4af37]/20 to-[#ffed9a]/20 border border-[#d4af37]/40 rounded-lg text-[#ffed9a] font-semibold block mt-1">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-400">Availability:</span>
                <span className={`ml-2 px-4 py-2 rounded-lg font-semibold block mt-1 ${product.inStock ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {product.material && (
              <div>
                <span className="text-sm text-gray-400">Material:</span>
                <p className="text-gray-300 mt-1">{product.material}</p>
              </div>
            )}

            {product.careInstructions && (
              <div>
                <span className="text-sm text-gray-400">Care Instructions:</span>
                <p className="text-gray-300 mt-1">{product.careInstructions}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  product.inStock
                    ? "bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWishlistToggle}
                className={`px-6 py-4 rounded-xl font-bold border-2 transition-all duration-300 ${
                  isInWishlist(product.id)
                    ? "border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]"
                    : "border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10"
                }`}
              >
                <svg className="w-6 h-6" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.button>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              disabled={!product.inStock}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                product.inStock
                  ? "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {product.inStock ? "Buy on WhatsApp" : "Out of Stock"}
            </motion.button>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold font-title mb-8 bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <motion.div
                  key={related.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => router.push(`/products/${related.id}`)}
                  className="cursor-pointer group"
                >
                  <div className="relative h-64 w-full rounded-xl overflow-hidden border border-[#d4af37]/30 mb-4">
                    <Image
                      src={related.images[0]}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-title text-[#f9e8c9] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ffed9a] group-hover:to-[#d4af37] transition-all">
                    {related.title}
                  </h3>
                  <p className="text-xl font-bold bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
                    {related.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
