import React from 'react'
const LEFT_NAVBAR_DATA = [
"Trending",
"Best Sellers",
"New Releases",
"Movers and Shakers",
"Digital Content and Devices",
"Echo & Alexa",
"Fire TV",
"Kindle E-Readers & eBooks",
"Audible Audiobooks",
"Amazon Prime Video",
"Amazon Prime Music",
"Shop by Category",
"Mobiles, Computers",
"TV, Appliances, Electronics",
"Mens Fashion",
"Womens Fashion",
"See all",
"Programs & Features",
"Amazon Pay",
"Gift Cards & Mobile Recharges",
"Amazon Launchpad",
"Amazon Business",
"See all",
"Help & Settings",
"Your Account",
"Customer Service",
"Sign in",
"Back to top"
]

function LeftNavbar({ setIsSideBar }) {
  return (
    <div className="w-[400px] h-fit z-10 absolute bg-white flex flex-col items-center">
      <div className="w-full h-24 bg-blue-800 flex items-center justify-around mb-2">
        <div className="rounded-2xl border-black w-[25px] items-center p-3 border-2 h-[25px]">
        </div>
        <div>hello Sunny</div>
        <b className=" text-[25px]" onClick={()=>setIsSideBar(false)}>x</b>
      </div>
      {LEFT_NAVBAR_DATA.map((item, i) => (
        <div
          className="w-[80%] h-[50px] border-b-2 text-black hover:border-black hover:border-2"
          key={i}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default LeftNavbar
