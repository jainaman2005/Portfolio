import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full container mx-auto flex justify-between items-center bg-[#203536] px-6 py-2 text-white rounded-md shadow-lg fixed top-0 sm:top-2 z-5 left-0 right-0 transition-all duration-300 ">
            {/* Title */}
            <div id="title-portfolio" className=" flex items-center gap-2 font-bold text-xl sm:text-2xl">
                <span>Aman</span>
                <span className="text-[#9cfaff]">Portfolio</span>
            </div>

            {/* Hamburger Button */}
            <div id="hamburger-btn" className="sm:hidden">
                <button
                    className="flex flex-col gap-y-1 items-center justify-center w-12 h-10 rounded-md bg-[#132021] hover:bg-[#314c4ecf] transition duration-300 p-2 border border-white cursor-pointer hover:scale-105"
                    onClick={toggleMenu}
                >
                    <span className="w-3/4 bg-white h-1 rounded-md"></span>
                    <span className="w-3/4 bg-white h-1 rounded-md"></span>
                    <span className="w-3/4 bg-white h-1 rounded-md"></span>
                </button>
            </div>

            {/* Navigation */}
            <nav
                className={`${
                    isOpen ? 'flex bg-[rgba(32,53,54,0.6)]' : 'hidden'
                } sm:flex flex-col sm:flex-row items-center gap-4 absolute sm:static top-14 left-0 w-screen sm:w-auto bg-[rgb(32,53,54)] sm:bg-transparent p-4 sm:p-0`}
            >
                <ul className="flex flex-col sm:flex-row gap-x-8 gap-y-4 text-sm font-semibold p-1">
                    <li className="text-center transition hover:scale-110 duration-300">
                        <a
                            href="#about"
                            className="w-full hover:text-[#9cfaff] "
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                    </li>
                    <li className="text-center transition hover:scale-110 duration-300">
                        <a
                            href="#projects"
                            className="w-full hover:text-[#9cfaff] "
                            onClick={toggleMenu}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="text-center transition hover:scale-110 duration-300">
                        <a
                            href="#experience"
                            className="w-full hover:text-[#9cfaff] "
                            onClick={toggleMenu}
                        >
                            Experience
                        </a>
                    </li>
                    <li className="text-center transition hover:scale-110 duration-300">
                        <a
                            href="#contact"
                            className="w-full hover:text-[#9cfaff] "
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;