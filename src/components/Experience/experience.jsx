import React from "react";

const certifications = [
    {
        title: "React Development Certification",
        skillsAcquired: "Learned React.js concepts like hooks, state management, and component-based architecture.",
        credential: "https://example.com/certificate/react",
    },
    {
        title: "Full-Stack Web Development",
        skillsAcquired: "Gained expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and MongoDB.",
        credential: "https://example.com/certificate/fullstack",
    },
];

const internships = [
    {
        title: "Frontend Developer Intern",
        responsibility: "Developed responsive web pages using React.js and Tailwind CSS. Collaborated with the design team to implement UI/UX improvements.",
        timing: "May 2023 - Aug 2023",
        credential: "https://example.com/internship/frontend-letter",
    },
    {
        title: "Backend Developer Intern",
        responsibility: "Built RESTful APIs using Node.js and Express. Worked on database design and optimization using MongoDB.",
        timing: "Sep 2023 - Dec 2023",
        credential: "https://example.com/internship/backend-letter",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full bg-[#1036397f] text-white px-4
             sm:px-8 md:px-12 lg:px-20 py-15  my-10 sm:my-30 lg:my-10"
        >
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center sm:text-justify mb-10 underline underline-offset-8 decoration-[#3b8e92]">
                My Experience
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                {/* Certifications */}
                <div className="bg-[#132021] p-6 rounded-md shadow-lg">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 border-b-2 border-[#dcf1f2] pb-2">
                        Certifications
                    </h2>
                    <ul className="px-5 text-lg list-decimal  text-[#e9f0f1]">
                        {certifications.map((cert, index) => (
                            <li key={index} className="mb-6">
                                <h3 className="text-lg font-bold">{cert.title}</h3>
                                <p className="text-sm">{cert.skillsAcquired}</p>
                                <a
                                    href={cert.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#9cfaff] hover:underline text-sm"
                                >
                                    View Credential
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Internships */}
                <div className="bg-[#132021] p-6 rounded-md shadow-lg">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 border-b-2 border-[#dcf1f2] pb-2">
                        Internships
                    </h2>
                    <ul className="list-disc text-lg px-5 text-[#e9f0f1]">
                        {internships.map((intern, index) => (
                            <li key={index} className="mb-6">
                                <h3 className="text-lg font-bold">{intern.title}</h3>
                                <p className="text-sm mb-2"><span className="text-[#11ad9d] text-md block">Role:</span>{ intern.responsibility}</p>
                                <p className="text-sm text-gray-400 mb-1">{intern.timing}</p>
                                <a
                                    href={intern.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#9cfaff] hover:underline text-sm"
                                >
                                    View Internship Letter
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;