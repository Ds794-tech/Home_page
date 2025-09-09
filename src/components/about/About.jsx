import React from "react";
import about_image from '../../assets/images/about_image.png'
import bed_image from '../../assets/images/Bed-DFsmDfUY.png'

const AboutSection = () => {
    return (
        <section className="w-full h-full flex items-center justify-center bg-white px-4 md:px-12 pb-36">
            <div className="max-w-7xl w-full flex flex-col-reverse xl:flex-row gap-10 items-center">

                {/* Left Side - Image */}
                <div data-aos="zoom-in" className="relative xl:w-1/2 w-full">
                    <img
                        alt="Kitchen"
                        className="rounded-2xl w-full object-cover"
                        src={about_image}
                    />
                    <div className="absolute bottom-[-150px] left-[100px] animate-float-tilt md:bottom-[-160px] md:left-[250px] lg:left-[450px] xl:left-[250px] w-2/3 md:w-[320px] shadow-lg rounded-2xl overflow-hidden border-4 border-white bg-[#FBFAF5]">
                        <img
                            alt="Room"
                            className="w-full h-auto object-cover"
                            src={bed_image}
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="text-gray-800 xl:w-1/2 w-full md:mt-0 pt-[50px]">
                    <p data-aos="fade-up" className="uppercase text-sm text-[#3b553d] font-semibold tracking-wider mb-2">
                        What is APX O2
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="50" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3b553d] mb-6 leading-tight">
                        Your Home’s Complete Air Detox System
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 mb-6">
                        APX O₂ combines advanced indoor air assessment with natural
                        enhancements like smart plants, moss walls, charcoal packs,
                        non-toxic paints, mineral diffusers, and more designed to elevate
                        your air, health, and mood.
                    </p>

                    {/* Features */}
                    <div className="space-y-6">
                        <div data-aos="fade-up" data-aos-delay="150" className="flex items-start gap-4 group">
                            <span className="text-green-800 text-2xl group-hover:scale-125 transition-transform">
                                💫
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-[#3b553d]">
                                    India's First Indoor Air Wellness Brand.
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Backed by aeroponics innovation and elite wellness design,
                                    APX O₂ is on a mission to change the way urban homes breathe.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4 group">
                            <span className="text-green-800 text-2xl group-hover:scale-125 transition-transform">
                                💫
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-[#3b553d]">
                                    Breathe Better. Live Brighter.
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Nature-powered solutions for a cleaner, healthier home.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 group">
                            <span className="text-green-800 text-2xl group-hover:scale-125 transition-transform">
                                🌿
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-[#3b553d]">
                                    The Future of Indoor Air Wellness
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Smart detox technology meets natural design for total air
                                    transformation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button  data-aos="fade-up" data-aos-delay="300" className="mt-10 px-6 py-3 bg-[#3b553d] text-white rounded-full hover:text-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:bg-green-800 cursor-pointer">
                        Book a Consultation →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
