import React from "react";
import { Icon } from '@iconify/react';
import useTyping from "../../hooks/typingHook.js"
import aman_pic from "../../assets/aman_pic.png";
const Home = () => {
    const roles = ["Web Developer", "Data Scientist", "Software Engineer", "AI/ML Engineer"];

    return (
        <section id="home" className="w-full min-h-screen flex flex-col md:flex-row mx-auto items-center justify-center text-white pt-12 gap-4 md:gap-8">
            <div className="flex-1/2 -z-1 place-items-center md:place-items-end">
                <img src={aman_pic} alt="profile-pic"
                    className="w-fit h-70 sm:h-full sm:w-80 md:w-100 lg:w-100 object-cover drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] "
                />
            </div>
            <div className="min-w-70 flex-1/2 flex flex-col gap-2 mx-auto justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-shadow-black text-shadow-md">
                    Hi,<br />
                    I'm Aman Jain
                </h1>
                <div className="flex flex-col gap-0.5 text-lg sm:text-xl md:text-2xl text-gray-200">
                    <p className="">Welcome to My Portfolio</p>
                    <p>I Works as {useTyping(roles)}<span className="font-light">|</span></p>
                </div>
                <div className="flex flex-row text-sm items-center sm:items-start gap-4 text-center">
                    <a
                        href="#project"
                        className="bg-[#7fc7cd] text-[#132021] p-2  rounded-md ring-2 ring-white font-semibold hover:bg-[#9cfaff] transition duration-300
                        outline-1 outline-black hover:scale-105"
                    >
                        <Icon icon="eos-icons:workload" className='inline-block text-lg ' /> My Work
                    </a>
                    <a href="/" download={""}>
                        <button className="bg-[#7fc7cd] text-[#132021] p-2 rounded-md font-semibold ring-2 ring-white  hover:bg-[#9cfaff] transition duration-300
                        outline-1 outline-black hover:scale-105">
                            <Icon icon="mi:download" className="inline-block font-bold text-lg " />Resume
                        </button>
                    </a>
                </div>
                <div className="md:hidden h-10 w-5 border border-neutral-400 self-center rounded-full flex items-start justify-center p-1">
                    <div className="h-full custom-bounce">
                        <a href="#about" className="block w-2.5 h-2.5 bg-neutral-300 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;