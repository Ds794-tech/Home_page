import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const stats = [
    { value: 386, suffix: "+", label: "House Design" },
    { value: 56, suffix: "+", label: "Our Partner" },
    { value: 78, suffix: "+", label: "House Package" },
    { value: 15, suffix: "Y+", label: "Years Of Experience" },
  ];

  // Detect when section comes into view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-[#3b553d] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#b1bc9c] mb-2">
              {inView ? (
                <CountUp start={0} end={item.value} duration={2.5} />
              ) : (
                0
              )}
              {item.suffix}
            </h2>
            <p className="text-white font-semibold text-lg mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
