import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 bg-[#203536] px-4 py-2 text-white flex flex-col sm:flex-row items-center w-screen justify-between">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4">
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 transition duration-300 hover:scale-110 drop-shadow-zinc-400"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition duration-300 hover:scale-110 drop-shadow-zinc-400"
                >
                    <FaTwitter size={24} />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition duration-300 hover:scale-110 drop-shadow-zinc-400"
                >
                    <FaGithub size={24} />
                </a>
            </div>

            {/* Footer Text */}
            <div>
                <p className="text-center text-sm sm:text-base md:text-lg text-gray-500">
                    © {new Date().getFullYear()}{" "}
                    <a href="/" className="text-[#7fc7cd] font-bold italic">
                        Aman Jain
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;