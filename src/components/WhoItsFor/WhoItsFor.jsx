import React from "react";

const WhoItsFor = () => {
    return (
        <section className="min-h-[73vh] w-full bg-[#3C5C45] text-white px-4 sm:px-6 md:px-12 flex items-center justify-center md:mt-0 mt-[70px] py-12 md:py-0">
            <div className="w-full flex flex-col md:flex-row items-stretch gap-10">
                {/* Left Content */}
                <div className="w-full md:w-[70%] flex flex-col gap-8 py-10 md:py-20">
                    {/* Heading */}
                    <div>
                        <p data-aos="fade-up" data-aos-delay="100" className="uppercase tracking-widest text-sm text-[#6fa77a] font-medium mb-4">
                            Who It's For
                        </p>
                        <h2  data-aos="fade-up" data-aos-delay="100" className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-5">
                            Perfect For Elite Homeowners Who :
                        </h2>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col lg:flex-row gap-8 w-full">
                        {/* Image (Left in row) */}
                        <div data-aos="fade-right" className="relative rounded-2xl overflow-hidden shadow-lg w-full lg:w-[40%]">
                            <img
                                alt="Modern living room"
                                className="w-full h-56 sm:h-64 md:h-[300px] object-cover rounded-2xl border-white border-8 duration-500"
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                            />
                        </div>

                        {/* Text Features */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            {/* Feature 1 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4 sm:gap-6">
                                <div className="text-white bg-[#5C7E5E] p-3 rounded-lg">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="text-xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-[18px] font-bold mb-1">
                                        Environment
                                    </h3>
                                    <p className="text-gray-100 text-sm md:text-[14px]">
                                        Want a visibly clean, healthy environment for family.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4 sm:gap-6">
                                <div className="text-white bg-[#5C7E5E] p-3 rounded-lg">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="text-xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-[18px] font-bold mb-1">
                                        Premium Living
                                    </h3>
                                    <p className="text-gray-100 text-sm md:text-[14px]">
                                        Live in premium city homes exposed to pollution.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4 sm:gap-6">
                                <div className="text-white bg-[#5C7E5E] p-3 rounded-lg">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="text-xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-[18px] font-bold mb-1">
                                        Wellness
                                    </h3>
                                    <p className="text-gray-100 text-sm md:text-[14px]">
                                        Care about long-term wellness and aesthetics.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4 sm:gap-6">
                                <div className="text-white bg-[#5C7E5E] p-3 rounded-lg">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="text-xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-[18px] font-bold mb-1">
                                        Powered by Nature
                                    </h3>
                                    <p className="text-gray-100 text-sm md:text-[14px]">
                                        Seek a zero-chemical solution, powered by nature.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-[30%] block">
                    <div data-aos="zoom-in" className="h-full overflow-hidden shadow-lg">
                        <img
                            alt="Kitchen renovation"
                            className="w-full h-56 sm:h-72 md:h-full min-h-[300px] object-cover transition-transform duration-500"
                            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
