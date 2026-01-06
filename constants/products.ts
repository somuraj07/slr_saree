// All product data - Update this file to manage all products without touching UI

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  images: string[]; // Multiple images for each saree
  category: string;
  description?: string;
  inStock: boolean;
  featured?: boolean;
  discount?: number; // Discount percentage
  sizes?: string[]; // Available sizes if applicable
  colors?: string[]; // Available colors
  material?: string;
  careInstructions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Kanchipuram Pure Zari Silk Saree",
    price: "₹14,999",
    originalPrice: "₹18,999",
    images: ["/image copy.png", "/image copy 2.png", "/image copy 5.png", "/image.png"],
    category: "Kanchipuram",
    description: "Traditional handwoven Kanchipuram silk saree with pure zari work. This exquisite piece features intricate temple borders and traditional motifs that showcase the rich heritage of South Indian craftsmanship.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Pure Silk with Pure Zari",
    careInstructions: "Dry clean only. Store in a cool, dry place wrapped in muslin cloth.",
  },
  {
    id: "2",
    title: "Banarasi Katan Silk Saree",
    price: "₹12,499",
    originalPrice: "₹15,999",
    images: ["/image copy 2.png", "/image copy.png", "/image copy 5.png", "/image.png"],
    category: "Banarasi",
    description: "Elegant Banarasi silk saree with intricate brocade patterns. Handwoven by master craftsmen, this piece embodies the timeless elegance of Varanasi's weaving tradition.",
    inStock: true,
    featured: true,
    discount: 22,
    material: "Katan Silk with Zari",
    careInstructions: "Dry clean recommended. Avoid direct sunlight.",
  },
  {
    id: "3",
    title: "Traditional Wedding Silk Saree",
    price: "₹18,999",
    originalPrice: "₹22,999",
    images: ["/image copy 5.png", "/image copy.png", "/image copy 2.png", "/image.png"],
    category: "Wedding",
    description: "Luxurious wedding saree with heavy zari and embroidery work. Perfect for your special day, this heirloom piece will be treasured for generations.",
    inStock: true,
    featured: true,
    discount: 17,
    material: "Pure Silk with Heavy Zari",
    careInstructions: "Professional dry clean only. Store in original packaging.",
  },
  {
    id: "4",
    title: "Soft Silk Kanchipuram Saree",
    price: "₹9,999",
    originalPrice: "₹12,999",
    images: ["/image.png", "/image copy.png", "/image copy 2.png"],
    category: "Kanchipuram",
    description: "Comfortable soft silk Kanchipuram saree for daily wear. Lightweight yet elegant, perfect for festivals and special occasions.",
    inStock: true,
    featured: false,
    discount: 23,
    material: "Soft Silk",
    careInstructions: "Hand wash or dry clean. Iron on low heat.",
  },
  {
    id: "5",
    title: "Tussar Silk Saree",
    price: "₹7,499",
    originalPrice: "₹9,999",
    images: ["/image copy.png", "/image copy 2.png", "/image.png"],
    category: "Tussar",
    description: "Natural tussar silk saree with traditional motifs. Known for its natural golden hue and texture.",
    inStock: true,
    featured: false,
    discount: 25,
    material: "Pure Tussar Silk",
    careInstructions: "Dry clean only. Handle with care.",
  },
  {
    id: "6",
    title: "Crepe Silk Saree",
    price: "₹6,999",
    originalPrice: "₹8,999",
    images: ["/image copy 2.png", "/image copy 5.png", "/image.png"],
    category: "Crepe",
    description: "Elegant crepe silk saree perfect for parties and events. Drapes beautifully and feels luxurious.",
    inStock: true,
    featured: false,
    discount: 22,
    material: "Crepe Silk",
    careInstructions: "Dry clean or gentle hand wash.",
  },
  {
    id: "7",
    title: "Brocade Kanchipuram Saree",
    price: "₹16,999",
    originalPrice: "₹20,999",
    images: ["/image copy 5.png", "/image copy.png", "/image copy 2.png", "/image.png"],
    category: "Kanchipuram",
    description: "Heavy brocade work Kanchipuram saree with temple border. A statement piece for grand occasions.",
    inStock: true,
    featured: true,
    discount: 19,
    material: "Silk with Brocade Work",
    careInstructions: "Dry clean only. Store flat or hang properly.",
  },
  {
    id: "8",
    title: "Kanchipuram Tissue Silk Saree",
    price: "₹11,999",
    originalPrice: "₹14,999",
    images: ["/image.png", "/image copy.png", "/image copy 2.png"],
    category: "Kanchipuram",
    description: "Lightweight tissue silk Kanchipuram saree. Perfect for summer weddings and events.",
    inStock: true,
    featured: false,
    discount: 20,
    material: "Tissue Silk",
    careInstructions: "Dry clean recommended.",
  },
  {
    id: "9",
    title: "Banarasi Silk Saree",
    price: "₹13,499",
    originalPrice: "₹16,999",
    images: ["/image copy.png", "/image copy 2.png", "/image copy 5.png"],
    category: "Banarasi",
    description: "Classic Banarasi silk saree with traditional patterns. A timeless addition to your wardrobe.",
    inStock: true,
    featured: false,
    discount: 21,
    material: "Banarasi Silk",
    careInstructions: "Dry clean only.",
  },
  {
    id: "10",
    title: "Cotton Silk Saree",
    price: "₹4,999",
    originalPrice: "₹6,999",
    images: ["/image copy 2.png", "/image.png", "/image copy.png"],
    category: "Cotton",
    description: "Comfortable cotton silk blend saree for everyday wear. Easy to maintain and elegant.",
    inStock: true,
    featured: false,
    discount: 29,
    material: "Cotton Silk Blend",
    careInstructions: "Machine wash on gentle cycle or hand wash.",
  },
  {
    id: "11",
    title: "Organza Silk Saree",
    price: "₹8,499",
    originalPrice: "₹10,999",
    images: ["/image copy 5.png", "/image.png", "/image copy 2.png"],
    category: "Organza",
    description: "Sheer organza silk saree with delicate embroidery. Light and airy, perfect for parties.",
    inStock: true,
    featured: false,
    discount: 23,
    material: "Organza Silk",
    careInstructions: "Dry clean only. Handle with extreme care.",
  },
  {
    id: "12",
    title: "Half-Fine Zari Kanchipuram",
    price: "₹10,999",
    originalPrice: "₹13,999",
    images: ["/image.png", "/image copy.png", "/image copy 2.png", "/image copy 5.png"],
    category: "Kanchipuram",
    description: "Half-fine zari Kanchipuram saree with traditional motifs. Beautiful balance of elegance and affordability.",
    inStock: true,
    featured: false,
    discount: 21,
    material: "Silk with Half-Fine Zari",
    careInstructions: "Dry clean only.",
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
  },
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
  },
];

// WhatsApp number - Update this to your WhatsApp number
export const WHATSAPP_NUMBER = "+919908864288"; // Replace with your actual WhatsApp number

