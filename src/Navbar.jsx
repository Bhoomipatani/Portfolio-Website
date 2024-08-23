import { useState } from "react";
import Logo from "/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent z-50 relative">
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <div className="flex flex-shrink-0">
          <a href="/" className="pl-12">
            <img src={Logo} className="w-12 h-10" alt="Logo" />
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} w-full mx-8 md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-sm md:ml-auto">
            <li className="py-2 md:py-0">
              <a className="transition-colors duration-300 hover:text-pink" href="/#skills">
                SKILLS
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a className="transition-colors duration-300 hover:text-pink" href="/#about">
                ABOUT
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a className="transition-colors duration-300 hover:text-pink" href="/#experience">
                EXPERIENCE
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a className="transition-colors duration-300 hover:text-pink" href="/#projects">
                PROJECTS
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a className="transition-colors duration-300 hover:text-pink" href="/#education">
                EDUCATION
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
