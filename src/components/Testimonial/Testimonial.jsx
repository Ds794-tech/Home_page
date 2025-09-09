import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Vikram R., Andheri West",
        role: "CLIENTS",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        review:
            "There’s a peacefulness in the air now — it’s hard to explain, but impossible to ignore.",
        rating: 5,
    },
    {
        name: "Anita M., Kalyani Nagar",
        role: "CLIENTS",
        img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
        review:
            "Knowing my family is breathing cleaner, natural air brings a peace of mind like no other.",
        rating: 4,
    },
    {
        name: "Radhika S., Hiranandani Gardens",
        role: "CLIENTS",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        review:
            "Our house finally feels like a retreat. The difference is visible and tangible within days.",
        rating: 5,
    },
    {
        name: "Nilesh D., Koregaon Park",
        role: "CLIENTS",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        review:
            "It’s like breathing fresh air for the first time. Our home feels lighter, calmer — truly transformed.",
        rating: 4,
    },
    {
        name: "Pooja K., Bandra West",
        role: "CLIENTS",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        review:
            "My headaches vanished, my sleep improved, and the space just feels alive again.",
        rating: 5,
    },
];

const Star = ({ filled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transition-colors duration-300 ${filled ? "text-yellow-400" : "text-gray-300"
            }`}
        fill="currentColor"
        viewBox="0 0 576 512"
    >
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 
    3.8-36.7 36.1-17.7 54.6l105.7 
    103-25 145.5c-4.5 26.3 23.2 
    46 46.4 33.7L288 439.6l130.7 
    68.7c23.2 12.2 50.9-7.4 
    46.4-33.7l-25-145.5 105.7-103c19-18.5 
    8.5-50.8-17.7-54.6L382 150.2 
    316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg>
);

const Testimonials = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto pt-0 md:pt-24 pb-5 lg:px-8 mt-[100px] md:mb-[200px]">
            <h2 data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" className="text-[#6fa77a] uppercase tracking-widest text-sm font-medium mb-4 md:text-left text-center">
                What They Says
            </h2>
            <h1 data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight mb-4 md:text-left text-center">
                Best Feedback From Clients
            </h1>

            <div data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col md:flex-row gap-8 overflow-visible relative z-10">
                {/* Left Image */}
                <div className="md:w-2/5 w-full flex flex-col gap-6 items-center md:items-start">
                    <div className="rounded-3xl overflow-hidden mt-6 w-full max-w-[450px]">
                        <img
                            alt="Client"
                            className="w-full object-cover rounded-3xl h-[300px] sm:h-[400px]"
                            src="https://s29814.pcdn.co/wp-content/uploads/2022/10/Shutterstock_749265139-1.png"
                        />
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="w-full md:w-[70%] relative md:-ml-20 z-10 md:top-12">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                        }}
                        className="mySwiper"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-auto sm:h-[350px] w-full max-w-[90%] mx-auto relative rounded-2xl shadow-xl p-6 flex flex-col group bg-[#f5f5f5] transition-all duration-500 ease-in-out hover:bg-[#3C5C45] hover:text-white">
                                    <div className="flex mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} filled={i < t.rating} />
                                        ))}
                                    </div>
                                    <p className="italic mb-6 flex-grow transition-colors duration-300 text-gray-700 group-hover:text-white">
                                        "{t.review}"
                                    </p>
                                    <div className="flex items-center mt-auto relative z-10">
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg -mt-10 absolute left-4 z-20 transition-all duration-300 group-hover:border-green-300"
                                        />
                                        <div className="ml-16">
                                            <p className="font-bold text-[#2f4231] group-hover:text-white transition-colors duration-300">
                                                {t.name}
                                            </p>
                                            <p className="text-sm text-gray-500 group-hover:text-green-200 transition-colors duration-300">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
