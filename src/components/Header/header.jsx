import React, { useState } from 'react';
import {Icon} from '@iconify/react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerStyle  = {
        color: "white",
        background: "#203536",
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navSections = ['Home', 'About', 'Project', 'Experience', 'Contact'];
    const createNavlist = () => {
        return navSections.map((section,index) =>
            <li className="text-center transition hover:scale-110 duration-300" key={index}>
                <a
                    href={`#${section.trim().toLowerCase()}`}
                    className="w-full hover:text-[#a3d8c8] "
                    onClick={toggleMenu}
                >
                    {`${section.trim().charAt(0).toUpperCase() + section.trim().substring(1).toLowerCase()}`}
                </a>
            </li>
        )
    }
    return (
        <header className="z-50 w-full md:w-[95%] mx-auto flex justify-between fixed md:top-0.5 md:border md:left-0 md:right-0  border-neutral-800 md:rounded-md py-2 px-5 transition-all duration-300" style={headerStyle}>
            {/* Title */}
            <div id="title-portfolio" className="flex items-center gap-2 font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-600 via-cyan-300 to-cyan-600 bg-clip-text text-transparent edu-nsw-act-cursive animate-flow">
                <span className='text-cyan-300 text-xl font-stretch-ultra-condensed'>{"<AJ>"}</span>
                <a href="/">Aman Portfolio</a>
            </div>

            {/* Hamburger Button */}
            <div id="hamburger-btn" className="md:hidden">
                <button
                    className=" rounded-md bg-[#132021] hover:bg-[#314c4ecf] transition duration-300 p-2 cursor-pointer hover:scale-105 outline outline-cyan-200"
                    onClick={toggleMenu}
                >
                    <Icon icon = {isOpen ? "line-md:close":"line-md:menu"} className='text-2xl font-bold'/>
                </button>
            </div>

            {/* Navigation */}
            <nav
                className={`${isOpen ? 'flex' : 'hidden'
                    } flex-col md:flex md:flex-row items-center absolute md:static top-14 left-0 right-0 w-screen md:w-auto  bg-[#203536] py-3 sm:p-0.5`}
            >
                <ul className="flex flex-col md:flex-row gap-5 lg:gap-x-10  text-sm font-semibold ">
                    {createNavlist()}
                </ul>
            </nav>
        </header>
    );
};

export default Header;