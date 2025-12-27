const products = [
  { title: "Kanchipuram Silk Saree", price: "₹14,999", img: "/saree1.jpg" },
  { title: "Banarasi Silk Saree", price: "₹12,499", img: "/saree2.jpg" },
  { title: "Traditional Wedding Saree", price: "₹18,999", img: "/saree3.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 bg-[#f6f0e6]">
      <h2 className="text-4xl font-semibold text-[#7a1f1f]">
        Featured Products
      </h2>

      <p className="text-gray-700 mb-10 mt-2">
        Fresh weaves added daily — discover sarees handwoven just for you
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="
              rounded-xl 
              overflow-hidden 
              bg-[#3d0e0e] 
              shadow-xl 
              border 
              border-[#d4af37]/40
              hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]
              hover:scale-105 
              transition 
              duration-300
            "
          >
            <img
              src={p.img}
              className="h-80 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-medium text-[#f9e8c9] tracking-wide">
                {p.title}
              </h3>

              <p className="text-[#d4af37] font-bold mt-3 text-lg">
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
