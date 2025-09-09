import React from "react";

const AirDetoxSection = () => {
    return (
        <section>
            <div className="w-full bg-softWhite px-4 md:px-12 text-charcoal font-primary flex flex-col py-16 justify-center min-h-screen md:py-0">
                {/* Heading */}
                <div data-aos="fade-up" data-aos-delay="100" className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-green-900 mb-4">
                        Your Home&apos;s Complete Air Detox System
                    </h2>
                    <p className="text-base font-light md:text-xl text-gray-600 max-w-3xl mx-auto">
                        APX O₂ combines advanced indoor air assessment with natural
                        enhancements like smart plants, moss walls, charcoal packs,
                        non-toxic paints, mineral diffusers, and more — designed to elevate
                        your air, health, and mood.
                    </p>
                </div>



                {/* Subheading */}
                <div className="max-w-6xl mx-auto">
                    <h3 data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-4xl font-heading font-bold text-center mb-12 text-green-900">
                        Natural Upgrades, Personalized For Your Home
                    </h3>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Smart Plants */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-leaf w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">Smart Plants</h4>
                                <p className="text-gray-500 text-sm">
                                    For oxygen boost, CO₂ and pollutant absorption.
                                </p>
                            </div>
                        </div>

                        {/* Moss Panels */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-droplets w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">Moss Panels</h4>
                                <p className="text-gray-500 text-sm">
                                    Zero-maintenance, aesthetic air purifiers.
                                </p>
                            </div>
                        </div>

                        {/* Mineral Diffusers */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-atom w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
                                            <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">Mineral Diffusers</h4>
                                <p className="text-gray-500 text-sm">For mood and microbial balance.</p>
                            </div>
                        </div>

                        {/* Non-Toxic Paints */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-paintbrush w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <path d="m14.622 17.897-10.68-2.913"></path>
                                            <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path>
                                            <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">Non-Toxic Paints</h4>
                                <p className="text-gray-500 text-sm">VOC-free, infused with minerals.</p>
                            </div>
                        </div>

                        {/* Activated Charcoal Packs */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shield-check w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">
                                    Activated Charcoal Packs
                                </h4>
                                <p className="text-gray-500 text-sm">Absorb hidden chemical gases.</p>
                            </div>
                        </div>

                        {/* Air DNA AI Engine */}
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
                            <div className="group flex-shrink-0">
                                <div className="bg-naturalGreen bg-amber-700 p-3 rounded-full transition-colors duration-300 group-hover:bg-gray-700">
                                    <span className="text-white group-hover:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-circle-check-big w-8 h-8 text-naturalGreen"
                                            aria-hidden="true"
                                        >
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                            <path d="m9 11 3 3L22 4"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-base md:text-lg font-semibold">Air DNA AI Engine</h4>
                                <p className="text-gray-500 text-sm">Ongoing monitoring &amp; alerts.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AirDetoxSection;
