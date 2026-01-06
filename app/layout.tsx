import type { Metadata } from "next";
import { Judson, Stint_Ultra_Expanded } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import "./globals.css";

const judson = Judson({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-judson",
  display: "swap",
});

const stintUltra = Stint_Ultra_Expanded({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-stint-ultra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLR Sarees - Handcrafted Elegance",
  description: "Discover exquisite handwoven sarees - Kanchipuram, Banarasi, and more. Traditional craftsmanship meets modern elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${judson.variable} ${stintUltra.variable} antialiased`}
      >
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
