"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { img: "/image copy.png" },
  { img: "/image copy 2.png" },
  { img: "/image copy 3.png" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 2 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((old) => (old === slides.length - 1 ? 0 : old + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative h-[450px] md:h-[650px] overflow-hidden">

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={slide.img}
            alt="Hero slide"
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

    </section>
  );
}
