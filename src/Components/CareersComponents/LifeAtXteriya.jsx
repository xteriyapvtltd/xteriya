
import "aos/dist/aos.css";
import culture1 from "../../assets/culture1.jpg";
import culture2 from "../../assets/culture2.jpg";
import culture3 from "../../assets/culture3.jpg";

export default function CareerPage() {


  return (

    <>


      {/* 🔹 Culture / Team Images */}
      <section className="py-16 px-4 md:px-12 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
            Life at XTERIYA
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
            Experience a collaborative, innovative, and inclusive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[culture1, culture2, culture3].map((img, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img src={img} alt={`Culture ${idx + 1}`} className="w-full h-72 object-cover" />
            </div>
          ))}
        </div>
      </section>
   
    </>
  );
}
