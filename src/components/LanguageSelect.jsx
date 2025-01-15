import React from 'react'

const LANGUAGES = ["ENGLISH", "हिंदी", "தமிழ்"];
function LanguageSelect() {
  return (
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
  );
}

export default LanguageSelect
