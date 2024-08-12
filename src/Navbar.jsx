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
        <div className="flex flex-shrink-0 items-center">
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
        <ul
          className={`fixed top-0 left-0 w-2/3 h-full bg-bg_color_2 text-white md:static md:flex md:flex-row md:space-x-4 md:bg-transparent md:h-auto md:w-auto transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <li className="md:hidden mt-4">
            <button
              className="absolute top-4 right-4 p-2 text-white"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="block px-4 py-2">
            <a className="text-sm text-white transition-colors duration-300 hover:text-pink" href="/#skills">
              SKILLS
            </a>
          </li>
          <li className="block px-4 py-2">
            <a className="text-sm text-white transition-colors duration-300 hover:text-pink" href="/#about">
              ABOUT
            </a>
          </li>
          <li className="block px-4 py-2">
            <a className="text-sm text-white transition-colors duration-300 hover:text-pink" href="/#experience">
              EXPERIENCE
            </a>
          </li>
          <li className="block px-4 py-2">
            <a className="text-sm text-white transition-colors duration-300 hover:text-pink" href="/#projects">
              PROJECTS
            </a>
          </li>
          <li className="block px-4 py-2">
            <a className="text-sm text-white transition-colors duration-300 hover:text-pink" href="/#education">
              EDUCATION
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
