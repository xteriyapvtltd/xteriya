import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sectionImg1 from "../../assets/healthcare.jpg";
import sectionImg2 from "../../assets/bank.jpg";
import sectionImg3 from "../../assets/genai.jpg";
import sectionImg4 from "../../assets/logistics.jpg";

export default function WhatWeThinkFourRowSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const rows = [
    {
      image: sectionImg1,
      content: (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Healthcare Innovation</h2>
          <p className="text-base md:text-lg text-gray-800">
            Leveraging technology to improve patient care, hospital management, and healthcare accessibility.
          </p>
        </div>
      ),
      reverse: false,
      animation: "fade-right",
    },
    {
      image: sectionImg2,
      content: (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Banking & Finance</h2>
          <p className="text-base md:text-lg text-gray-800">
            Transforming financial services with secure, scalable, and efficient digital solutions.
          </p>
        </div>
      ),
      reverse: true,
      animation: "fade-left",
    },
    {
      image: sectionImg3,
      content: (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Generative AI</h2>
          <p className="text-base md:text-lg text-gray-800">
            Building intelligent systems that empower creativity, automation, and data-driven insights.
          </p>
        </div>
      ),
      reverse: false,
      animation: "fade-right",
    },
    {
      image: sectionImg4,
      content: (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Logistics & Supply Chain</h2>
          <p className="text-base md:text-lg text-gray-800">
            Optimizing operations and improving delivery efficiency with cutting-edge technology.
          </p>
        </div>
      ),
      reverse: true,
      animation: "fade-left",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap ${
            row.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div
            className="w-full md:w-1/2 h-auto md:h-[400px] relative"
            data-aos={row.animation}
          >
            <img
              src={row.image}
              alt={`Row ${index + 1}`}
              className="w-full h-full md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div
            className="w-full md:w-1/2 flex items-center justify-center h-auto md:h-[400px] bg-white text-black text-center md:text-left px-6 py-6 md:py-0"
            data-aos={row.reverse ? "fade-left" : "fade-right"}
          >
            {row.content}
          </div>
        </div>
      ))}
    </div>
  );
}
