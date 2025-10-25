
import "aos/dist/aos.css";

export default function ApplicationForm() {


  return (

    <>

      {/* 🔹 Application Form */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
            Apply Now
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
            Fill out the form below and take the first step towards joining our team.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto" data-aos="fade-up">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          <input
            type="text"
            placeholder="Job Title"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:col-span-2"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:col-span-2 resize-none"
          />
          <button
            type="submit"
            className="w-full md:col-span-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>

    </>
  );
}
