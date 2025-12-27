import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">

      {/* Top Bar */}
      <div className="bg-[#B8860B] text-[#FFF8DC] text-sm text-center py-2">
        Free shipping on orders over ₹4,999 within India
      </div>

      {/* Main Navbar */}
      <div className="max-w-8xl mx-auto flex justify-between items-center px-8 py-1 bg-[#FFF8E7]">

        {/* LOGO */}
        <div className="flex items-center">
          <Image 
            src="/image.png"
            alt="Company Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        {/* SEARCH INPUT WITH ICON */}
        <div className="relative">
          
          {/* Icon */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B7500]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
              />
            </svg>
          </span>

          {/* Input */}
          <input
            type="text"
            placeholder="Search for Slrsilks"
            className="border border-[#C9A227] bg-[#FFFDF4] rounded-full pl-5 pr-12 py-3 w-72 focus:outline-none placeholder-[#9E7B00] text-[#5C3D00]"
          />
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-6 font-medium text-[#6B2F1A]">
          <a href="#" className="hover:text-[#B8860B] transition">New Arrivals</a>
          <a href="#" className="hover:text-[#B8860B] transition">Kanchipuram</a>
          <a href="#" className="hover:text-[#B8860B] transition">Banarasi</a>
          <a href="#" className="hover:text-[#B8860B] transition">Occasions</a>
          <a href="#" className="hover:text-[#B8860B] transition">Shop All</a>
        </nav>

      </div>
    </header>
  );
}
