import React from "react";

const NatureinfusedInterior = () => {
    const interiors = [
        {
            title: "Green Living Room",
            src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Natural Workspace",
            src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Botanical Bedroom",
            src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Eco Modern",
            src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Forest Inside",
            src: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Nature Living Room",
            src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Green Aesthetic",
            src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
        {
            title: "Moss Decor",
            src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        },
    ];

    return (
        <section
            id="about"
            className="pt-12 md:pb-32 px-4 bg-white flex flex-col justify-center mb-[50px]"
        >
            <h2 className="text-3xl font-semibold text-green-900 text-center mb-14">
                Nature-Infused Interiors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {interiors.map((item, idx) => (
                    <div
                        key={idx}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        className="relative group overflow-hidden rounded-md shadow-md"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NatureinfusedInterior;
