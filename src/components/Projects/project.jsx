import React from "react";
import "./project.css";
import Sci_Calci from "../../assets/Calci_Proj.png"
const projects = [
    {
        title: "Scientific Calculator",
        image: Sci_Calci,
        url: "/",
        description: "I created a Scientific Calculator using DHTML (HTML, CSS, JavaScript) with support for advanced operations like trigonometry, logarithms, and exponentiation. The calculator uses DOM manipulation for dynamic updates and regular expressions to parse and validate user input, ensuring accurate expression handling and smooth interactivity within a responsive UI.",
    },
    {
        title: "Project 2",
        image: "https://via.placeholder.com/300",
        url: "/",
        description: "This is a description of Project 2.",
    },
    {
        title: "Project 3",
        image: "https://via.placeholder.com/300",
        url: "/",
        description: "This is a description of Project 3.",
    },
];
const backHide = () => {

}
const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full bg-[#1036397f] text-white px-4
             sm:px-8 md:px-12 lg:px-20 py-15  my-10 sm:my-30 lg:my-10"
        >
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center sm:text-justify  mb-10 underline underline-offset-8 decoration-[#3b8e92]">
                My Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group  perspective-[750px] transform-3d bg-[#20353600] w-full h-80 group-hover:transition-transform duration-700 overflow-hidden rounded-lg shadow-md shadow-black/50"
                    >
                        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 shadow-lg shadow-black/50 ">
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