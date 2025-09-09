import React, { useState, useRef } from "react";
import before_interior from '../../assets/images/before-BPTEYLPq.png'
import after_interior from '../../assets/images/after-DMDdG2f-.png'

const BeforeAfterSection = () => {
  const [position, setPosition] = useState(50); // default 50%
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let newPosition = ((clientX - container.left) / container.width) * 100;

    // clamp between 0 and 100
    newPosition = Math.max(0, Math.min(100, newPosition));
    setPosition(newPosition);
  };

  return (
    <div className="h-full">
      {/* Heading Section */}
      <section data-aos="fade-up" className="bg-[#FBFAF5] py-8 md:py-16 px-4 w-full">
        <div className="text-center">
          <p className="text-green-800 tracking-wide uppercase text-xs md:text-sm font-semibold">
            Before and After Magic
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-8 text-green-950">
            Witness The Design{" "}
            <span className="text-green-700 border-b-2 border-green-700">
              Evolution
            </span>
          </h2>
        </div>
      </section>

      {/* Comparison Slider */}
      <section className="w-full bg-[#FBFAF5] py-4 md:py-6">
        <div
          ref={containerRef}
          className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
          style={{ ["--position"]: `${position}%` }}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
        >
          {/* After Image (Base) */}
          <img
            src={after_interior}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 calc(100% - ${position}%) 0 0)` }}
          >
            <img
              src={before_interior}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Range Input (still works if dragged anywhere) */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-pointer"
          />

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-20"
            style={{
              left: `${position}%`,
              transform: "translateX(-50%)",
            }}
          ></div>

          {/* Drag Button */}
          <div
            className="absolute top-1/2 z-40 bg-white text-black flex items-center justify-center rounded-full shadow transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-base lg:text-xl font-semibold select-none cursor-pointer w-14 h-14 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
            style={{ left: `${position}%` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            DRAG
          </div>

          {/* Labels */}
          <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-white bg-green-900 px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm lg:text-base tracking-wider rounded-xl">
            BEFORE
          </div>
          <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-white bg-green-900 px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm lg:text-base tracking-wider rounded-xl">
            AFTER
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterSection;
