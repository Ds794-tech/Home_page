import React from "react";

const MemberSection = () => {
    return (
        <section
            id="member"
            className="w-full px-4 py-16 pb-0 md:py-32 bg-[#FBFAF5] md:min-h-screen flex items-center md:mt-0"
        >
            <div data-aos="zoom-in" className="relative w-full max-w-7xl mx-auto min-h-[60vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-xl">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                    alt="Interior Design"
                    className="absolute inset-0 w-full h-full object-cover fill-[#3C5C45]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#3C5C45]/60 z-10"></div>

                {/* Content */}
                <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
                    <h4 className="font-bold mb-2 sm:mb-3 text-lg sm:text-xl">
                        Join the O₂ Elite Club
                    </h4>
                    <h1 data-aos="fade-up" data-aos-delay="400" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-4 px-2">
                        Get Exclusive Air Wellness Upgrades
                        <br className="hidden sm:inline-block" /> &amp; Green Rewards
                    </h1>
                    {/* <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mb-4 sm:mb-6 px-4">
                        Members receive seasonal refresh kits, early access to air-tech, and
                        lifestyle perks.
                    </p> */}
                    <button className="bg-[#5C7E5E] mt-20 hover:bg-[#6a9170] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 md:px-8 rounded-full flex items-center gap-2 transition duration-300 text-sm sm:text-base">
                        BECOME A MEMBER
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="mt-[2px]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MemberSection;
