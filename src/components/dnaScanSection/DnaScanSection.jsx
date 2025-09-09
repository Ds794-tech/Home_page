import React from "react";

const DnaSection = () => {
    return (
        <section>
            <div className="w-full bg-[#34553A] px-4 md:px-12 text-charcoal font-primary flex flex-col py-2 md:py-0">
                <div  data-aos="fade-up" data-aos-delay="100" className="max-w-5xl mx-auto text-center my-16">
                    <p className="text-[#5F8D4E] mb-2">The Air DNA Scan</p>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Discover What You’re Breathing
                    </h2>
                    <p className="text-base font-light md:text-xl text-white max-w-3xl mx-auto">
                        Our proprietary Air DNA™ Scan detects pollutants, VOCs, humidity,
                        CO₂ levels, allergens, and microbial load. Based on results, we
                        personalize your space's air transformation plan.
                    </p>
                    <button className="bg-yellow-200 text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 hover:-translate-y-2 cursor-pointer mt-5">
                        Book Your Air DNA Scan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DnaSection;
