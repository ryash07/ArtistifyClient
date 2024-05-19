import React from "react";
import "./Instagram.css";
import insta1 from "../../../assets/instagram/instagram1.jpg";
import insta2 from "../../../assets/instagram/instagram2.jpg";
import insta3 from "../../../assets/instagram/instagram3.jpg";
import insta4 from "../../../assets/instagram/instagram4.webp";
import insta5 from "../../../assets/instagram/instagram5.jpg";
import { FaInstagram } from "react-icons/fa6";
// import AnimateText from "@moxy/react-animate-text";

const Instagram = () => {
  const instaImgs = [insta1, insta4, insta3, insta2, insta5];
  const instaLinks = [
    "https://www.instagram.com/aditijain_._/",
    "https://www.instagram.com/_sonia.jat_/",
    "https://www.instagram.com/ryash07/",
    "https://www.instagram.com/_strvlightt._",
    "https://www.instagram.com/k_khushisalvi3?igsh=ZnhnZXVhZ2s0cnZ2",
  ];

  return (
    <section id="connect" className="container pt-14 mb-24 px-4 mx:px-0">
      <div className="flex items-center md:items-end justify-between">
        <h3
          style={{ fontFamily: "var(--italiana)" }}
          className="text-xl md:text-4xl text-black font-bold tracking-wider w-[50%]"
        >
          {/* <AnimateText initialDelay={0.2} wordDelay={0.2}>
            Follow Us On Instagram
          </AnimateText> */}
          Follow Us On Instagram
        </h3>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{ fontFamily: "var(--poppins)" }}
          className="text-xs md:text-lg underline"
        >
          <h5>OUR INSTAGRAM</h5>
        </a>
      </div>

      <div className="md:grid md:grid-cols-5 gap-x-5 mt-8 overflow-x-auto whitespace-nowrap">
        {instaImgs.map((img, index) => (
          <a
            key={img}
            href={instaLinks[index]}
            target="_blank"
            rel="noreferrer"
            className="relative insta-img-con overflow-hidden rounded-xl inline-block h-[300px] w-[60%] md:h-auto md:w-auto md:block mr-6 md:mr-0"
            data-aos="fade-left"
            data-aos-delay={`${index * 150}`}
            style={{height:'350px'}}
          >
            <img src={img} alt="" className="w-full h-full rounded-xl" />
            <div className="insta-img-overlay w-full h-full bg-[#00000066] absolute top-0 left-0 right-0 rounded-xl flex justify-center items-center cursor-pointer opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
              <FaInstagram className="text-4xl text-white font-bold" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
