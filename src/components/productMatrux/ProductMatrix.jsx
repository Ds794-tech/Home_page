import { useEffect, useRef, useState } from "react";
import wall_paints from "../../assets/images/Layer 5-BXvCq0A_.png";
import cognitive_layer from "../../assets/images/Layer 8-6pqAUCw7.png";
import thermal_layer from "../../assets/images/Layer 9-BMz00hx3.png";
import sleep_layer from "../../assets/images/layer 10-CkeClbDv.png";
import detox_layer from "../../assets/images/Layer 11-DCnl5neD.png";
import protective_layer from "../../assets/images/Layer 12-DhSHsFoV.png";
import o_layer from "../../assets/images/Layer 1-D5ZM4kFY.png";
import canopy_layer from "../../assets/images/Layer 2-BexuKSly.png";
import o_engine_layer from "../../assets/images/Layer 3--ERj2WWm.png";
import surface_layer from "../../assets/images/Layer 4-keaPhWyQ.png";
import aroma_layer from "../../assets/images/Layer 6-d8dPFCKd.png";
import device_layer from "../../assets/images/Layer 7-BdUfvcRq.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const layers = [
    {
        title: "O₂ Base Layer",
        description:
            "Snake Plant, Areca Palm, Peace Lily, ZZ Plant, Fiddle Leaf Fig, Schefflera, Aloe Vera, Bamboo Palm, Neon Pothos",
        img: o_layer,
    },
    {
        title: "Canopy Series",
        description:
            "Golden Pothos, Heartleaf Philodendron, Betel Leaf (Paan), Dischidia Ovata, Philodendron Brasil",
        img: canopy_layer,
    },
    {
        title: "O₂ Engine Layer",
        description: "Spider Plant, Parlor Palm, Aglaonema Red Lipstick",
        img: o_engine_layer,
    },
    {
        title: "Surface Layer",
        description:
            "Moss Panel (framed), Cork Wall Tile, Terracotta Clay Tile, Hemp-Jute Clay Plaster",
        img: surface_layer,
    },
    {
        title: "Wall Paints",
        description: "APX Lime-Bio Wall Paint, APX Herbal-Antimicrobial Paint",
        img: wall_paints,
    },
    {
        title: "Aroma & Sensory Layer",
        description:
            "Lemongrass Oil Vial, Tulsi-Basil Oil Diffuser, Cedarwood Floor Stick, Eucalyptus Mist Canister",
        img: aroma_layer,
    },
    {
        title: "Device Layer (Bio-Sensors)",
        description: "VOC + PM Sensor Pod, CO + Humidity",
        img: device_layer,
    },
    {
        title: "Cognitive Layer",
        description: "Bamboo Matte Frame, Leaf Vein Print Panel",
        img: cognitive_layer,
    },
    {
        title: "Thermal Layer",
        description: "Hemp-Jute Cooling Curtain, Breath-Circulator Floor Fan",
        img: thermal_layer,
    },
    {
        title: "Sleep Layer",
        description: "Tulsi–Neem Bedsheet",
        img: sleep_layer,
    },
    {
        title: "Detox Layer",
        description: "Activated Charcoal Detox Brick",
        img: detox_layer,
    },
    {
        title: "Protective Barrier Layer",
        description: "Magnetic Mesh Door Shield",
        img: protective_layer,
    },
];


const ProductMatrix = () => {
    const [active, setActive] = useState(layers[0]);

    return (
        <section id="about" className="relative w-full max-w-7xl mx-auto pt-24 pb-5 px-4 sm:px-1 lg:px-6">
            <div data-aos="fade-up" data-aos-delay="0">
                <h2 className="text-[#55a652] uppercase tracking-widest text-sm mb-4">
                    APX O2 - Phase 1
                </h2>
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight text-green-900">
                    12-Layer Product Matrix
                </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="0" className="flex flex-col md:flex-row gap-8">
                {/* Swiper Carousel */}
                <div className="md:w-3/5 relative md:-mr-28 z-40 md:top-10">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            reverseDirection: false, // left to right
                        }}
                        loop={true}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        dir="rtl" // force left-to-right sliding effect
                        onSlideChange={(swiper) => {
                            const idx = swiper.realIndex;
                            setActive(layers[idx]);
                        }}
                        className="mySwiper"
                    >
                        {layers.map((slide, i) => (
                            <SwiperSlide
                                key={i}
                                className="!w-[200px]"
                            >
                                <div className="relative h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-lg group">
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-transform duration-500 border-4 sm:border-8 border-white box-border rounded-2xl group-hover:opacity-0"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center border-4 sm:border-8 bg-[#3B553D] text-white p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <h2 className="text-xl text-center font-bold mb-2">
                                            {slide.title}
                                        </h2>
                                        <p className="text-center text-sm font-light">{slide.description}</p>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                                        <h2 className="text-white text-xl font-bold text-center">
                                            {slide.title}
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Green Info Card */}
                <div className="md:w-[50%] z-10 bg-[#3b553d] p-6 sm:p-8 md:pr-10 pb-10 md:pb-0 rounded-3xl h-auto md:h-[300px] hidden md:block">
                    <div className="w-full md:w-[100%] pl-0 md:pl-24 lg:pl-28 flex flex-col">
                        <div className="h-[150px]">
                            <div className="w-full flex flex-col">
                                <h1 className="text-[#FBFAF5] text-2xl mb-1">{active.title}</h1>
                                <h1 className="bg-[#FBFAF5] text-2xl mb-2 h-1 w-[120px] underline"></h1>
                            </div>
                            <blockquote className="text-white italic text-base sm:text-lg leading-relaxed font-light">
                                {active.description}
                            </blockquote>
                        </div>
                        <div>
                            <button className="px-6 py-3 mt-4 font-bold text-white bg-[#5F8D4E] rounded-full shadow-md transition-all duration-300 hover:bg-green-900 hover:scale-105 cursor-pointer">
                                Explore Solution
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductMatrix;
