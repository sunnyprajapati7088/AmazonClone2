import { useState, useRef } from "react";
const PRODUCTS = [
  "Fresh",
  "MX Player",
  "Sell",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Prime",
  "Customer Service",
  "Electronics",
  "Home & Kitchen",
];
export default function ProductHeader() {

  return (
    <div className="relative flex w-full bg-[#232f3e] text-white">
      {/* Navigation Container */}
      <div className="flex w-full items-center gap-1 overflow-x-auto scrollbar-hide">
        {/* All Menu */}
        <button className="flex min-w-fit items-center gap-1 px-2 py-2 text-sm hover:outline hover:outline-1 hover:outline-white">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          All
        </button>
        {/* Navigation Links */}
        {PRODUCTS.map((item) => (
          <a
            key={item}
            href="#"
            className="min-w-fit whitespace-nowrap px-2 py-2 text-sm hover:outline hover:outline-1 hover:outline-white"
          >
            {item}
          </a>
        ))}

        {/* Republic Day Sale Banner */}
        <div className="ml-auto flex min-w-fit items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2">
          <img
            src="https://m.media-amazon.com/images/I/61rYujl3xDL._AC_UL800_QL65_.jpg"
            alt="Republic Day Sale"
            className="h-6 w-6 object-contain"
          />
          <div className="flex flex-col text-xs font-bold">
            <span>GREAT REPUBLIC DAY SALE</span>
            <span>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
