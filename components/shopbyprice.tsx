import Image from "next/image";

export default function ShopByPrice() {
  const priceRanges = [
    { label: "Under ₹3k", image: "/images/price-5k.jpg" },
    { label: "₹3k - ₹5k", image: "/images/price-10k.jpg" },
    { label: "₹5k - ₹10k", image: "/images/price-20k.jpg" },
    { label: "₹10k - ₹15k", image: "/images/price-30k.jpg" },
    { label: "₹15k - ₹20k", image: "/images/price-50k.jpg" },
    { label: "₹20k - 30k", image: "/images/price-1l.jpg" },
  ];

  return (
    <section className="bg-[#0B0B0B] text-[#F4E7BD] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-[#CBA135] text-center">
          Shop by Price
        </h2>

        <p className="text-center text-[#F4E7BD]/80 mt-2">
          Sarees for every occasion — from everyday elegance to heirloom treasures
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">

          {priceRanges.map((item, i) => (
            <div key={i} className="group cursor-pointer">

              <div className="relative w-full h-64 overflow-hidden rounded-lg border border-[#CBA135]/40 shadow-[0_0_18px_rgba(203,161,53,0.18)]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <p className="text-center mt-3 font-semibold group-hover:text-[#CBA135]">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
