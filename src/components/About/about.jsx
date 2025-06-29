import React, { useState } from "react";
const HoverableSkill = ({ skillName, stack }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className="relative cursor-pointer hover:text-[#9cfaff] transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {skillName}
            {isHovered && (
                <div className="absolute -top-15 left-20 ml-4 bg-[#203536] text-white p-4 rounded-md shadow-lg w-48 z-2">
                    <h3 className="text-lg font-semibold mb-2 ">{skillName} Stack</h3>
                    <ul className="list-disc list-inside text-sm z-10">
                        {stack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};
const About = () => {

    const frontendStack = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
    ];
    const BackendStack = [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "RESTful APIs",
    ]
    const programmingLanguages = [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "SQL"
    ]

    return (
        <section
            name="about-section"
            id="about"
            className="w-full min-h-screen flex flex-col items-center text-white px-4 sm:px-8 md:px-12 lg:px-20 bg-[#1036397f] shadow-[0_0_20px_rgba(0,0,0,0.2)] py-15"
        >
            {/* Introduction */}
            <div className="flex flex-col gap-y-2  sm:text-justify mb-8">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold decorate underline underline-offset-8 decoration-[#3b8e92] mb-5">
                    About Me
                </h1>
                <p className="text-sm sm:text-md md:text-xl text-[#e9f0f1] font-serif">
                    I'm a final-year B.Tech CSE student at USICT, GGSIPU (Delhi),
                    passionate about AI/ML — especially in data preprocessing,
                    feature engineering, and model tuning.
                    <br />
                    I love working with real-world datasets and building
                    efficient ML workflows.
                </p>
                <p className="text-sm sm:text-md md:text-xl text-[#e9f0f1] font-serif">
                    I have solid skills in front-end, along with basic backend
                    experience using RESTful APIs.
                    <br />
                    <span className="text-cyan-300 font-semibold">I aim to craft full-stack solutions that merge clean
                    UI with smart, data-driven logic.</span>
                </p>
            </div>

            {/* Grid Layout for Summary, Skills, and Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full">
                {/* Skills Set */}
                <div className="bg-[#132021] p-6 rounded-md shadow-lg relative">
                    <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-4 border-b-2 border-[#dcf1f2] pb-2">Skills</h2>
                    <ul className="list-disc list-inside text-base text-[#e9f0f1]">
                        <HoverableSkill skillName="Frontend Developer" stack={frontendStack} />
                        <HoverableSkill skillName="Backend Developer" stack={BackendStack} />
                        <HoverableSkill
                            skillName="Programming Languages"
                            stack={programmingLanguages}
                        />
                    </ul>
                </div>

                {/* Education */}
                <div className="bg-[#132021] p-6 rounded-md shadow-lg">
                    <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-4 border-b-2 border-[#dcf1f2] pb-2">Education</h2>
                    <ul className="list-none text-base text-[#e9f0f1]">
                        <li>
                            <strong>Bachelor of Technology (B.Tech)</strong>
                            <br />
                            Computer Science, <a href="http://ipu.ac.in/" className="italic text-gray-300 hover:underline hover:text-cyan-500">IPU University</a>
                            <br />
                            <span className="text-sm text-gray-400">2022 - present</span>
                        </li>
                        <li className="mt-4">
                            <strong>High School</strong>
                            <br />
                            R.P.V.V LRKB Delhi
                            <br />
                            <span className="text-sm text-gray-400">2018 - 2022</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;