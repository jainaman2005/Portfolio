import React, { useState, useEffect, use } from "react";
import aman_pic from "../../assets/aman_pic.png";
const Hero = () => {
    const roles = ["Web Developer", "Data Scientist", "Software Engineer", "AI/ML Engineer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState(roles[currentIndex]);
    const [isDeleting, setIsDeleting] = useState(true);
    useEffect(() => {
        const currentRole = roles[currentIndex];
        const typingSpeed = isDeleting ? 100 : 150;
    
        const interval = setInterval(() => {
          setDisplayText((prev) => {
            const updatedText = isDeleting
              ? currentRole.slice(0, prev.length - 1)
              : currentRole.slice(0, prev.length + 1);
    
            // Check if typing or deleting is complete
            if (!isDeleting && updatedText === currentRole) {
              setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && updatedText === '') {
              setIsDeleting(false);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
    
            return updatedText;
          });
        }, typingSpeed);
    
        return () => clearInterval(interval);
      }, [currentIndex, isDeleting]);
    
    return (
        <section name="hero-section" className="w-full flex flex-col sm:flex-row items-center justify-center flex-wrap min-h-sreen max-h-5xl text-white mt-20 sm:mt-15 lg:my-12 gap-2.5 sm:gap-10 md:gap-10 lg:gap-5 2xl:gap-x-0 xl:px-20 2xl:px-0 bg-[#1036397f] shadow-[0_0_20px_rgba(0,0,0,0.2)] ">
            <div className=" flex h-fit md:h-full
            items-center md:w-1/2 justify-center lg:w-fit p-1.5 sm:p-2 flex-wrap">
                <img src={aman_pic} alt="profile-pic"
                    className="w-fit h-80 sm:h-full sm:w-80 md:w-100 lg:w-100 object-cover drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                />
            </div>
            <div className="flex !max-w-[350px] flex-col items-center sm:items-start justify-center text-white flex-wrap gap-2 sm:gap-4 md:max-w-1/2 lg:max-w-fit md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8  sm:h-1/2 md:h-full  p-1.5 sm:p-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center md:text-justify text-shadow-black text-shadow-md">
                    Hi,
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-shadow-black text-shadow-md">
                    I'm Aman Jain
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl  text-center   text-[#e9f0f1] transform-flattening ">
                    Welcome to My Portfolio
                </p>

                <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-shadow-gray-800 text-shadow-sm h-1/4">
                    I Works as {displayText} <span className="font-light">|</span>
                </p>
                <div className="flex flex-row items-center sm:items-start justify-center gap-4 text-center">
                    <a
                        href="#projects"
                        className="bg-[#7fc7cd] text-[#132021] p-2  rounded-md ring-2 ring-white font-semibold hover:bg-[#9cfaff] transition duration-300
                        outline-1 outline-black hover:scale-105"
                    >
                        View My Work
                    </a>
                    <a href="/">
                        <button className="bg-[#7fc7cd] text-[#132021] p-2 rounded-md font-semibold ring-2 ring-white  hover:bg-[#9cfaff] transition duration-300
                        outline-1 outline-black hover:scale-105">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;