import React from "react";
import "./project.css";
import Sci_Calci from "../../assets/Calci_Proj.png"
import sort_visual_img from "../../assets/Sorting-Visualizer.png";
import weatherApp_img from "../../assets/weatherApp.png";
const projects = [
    {
        title: "Scientific Calculator",
        image: Sci_Calci,
        url: "/",
        description: "I created a Scientific Calculator using DHTML (HTML, CSS, JavaScript) with support for advanced operations like trigonometry, logarithms, and exponentiation. The calculator uses DOM manipulation for dynamic updates and regular expressions to parse and validate user input, ensuring accurate expression handling and smooth interactivity within a responsive UI.",
    },
    {
        title: "Sorting visualizer",
        image: sort_visual_img,
        url: "https://sorting-visualizer-with-git-6cbc2a-aman-jains-projects-540b55ec.vercel.app/",
        description: "Developed a Sorting Visualizer using Flask that dynamically showcases the step-by-step process of various sorting algorithms through interactive animations.",
    },
    {
        title: "UWeather",
        image: weatherApp_img,
        url: "https://jainaman2005.github.io/WeatherApp/",
        description: "A React-based Weather and AQI App that fetches real-time data from the OpenWeatherMap API. It displays essential weather details and air quality metrics for any city entered by the user.",
    },
];

const Projects = () => {
    return (
        <section
            id="project"
            className="min-h-screen w-full bg-[#1036397f] text-white py-15 px-4 sm:px-8 md:px-12 lg:px-20"
        >
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold decorate underline underline-offset-8 decoration-[#3b8e92] mb-5">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group  perspective-[750px] transform-3d bg-[#20353600] w-full h-80 group-hover:transition-transform duration-700 overflow-hidden rounded-lg "
                    >
                        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180  ">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-[#203536] rounded-lg  overflow-hidden ">
                                <div className="relative w-full h-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <span className="absolute bottom-1/3 left-1/4 bg-[rgba(9,26,26,0.8)]
                                    w-1/2 text-center text-white font-semibold text-xl px-3 py-1 rounded-tr-lg rounded-bl-lg">
                                        {project.title}
                                    </span>
                                </div>
                            </div>
                            {/* Back Side */}
                            <div className="absolute w-full h-full  backface-hidden  bg-gradient-to-r from-[rgb(28,82,85)] to-[#08b0b6] rounded-lg shadow-lg  rotate-y-180 p-4 flex flex-col justify-center items-center  ">
                                <h2 className="text-2xl font-bold mb-4 underline">
                                    <a href={project.url} className="hover:text-black">{project.title}</a>
                                </h2>
                                <p className="text-sm text-center">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;