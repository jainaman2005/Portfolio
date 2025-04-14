import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm(
                "service_ihklsgs",
                "template_1na53dk",
                form.current,
                "MxY2XHRZCMZXG4hil"
            ).then(
                (result) => {
                    console.log(result.text);
                    alert("Message Sent Successfully!");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Error Sending Message. Please try again.");
                }
            )
    };
    const details = {
        Name: "Aman Jain",
        phoneNo: "+91-9873918255",
        email: "ajainusict2026@gmail.com",
        Address: "New Delhi, Delhi, India",
    }
    return (
        <section
            id="contact"
            className="w-full bg-[#1036397f] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-15 my-10 sm:my-30 lg:my-10"
        >
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center sm:text-justify mb-10 underline underline-offset-8 decoration-[#3b8e92]">
                Contact Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                <div className="bg-[#03454518] p-6 rounded-md shadow-lg shadow-neutral-800">
                    <h2 className="text-2xl text-center font-semibold mb-10  pb-2 mx-auto w-1/2 bg-[#022426] rounded-lg shadow-md">
                        Contact Details
                    </h2>
                    <ul className="list-none text-base text-[#e9f0f1]">
                        <li className="mb-4">
                            <strong>Name:</strong>{" "}
                            <a
                                href="/"
                                className="text-[#9cfaff] hover:underline"
                            >
                                {details.Name}
                            </a>
                        </li>
                        <li className="mb-4">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:ajainusict26@gmail.com"
                                className="text-[#9cfaff] hover:underline"
                            >
                                {details.email}
                            </a>
                        </li>
                        <li className="mb-4">
                            <strong>Phone:</strong>{" "}
                            <a
                                href="tel:+919873918255"
                                className="text-[#9cfaff] hover:underline"
                            >
                                {details.phoneNo}
                            </a>
                        </li>
                        <li className="mb-4">
                            <strong>Address:</strong> {details.Address}
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="bg-[#132021] p-6 rounded-md shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#dcf1f2] pb-2">
                        Send a Message
                    </h2>
                    <form
                        ref = {form}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-2 rounded-md bg-[#203536] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9cfaff]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-2 rounded-md bg-[#203536] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9cfaff]"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full p-2 rounded-md bg-[#203536] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9cfaff]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#7fc7cd] text-[#132021] px-4 py-2 rounded-md font-semibold hover:bg-[#9cfaff] transition duration-300 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;