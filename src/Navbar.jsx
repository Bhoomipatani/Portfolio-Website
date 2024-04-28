// @flow strict

function Navbar() {
  return (
    <nav className="bg-transparent z-50 relative">
        <div className="flex items-center justify-between p-5">
            <div className="flex flex-shrink-0 items-center">
            <a
                href="/"
                className="text-green text-2xl font-bold pl-12 ">
                Bhoomi Patani
            </a>
            </div>

            <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 pr-12" id="navbar-default">
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink">ABOUT</div>
                </a>
            </li>
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink">EXPERIENCE</div></a>
            </li>
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink">SKILLS</div></a>
            </li>
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink">EDUCATION</div></a>
            </li>
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink">BLOGS</div></a>
            </li>
            <li>
                <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink">PROJECTS</div></a>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;