

import "aos/dist/aos.css";


function OurCoreValue() {
return(
       <>
{/* 🔹 Core Values */}
  
      <section className="py-16 px-4 md:px-12 bg-blue-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Integrity, Innovation, Collaboration, and Customer Success guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div data-aos="zoom-in" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-700 text-sm">
              We leverage cutting-edge technologies to solve complex problems.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-700 text-sm">
              We uphold honesty and transparency in all our business dealings.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Collaboration</h3>
            <p className="text-gray-700 text-sm">
              Working together with clients and teams to achieve success.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Customer Success</h3>
            <p className="text-gray-700 text-sm">
              Delivering impactful solutions that drive client growth and satisfaction.
            </p>
          </div>
        </div>
      </section>
      </>
      )
}

export default OurCoreValue;