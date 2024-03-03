import React from "react";
import "./MarqueeSection.css";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const marqueeData = [
    "Expressing Creativity",
    "Crafted with Passion",
    "Unique Artistry",
    "Handcrafted Masterpieces",
    "Special Offers",
    "Cultural Inspiration",
    "Inspiring Trust",
    "Putting Customers First",
    "Exclusive Creations",
    "Rare Artistic Treasures",
  ];

  return (
    <div className="mt-24 py-6 border-y-[1px] border-slate-700 scroll-m-0">
      <Marquee speed={70} gradient gradientWidth={100} pauseOnHover>
        {marqueeData.map((data, idx) => (
          <div key={idx} className="flex items-center space-x-20">
            <div></div>
            <h1
              className="text-3xl font-bold uppercase text-black"
              style={{ fontFamily: "var(--poppins)" }}
            >
              {data}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M23 0L27.0659 18.9341L46 23L27.0659 27.0659L23 46L18.9341 27.0659L0 23L18.9341 18.9341L23 0Z"
                fill="#DA3E3F"
              ></path>
            </svg>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
