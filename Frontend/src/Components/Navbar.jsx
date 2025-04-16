import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#080716] via-[#120f37] to-[#11111d] text-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-purple-400 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition duration-200">About</Link>
          <Link to="/projects" className="hover:text-purple-400 transition duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-purple-400 transition duration-200">Contact Me</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1 cursor-pointer">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-lg font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-purple-400">Contact Me</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
