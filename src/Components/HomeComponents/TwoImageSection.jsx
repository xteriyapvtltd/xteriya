import imgA from "../../assets/imgA.jpg";
import imgB from "../../assets/imgB.jpg";
import { Link } from "react-router-dom";

export default function TwoImageSection() {
  const images = [
    { id: 1, src: imgA, title: "State of Cyber Security Report", desc: "AI Strengthens and Disrupts Cyber Resilience." },
    { id: 2, src: imgB, title: "Customers success stories", desc: "How Xteriya uses consulting-led, AI-powered stratagies to help customers realize their ambitions." },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row" data-aos="fade-down">
      {images.map((image) => (
        <div key={image.id} className="relative w-full md:w-1/2 h-[650px] overflow-hidden group">
          {/* Image */}
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Overlay for text */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {image.title}
            </h2>

            {/* Paragraph appears on hover */}
            <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.desc}
            </p>

            {/* Button appears below paragraph on hover */}
            <Link
              to="/learn-more"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-semibold px-8 py-3 rounded-3xl text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
