
import heroImg from "../../assets/career-hero.jpg";
export default function Hero() {

  return (

    <>

    
    <div className="w-full overflow-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-100 flex items-center justify-center text-center text-gray-800"
        data-aos="fade-up"
      >
        <img
          src={heroImg}
          alt="Career Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md" data-aos="fade-down">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-sm" data-aos="fade-up">
            Be a part of XTERIYA's journey and help us innovate, create, and transform the future with AI-driven solutions.
          </p>
        </div>
      </section>

        </div>
    </>
  );
}
