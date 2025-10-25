import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleMouseEnter = () => setIsWhatWeDoOpen(true);
  const handleMouseLeave = () => setIsWhatWeDoOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-700">XTERIA</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium relative">
          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="hover:text-blue-600 cursor-pointer list-none">
              What We Do ▾
            </li>

            {/* Mega Dropdown */}
            {isWhatWeDoOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[650px] bg-white shadow-xl border border-t-4 border-t-blue-700 rounded-b-md p-6 flex justify-between gap-8 z-50">
                {/* Left Column */}
                <div className="w-1/2 pr-6">
                  <h3 className="text-lg font-semibold border-l-4 border-yellow-500 pl-2 mb-3">
                    What We Do
                  </h3>
                  <h4 className="text-sm font-bold mb-2 text-gray-500 uppercase">
                    Services
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="hover:text-blue-600 cursor-pointer">Applications</li>
                    <li className="hover:text-blue-600 cursor-pointer">Cloud</li>
                    <li className="hover:text-blue-600 cursor-pointer">Consulting</li>
                    <li className="hover:text-blue-600 cursor-pointer">Cybersecurity</li>
                    <li className="hover:text-blue-600 cursor-pointer">Data & Analytics</li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-200 h-auto mx-4"></div>

                {/* Right Column */}
                <div className="w-1/2 pl-6">
                  <h4 className="text-sm font-bold mb-2 text-gray-500 uppercase">
                    Industries
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="hover:text-blue-600 cursor-pointer">Banking & Finance</li>
                    <li className="hover:text-blue-600 cursor-pointer">Healthcare</li>
                    <li className="hover:text-blue-600 cursor-pointer">Manufacturing</li>
                    <li className="hover:text-blue-600 cursor-pointer">Hi-Tech</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Other links */}
          <li>
            <Link to="/what-we-think" className="hover:text-blue-600 transition">
              What We Think
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About Xteria
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-blue-600 transition">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div
          className="hidden md:flex items-center gap-2 cursor-pointer relative"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/484/484582.png"
            alt="Language"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-medium">EN ▾</span>

          {/* Language dropdown menu */}
          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg w-32 py-2">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                English
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                French
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                German
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Japanese
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-3">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-gray-800 font-medium hover:text-blue-600">
              What We Do ▾
            </summary>
            <ul className="mt-2 pl-3 space-y-1 text-gray-600 text-sm">
              <li>Applications</li>
              <li>Cloud</li>
              <li>Consulting</li>
              <li>Cybersecurity</li>
              <li>Data & Analytics</li>
              <li>Engineering</li>
            </ul>
          </details>

          <div className="border-t border-gray-200 my-2"></div>

          <ul className="space-y-2 text-gray-800 font-medium">
            <li>
              <Link to="/what-we-think" className="hover:text-blue-600">
                What We Think
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Xteria
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
