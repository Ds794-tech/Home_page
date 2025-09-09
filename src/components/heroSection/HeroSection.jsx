import React, { useState } from "react";
import { Menu } from "lucide-react"; // mobile icon
import heroImage from "../../assets/images/interior_background_image.jpg";
import apxLogo from "../../assets/images/APX_O2_Logo.png";
import MobileSidebar from "../menubar/Menubar";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div
            className="relative h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Top Info Bar */}
            <div className="hidden md:block">
                <div className="mx-auto w-[80%] rounded-b-2xl bg-gradient-to-r from-[#1e2b22] to-[#2e3f33] bg-opacity-80 backdrop-blur-md shadow-md">
                    <div className="flex justify-between items-center px-6 py-3">
                        {/* Contact Info */}
                        <div className="flex items-center gap-6 text-yellow-100 text-[15px]">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-lg" />
                                <span>info@apxo2.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-lg" />
                                <span>+91 98765 43210</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-yellow-100 text-sm">
                            <a
                                href="#"
                                className="hover:text-white transition transform duration-300 hover:-translate-y-2 py-2"
                            >
                                <FaInstagram className="text-yellow-100 cursor-pointer" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition transform duration-300 hover:-translate-y-2 py-2"
                            >
                                <FaFacebook className="text-yellow-100 cursor-pointer" />

                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition transform duration-300 hover:-translate-y-2 py-2"
                            >
                                <FaTwitter className="text-yellow-100 cursor-pointer" />

                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition transform duration-300 hover:-translate-y-2 py-2"
                            >
                                <FaYoutube className="text-yellow-100 cursor-pointer" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="w-full relative max-w-[1200px] mx-auto flex justify-around md:justify-evenly xl:justify-between items-center pt-4">
                {/* Logo */}
                <div className="w-40 flex flex-col justify-center items-center relative">
                    <img
                        alt="APX O2 Logo"
                        className="w-40 object-contain"
                        src={apxLogo}
                    />
                    <span className="absolute top-24 left-[20px] md:left-[30px] lg:left-[70px] xl:left-[-35px] text-sm text-white">
                        Where oxygen meets design
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-4 lg:gap-8 uppercase text-sm font-medium text-yellow-100">
                    <a href="#" className="hover:underline underline-offset-[10px]">
                        Home
                    </a>
                    <a className="cursor-pointer hover:underline underline-offset-[10px]">
                        About
                    </a>
                    <a className="cursor-pointer hover:underline underline-offset-[10px]">
                        Air DNA Scan
                    </a>
                    <a className="cursor-pointer hover:underline underline-offset-[10px]">
                        Solution
                    </a>
                    <a className="cursor-pointer hover:underline underline-offset-[10px]">
                        APX O2 Plan
                    </a>
                    <a className="cursor-pointer hover:underline underline-offset-[10px]">
                        Become a Member
                    </a>
                </div>

                {/* Mobile Menu */}
                <MobileSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
                <div
                    onClick={toggleSidebar}
                    className="md:hidden flex items-center gap-4"
                >
                    <div className="menu-button cursor-pointer text-yellow-200">
                        <Menu className="text-3xl" />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative top-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 flex items-center justify-start text-left">
                <div className="max-w-3xl">
                    <p className="uppercase text-sm text-center lg:text-left tracking-widest text-yellow-100 mb-2">
                        APX O2 Air Wellness
                    </p>
                    <h1  data-aos="fade-up" className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white text-center lg:text-left">
                        Luxury Air Wellness <br />
                        <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-green-500 bg-clip-text text-transparent text-center lg:text-left">
                            for Elite Homes
                        </span>
                        <br />
                    </h1>
                    <p className="text-md md:text-lg text-gray-100 mb-6 text-center lg:text-left">
                        Breathe visibly pure, naturally enhanced air with APX O₂ — India's
                        first holistic indoor air quality solution.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start gap-4">
                        <button className="bg-yellow-200 text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 hover:-translate-y-2 cursor-pointer">
                            Book Your Air DNA Scan
                        </button>
                        <a className="border border-yellow-200 text-[#34553A] bg-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-200 hover:text-green-900 transition duration-300 hover:-translate-y-2 cursor-pointer text-center">
                            Explore Solutions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
