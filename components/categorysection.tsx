"use client";

import Image from "next/image";

const categories = [
  { title: "Pure Zari Kanchipuram", img: "/cat1.jpg" },
  { title: "Soft Silks", img: "/cat2.jpg" },
  { title: "Tussar", img: "/cat3.jpg" },
  { title: "Crepe", img: "/cat4.jpg" },
  { title: "Half-Fine Zari Kanchipuram", img: "/cat5.jpg" },
  { title: "Brocade Kanchipuram", img: "/cat6.jpg" },
  { title: "Kanchipuram Tissue Silk", img: "/cat7.jpg" },
  { title: "Banarasi Katan Silk", img: "/cat8.jpg" },
  { title: "Banarasi Silk", img: "/cat9.jpg" },
  { title: "Cotton", img: "/cat10.jpg" },
  { title: "Silk Cotton", img: "/cat11.jpg" },
  { title: "Organza", img: "/cat12.jpg" },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>

      <p className="text-gray-600 mb-10">
        Every weave tells a story — explore silks across traditions and find your perfect match
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {categories.map((cat, i) => (
          <div key={i} className="cursor-pointer group">
            <div className="relative w-full h-56 overflow-hidden rounded shadow-sm">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <p className="mt-3 text-gray-800 group-hover:text-red-700 transition">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
