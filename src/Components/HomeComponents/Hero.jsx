import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import heroVideo from "../../assets/XTERIYA.gif";

export default function Hero() {
  

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-end justify-center text-center overflow-hidden">
        {/* 🎞️ Background GIF */}
        <img
          src={heroVideo}
          alt="Hero animation"
          className="absolute inset-0 w-full h-full object-center"
          style={{
            objectFit: "contain",
            imageRendering: "auto",
            transform: "scale(1.05)",
          }}
          data-aos="fade-in"
        />

        {/* 🌫️ Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* ✨ Button (BOTTOM CENTER) */}
        <div
          className="relative z-10 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            to="/about"
            className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-full transition duration-300 hover:bg-gray-800 hover:scale-105"
          >
            Know More
          </Link>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="bg-[#111111] py-12 flex flex-col md:flex-row justify-around items-center px-4 md:px-20">
        {/* 📝 Text */}
        <div
          className="flex-1 text-center md:text-left md:mr-10"
          data-aos="fade-right"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
            From Strategy to Execution with Xteria Consulting
          </h1>
          <p
            className="text-white mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Become better, leaner, and future-ready. At Xteria Consulting, we
            work shoulder to shoulder with our clients — not just advising, but
            executing transformation. With deep industry and functional
            expertise, we deliver measurable outcomes. Let’s connect and build
            your future together.
          </p>
        </div>

        {/* 🎬 Image */}
        <div
          className="flex-1 w-full md:w-auto flex justify-center md:justify-start md:ml-10 mt-8 md:mt-0 px-2 sm:px-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src={heroVideo}
            alt="Hero animation"
            className="w-full max-w-[700px] h-auto md:h-[500px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </div>
  );
}
