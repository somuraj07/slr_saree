// All product data - Update this file to manage all products without touching UI

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  images: string[];
  category: string;
  description?: string;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
  sizes?: string[];
  colors?: string[];
  material?: string;
  careInstructions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Semi kanchivaram Pattu Saree",
    price: "₹2599",
    originalPrice: "₹5599",
    images: [
      
      "/image copy 4.png", 
    ],
    category: "Kanchipuram",
    description:
       "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Pure Silk with Pure Zari",
    careInstructions:
      "Dry clean only. Store in a cool, dry place wrapped in muslin cloth."
  },
  {
    id: "2",
    title: "Semi kanchi Pattu saree",
    price: "₹2549",
    originalPrice: "₹5099",
    images: ["/image copy 3.png", "/image copy 6.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "Pure Silk with Pure Zari",
    careInstructions: "wash by rolling machine"
  },
  {
   id: "3",
    title: "Banaras viscous silk saree",
    price: "₹1400",
    images: ["/image copy 7.png", "/image copy 8.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "4",
    title: "Banaras viscous silk saree",
    price: "₹1500",
    images: ["/image copy 9.png", "/image copy 10.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "5",
    title: "Banaras viscous silk saree",
    price: "₹1500",
    images: ["/image copy 11.png", "/image copy 12.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only."
  },
  {
    id: "6",
    title: "Banaras Kota silk saree",
    price: "₹1800",
    images: ["/image copy 13.png", "/image copy 14.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only."
  },
  {
    id: "7",
    title: "Banaras Kota silk saree",
    price: "₹1800",
    images: ["/image copy 15.png", "/image copy 16.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
   id: "8",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 17.png", "/image copy 18.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "Pure Silk with Pure Zari",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "9",
    title: "Semi kanchi Pattu saree",
    price:"₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 19.png", "/image copy 20.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "Pure Silk with Pure Zari",
    careInstructions: "wash by rolling machine"
  },
 
    

];

export const categories = [
  {
    id: "kanchipuram-pure-zari",
    title: "Pure Zari Kanchipuram",
    image: "/image copy.png",
    description: "Traditional handwoven sarees with pure zari work"
  },
  {
    id: "soft-silks",
    title: "Soft Silks",
    image: "/image.png",
    description: "Comfortable soft silk sarees for daily wear"
  },
  {
    id: "tussar",
    title: "Tussar",
    image: "/image copy 2.png",
    description: "Natural tussar silk sarees"
  },
  {
    id: "crepe",
    title: "Crepe",
    image: "/image copy 5.png",
    description: "Elegant crepe silk sarees"
  },
  {
    id: "kanchipuram-half-fine",
    title: "Half-Fine Zari Kanchipuram",
    image: "/image copy.png",
    description: "Half-fine zari Kanchipuram sarees"
  },
  {
    id: "kanchipuram-brocade",
    title: "Brocade Kanchipuram",
    image: "/image copy 2.png",
    description: "Heavy brocade work Kanchipuram sarees"
  },
  {
    id: "kanchipuram-tissue",
    title: "Kanchipuram Tissue Silk",
    image: "/image copy 5.png",
    description: "Lightweight tissue silk Kanchipuram sarees"
  },
  {
    id: "banarasi-katan",
    title: "Banarasi Katan Silk",
    image: "/image.png",
    description: "Elegant Banarasi katan silk sarees"
  },
  {
    id: "banarasi",
    title: "Banarasi Silk",
    image: "/image copy.png",
    description: "Classic Banarasi silk sarees"
  },
  {
    id: "cotton",
    title: "Cotton",
    image: "/image copy 2.png",
    description: "Comfortable cotton sarees"
  },
  {
    id: "silk-cotton",
    title: "Silk Cotton",
    image: "/image copy 5.png",
    description: "Silk cotton blend sarees"
  },
  {
    id: "organza",
    title: "Organza",
    image: "/image.png",
    description: "Sheer organza silk sarees"
  }
];

export const priceRanges = [
  {
    id: "under-3k",
    label: "Under ₹3k",
    min: 0,
    max: 3000,
    image: "/image copy.png"
  },
  {
    id: "3k-5k",
    label: "₹3k - ₹5k",
    min: 3000,
    max: 5000,
    image: "/image copy 2.png"
  },
  {
    id: "5k-10k",
    label: "₹5k - ₹10k",
    min: 5000,
    max: 10000,
    image: "/image copy 5.png"
  },
  {
    id: "10k-15k",
    label: "₹10k - ₹15k",
    min: 10000,
    max: 15000,
    image: "/image.png"
  },
  {
    id: "15k-20k",
    label: "₹15k - ₹20k",
    min: 15000,
    max: 20000,
    image: "/image copy.png"
  },
  {
    id: "20k-30k",
    label: "₹20k - 30k",
    min: 20000,
    max: 30000,
    image: "/image copy 2.png"
  }
];

export const WHATSAPP_NUMBER = "+91 77027 14170";
