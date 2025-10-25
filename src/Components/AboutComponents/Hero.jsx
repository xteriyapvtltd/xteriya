
import "aos/dist/aos.css";

import heroImg from "../../assets/about-hero.jpg";
import SmallNav from "../../Components/SmallNav";

export default function Hero() {
 
  return (
    <>
    
    <SmallNav pageName="About Us" />  
    <div className="w-full overflow-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 flex items-center justify-center text-center text-gray-800"
        data-aos="fade-up"
      >
        <img
          src={heroImg}
          alt="Xteriya Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md"
            data-aos="fade-down"
          >
            About XTERIYA
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-sm"
            data-aos="fade-up"
          >
            Leveraging AI-infused technologies to empower clients globally for a resilient, secure, and sustainable future.
          </p>
        </div>
      </section>

      
    </div>
    
</>
  );
}
