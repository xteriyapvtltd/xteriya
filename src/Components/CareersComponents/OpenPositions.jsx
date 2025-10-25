

export default function CareerPage() {
 
  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description: "Build responsive and dynamic web applications using modern frameworks.",
    },
    {
      title: "Backend Developer",
      location: "New York, USA",
      description: "Design scalable APIs and manage cloud infrastructure for clients.",
    },
    {
      title: "AI Engineer",
      location: "London, UK",
      description: "Develop AI-driven solutions and optimize machine learning pipelines.",
    },
  ];

  return (
    <>
    <div className="w-full overflow-hidden">
      {/* 🔹 Open Positions */}
      <section className="py-16 px-4 md:px-12 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
            Open Positions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
            Explore exciting opportunities and grow with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="font-bold text-xl mb-2">{pos.title}</h3>
              <p className="text-gray-600 mb-4">{pos.location}</p>
              <p className="text-gray-700 text-sm">{pos.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
