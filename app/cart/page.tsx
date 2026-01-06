"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { WHATSAPP_NUMBER } from "@/constants/products";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleWhatsApp = () => {
    const items = cart.map((item) => `${item.title} (Qty: ${item.quantity}) - ${item.price}`).join("\n");
    const total = getTotalPrice();
    const message = `Hi! I'd like to purchase the following items:\n\n${items}\n\nTotal: ₹${total.toLocaleString("en-IN")}\n\nCould you please confirm availability and proceed?`;
    // Include images for all cart items
    const imageUrls = cart.map(item => `${typeof window !== 'undefined' ? window.location.origin : ''}${item.images[0]}`).join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message + `\n\nProduct Images:\n${imageUrls}`)}`;
    window.open(url, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <svg className="w-24 h-24 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-4xl font-bold font-title bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
              Your cart is empty
            </h2>
            <p className="text-gray-400 text-lg font-description">Add some beautiful sarees to get started!</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#ffed9a] text-black font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-4 bg-gradient-to-r from-[#d4af37] via-[#ffed9a] to-[#d4af37] bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          <p className="text-gray-400 font-description">{cart.length} item{cart.length !== 1 ? "s" : ""} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ""));
              const totalItemPrice = itemPrice * item.quantity;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/30"
                >
                  <Link href={`/products/${item.id}`} className="relative w-full sm:w-32 h-48 sm:h-32 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <h3 className="text-xl font-semibold font-title text-[#ffed9a] mb-2 hover:text-[#d4af37] transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 font-description">{item.category}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#ffed9a] bg-clip-text text-transparent">
                          ₹{totalItemPrice.toLocaleString("en-IN")}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{(parseInt(item.originalPrice.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/30 transition-all"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold text-[#ffed9a]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/30 transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              );
            })}

            <button
              onClick={clearCart}
              className="text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/30 space-y-6"
            >
              <h2 className="text-2xl font-bold font-title text-[#ffed9a] mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₹{getTotalPrice().toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="border-t border-[#d4af37]/30 pt-3">
                  <div className="flex justify-between text-xl font-bold text-[#ffed9a]">
                    <span>Total</span>
                    <span>₹{getTotalPrice().toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Checkout on WhatsApp
              </motion.button>

              <Link
                href="/products"
                className="block text-center text-[#d4af37] hover:text-[#ffed9a] font-semibold transition-colors"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

