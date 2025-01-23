import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import { useSelector } from "react-redux";

const LANGUAGES = ["ENGLISH", "हिंदी", "தமிழ்"];
const CATEGORYES = ["all", "electronics", "computers"];


export default function Navbar() {
  const [searchCategory, setSearchCategory] = useState("all");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const noOfCarts = useSelector((state) => state.cart.Cart).length;
  return (
    <nav className="flex w-full flex-col h-full bg-[#131921] text-white">
   
      <div className="flex flex-wrap items-center gap-2 p-2 md:gap-4">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
            alt="Amazon India"
            className="h-[30px] w-[95px] object-contain"
          />
        </a>

        <button className="hidden items-center gap-1 text-sm hover:outline hover:outline-1 hover:outline-white md:flex">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-300">
              Delivering to Mumbai 400001
            </span>
            <span className="font-bold">Update location</span>
          </div>
        </button>

        <div className="flex flex-1 items-center">
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="h-10 rounded-l-md border-none bg-gray-100 px-4 text-black hover:bg-gray-200"
            >
              {searchCategory === "all" ? "All" : searchCategory}
              <svg
                className="ml-2 inline-block h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg">
                {CATEGORYES.map((category, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSearchCategory(category);
                      setIsCategoryOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="search"
            placeholder="Search Amazon.in"
            className="h-10 flex-1 rounded-none border-none bg-white px-4 text-black focus:outline-none"
          />
          <button className="h-10 rounded-r-md bg-[#febd69] px-4 hover:bg-[#f3a847]">
            <svg
              className="h-5 w-5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        {/* Language Selector List*/}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-1 hover:outline hover:outline-1 hover:outline-white"
          >
            <img
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              alt="India"
              className="h-4 w-6 object-contain"
            />
            <span className="text-sm font-bold">EN</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {isLanguageOpen && (
            <div className="absolute right-0 top-full z-10 mt-1 w-32 rounded-md bg-white py-1 shadow-lg">
              {LANGUAGES.map((lang, i) => (
                <button
                  key={i}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      

        {/* Account & Lists */}
        <Link to={"/sign"}  className="hidden lg:block">
          <button className="flex flex-col items-start hover:outline hover:outline-1 hover:outline-white">
            <span className="text-xs text-gray-300">Hello, sign in</span>
            <span className="flex items-center gap-1 font-bold">
              Account & Lists
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </button>
        </Link>

        {/* Returns & Orders */}
        <a
          href="/orders"
          className="hidden hover:outline hover:outline-1 hover:outline-white lg:block"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-300">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>
        </a>

        {/* Cart */}
        <Link
          to={"/cart"}
          className="flex items-center gap-1 hover:outline hover:outline-1 hover:outline-white"
        >
          <div className="relative">
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f08804] text-sm font-bold text-black">
              {noOfCarts}
            </span>
          </div>
          <span className="hidden font-bold md:inline">Cart</span>
        </Link>
      </div>

      {/* Mobile Location */}
      <button className="flex items-center gap-1 border-t border-gray-700 p-2 text-sm hover:bg-gray-800 md:hidden">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>Delivering to Mumbai 400001 - Update location</span>
      </button>
  <Outlet/>
    </nav>
  );
}
