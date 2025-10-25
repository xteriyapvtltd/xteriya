  <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden 
                        bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">

      {/* 🔹 Small Full-width Sticky Nav */}
      {/* <nav
        className={`fixed top-16 left-0 w-full z-40 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 
                    ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-white/20 backdrop-blur-sm"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-10">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span className="hidden md:inline">|</span>
          <span>What We Think</span>
        </div>
      </nav> */}
      <SmallNav pageName="What We Think"/>

      {/* 🔹 Centered Hero Text */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg" data-aos="fade-up">
          What We Think
        </h1>
      </div>

      {/* 🔹 Background Gradient Designs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-1/4 w-36 h-36 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-tr from-green-400/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* 🔹 Overlay for subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
    </section>