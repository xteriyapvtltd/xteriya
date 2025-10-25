import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Company Name & Copyright */}
        <div className="text-lg font-bold text-center sm:text-left">
          &copy; {new Date().getFullYear()} Xteriya. All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-blue-700 transition">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
