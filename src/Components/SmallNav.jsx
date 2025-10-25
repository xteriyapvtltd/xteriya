import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SmallNav({pageName}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-16 left-0 w-full z-40 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 
                  ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-white/20 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-10">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <span className="hidden md:inline">|</span>
        <span>{pageName}</span>
      </div>
    </nav>
  );
}

export default SmallNav;
