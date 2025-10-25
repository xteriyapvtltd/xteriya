

import "aos/dist/aos.css";
import teamImg1 from "../../assets/team1.jpg";
import teamImg2 from "../../assets/team2.jpg";
import teamImg3 from "../../assets/team3.jpg";

function MeetOurTeam() {

    return (

        <>
           {/* 🔹 Team Section */}
              <section className="py-16 px-4 md:px-12 bg-blue-50">
                <div className="max-w-7xl mx-auto text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
                    Meet Our Team
                  </h2>
                  <p className="text-gray-600 text-lg md:text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
                    A group of passionate professionals driving innovation and customer success.
                  </p>
                </div>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {[teamImg1, teamImg2, teamImg3].map((img, idx) => (
                    <div
                      key={idx}
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                      className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                    >
                      <img src={img} alt={`Team ${idx + 1}`} className="w-full h-72 object-cover" />
                    </div>
                  ))}
                </div>
              </section>
        </>
    )
}

export default MeetOurTeam;