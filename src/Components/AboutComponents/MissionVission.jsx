

import "aos/dist/aos.css";
import teamImg1 from "../../assets/team1.jpg";
import teamImg2 from "../../assets/team2.jpg";


function MissionVission() {

        return( 
             <section className="py-16 px-4 md:px-12 bg-blue-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-right">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg md:text-xl" data-aos="fade-up">
              To create innovative AI-driven solutions that transform businesses, enhance operational efficiency, and drive sustainable growth.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={teamImg1}
              alt="Mission"
              className="w-full rounded-xl shadow-lg object-cover h-80 md:h-96"
            />
          </div>

          {/* Vision */}
          <div data-aos="fade-right" className="md:order-2 md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-left">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg md:text-xl" data-aos="fade-up">
              To be a global leader in AI technology, empowering organizations to achieve their goals with intelligent, secure, and sustainable solutions.
            </p>
          </div>
          <div data-aos="fade-left" className="md:order-1">
            <img
              src={teamImg2}
              alt="Vision"
              className="w-full rounded-xl shadow-lg object-cover h-80 md:h-96"
            />
          </div>
        </div>
      </section>

        )
}

export default MissionVission;