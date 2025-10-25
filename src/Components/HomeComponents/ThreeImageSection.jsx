
import "aos/dist/aos.css";

import img1 from "../../assets/revenue.jpg";
import img2 from "../../assets/achieve.jpg";
import img3 from "../../assets/ai.jpg";

const images = [
  {
    id: 1,
    src: img1,
    title: "Q2 FY26 Earnings",
    content: [
      "IT Service Revenue: $1.2B",
      "Net Income: $350M",
      "Large Deals: 12",
      "Adjusted Operating Margin: 22%",
    ],
    aos: "fade-right",
  },
  {
    id: 2,
    src: img2,
    title: "Xteriya's Commitment",
    content: ["Proudly committed to achieving net-zero emissions by 2040"],
    aos: "fade-up",
  },
  {
    id: 3,
    src: img3,
    title: "Agnetic AI",
    content: ["The new Frontier in Financial Services Innovation by Capco"],
    aos: "fade-left",
  },
];

export default function ThreeImageSection() {
 

  return (
    <section
      className="w-full flex flex-col md:flex-row"
      data-aos="fade-down-right"
    >
      {images.map((image, index) => (
        <div
          key={image.id}
          className="relative w-full md:w-1/3 h-[550px] overflow-hidden group"
          data-aos={image.aos}
          data-aos-delay={index * 150}
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <h2
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 200 + 100}
            >
              {image.title}
            </h2>

            {image.content.map((line, idx) => (
              <p
                key={idx}
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 150 + idx * 100}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
