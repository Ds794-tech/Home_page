import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const plansData = {
  "1BHK": [
    {
      name: "Starter",
      price: "₹15,000 – ₹17,000",
      includes: "Mini Grove, Spice Vibe, Mist Core",
      skus: "T01–T07, T10–T12",
      skuCount: "22 SKUs",
      amc: "Optional Aroma + VOC refill",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹19,000 – ₹22,000",
      includes: "Starter + Neo Canopy, Cognitive Frame, VOC Bulb, Entry Mesh",
      skus: "T01–T12",
      skuCount: "27–30 SKUs",
      amc: "AMC Lite (1 plant + oil refill)",
      highlight: true,
    },
    {
      name: "AMC+",
      price: "₹24,000 – ₹26,000",
      includes: "Premium + Dashboard Sensor, Flow Clip, QR Mapping",
      skus: "Full Layer 7",
      skuCount: "30–32 SKUs",
      amc: "AMC Pro (VOC sync + app dashboard)",
      highlight: false,
    },
  ],
  "2BHK": [
    {
      name: "Starter",
      price: "₹20,000 – ₹22,000",
      includes: "Mini Grove, Mist Core, Spice Vibe, Entry Mesh",
      skus: "T01–T09",
      skuCount: "25 SKUs",
      amc: "Optional Aroma + VOC refill",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹24,000 – ₹27,000",
      includes: "Starter + Canopy, VOC Bulb, Dashboard Sensor",
      skus: "T01–T12",
      skuCount: "30–33 SKUs",
      amc: "AMC Lite (2 plants + oil refill)",
      highlight: true,
    },
    {
      name: "AMC+",
      price: "₹30,000 – ₹34,000",
      includes: "Premium + Smart Flow, QR Mapping, Full Sensor Pack",
      skus: "Full Layer 7",
      skuCount: "35–38 SKUs",
      amc: "AMC Pro (VOC sync + dashboard)",
      highlight: false,
    },
  ],
  "3BHK": [
    {
      name: "Starter",
      price: "₹25,000 – ₹28,000",
      includes: "Mini Grove, Spice Vibe, Mist Core, Entry Mesh",
      skus: "T01–T10",
      skuCount: "28 SKUs",
      amc: "Optional Aroma + VOC refill",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹30,000 – ₹34,000",
      includes: "Starter + Neo Canopy, VOC Bulb, Smart Entry Shield",
      skus: "T01–T12",
      skuCount: "33–36 SKUs",
      amc: "AMC Lite (3 plants + oil refill)",
      highlight: true,
    },
    {
      name: "AMC+",
      price: "₹38,000 – ₹42,000",
      includes: "Premium + Dashboard Pro, Flow Clip, QR Mapping",
      skus: "Full Layer 7",
      skuCount: "38–42 SKUs",
      amc: "AMC Pro (full monitoring + app)",
      highlight: false,
    },
  ],
  Duplex: [
    {
      name: "Starter",
      price: "₹30,000 – ₹34,000",
      includes: "Mini Grove, Spice Vibe, Mist Core, Entry Mesh",
      skus: "T01–T10",
      skuCount: "32 SKUs",
      amc: "Optional Aroma + VOC refill",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹36,000 – ₹40,000",
      includes: "Starter + Neo Canopy, VOC Bulb, Dashboard Sensor",
      skus: "T01–T12",
      skuCount: "38–42 SKUs",
      amc: "AMC Lite (4 plants + oil refill)",
      highlight: true,
    },
    {
      name: "AMC+",
      price: "₹45,000 – ₹50,000",
      includes: "Premium + Smart Flow, QR Mapping, Advanced Sensors",
      skus: "Full Layer 7",
      skuCount: "45–50 SKUs",
      amc: "AMC Pro (advanced monitoring + app)",
      highlight: false,
    },
  ],
  Penthouse: [
    {
      name: "Starter",
      price: "₹40,000 – ₹45,000",
      includes: "Mini Grove, Spice Vibe, Mist Core, Entry Mesh",
      skus: "T01–T11",
      skuCount: "40 SKUs",
      amc: "Optional Aroma + VOC refill",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹48,000 – ₹54,000",
      includes: "Starter + Neo Canopy, VOC Bulb, Dashboard Sensor",
      skus: "T01–T12",
      skuCount: "48–52 SKUs",
      amc: "AMC Lite (5 plants + oil refill)",
      highlight: true,
    },
    {
      name: "AMC+",
      price: "₹60,000 – ₹65,000",
      includes: "Premium + Smart Flow, QR Mapping, Full Sensor Pack",
      skus: "Full Layer 7",
      skuCount: "55–60 SKUs",
      amc: "AMC Pro (enterprise monitoring + app)",
      highlight: false,
    },
  ],
};

export default function PricingSection() {
  const tabs = ["1BHK", "2BHK", "3BHK", "Duplex", "Penthouse"];
  const [activeTab, setActiveTab] = useState(0);

  // Auto rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const currentPlans = plansData[tabs[activeTab]];

  return (
    <div
      id="Price"
      className="max-w-9xl mx-auto px-4 py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
    >
      {/* Header */}
      <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          FLEXIBLE PACKAGE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Choose Your Perfect Plan
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#34553A]">
          Pricing & Packages
        </h3>
      </div>

      {/* Pricing Navigation + Cards */}
      <div data-aos="fade-up" data-aos-delay="300" className="md:flex items-center justify-center gap-8 max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="md:flex-shrink-0 bg-white hidden md:block hover:bg-green-50 text-[#34553A] w-16 h-16 rounded-full md:flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#34553A] mt-[120px]"
        >
          <ChevronLeft className="w-8 h-8 hidden md:block group-hover:scale-110 transition-transform" />
        </button>

        {/* Pricing Plans */}
        <div className="md:flex-1 md:overflow-hidden md:pb-4 md:px-4">
          <div className="transition-all duration-500 ease-in-out">
            {/* Tabs */}
            <div className="flex justify-center flex-wrap mt-6 gap-10 mb-16">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    idx === activeTab
                      ? "bg-[#34553A] text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-[#34553A] hover:text-white shadow-md"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                  <span className="text-sm font-medium">{tab}</span>
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentPlans.map((plan, idx) => (
                <div key={idx}>
                  <div
                    className={`relative flex flex-col justify-between rounded-2xl border-2 transition-all duration-300 hover:shadow-xl p-6 h-[475px] transform hover:scale-105 ${
                      plan.highlight
                        ? "border-[#5F8D4E] bg-green-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-[#34553A] bg-white"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[#5F8D4E] text-white rounded-full font-bold shadow-lg px-4 py-1 text-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-center mb-4">
                        <h4
                          className={`font-bold mb-2 text-2xl ${
                            plan.highlight
                              ? "text-[#34553A]"
                              : "text-gray-800"
                          }`}
                        >
                          {plan.name}
                        </h4>
                        <div
                          className={`font-bold mb-4 text-2xl ${
                            plan.highlight
                              ? "text-[#34553A]"
                              : "text-gray-800"
                          }`}
                        >
                          {plan.price}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-700 mb-2 text-lg">
                          Package Includes:
                        </h5>
                        <p className="text-gray-600 leading-relaxed mb-3 text-base">
                          {plan.includes}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span className="bg-gray-100 text-gray-700 rounded-full font-medium px-3 py-1 text-sm">
                          {plan.skus}
                        </span>
                        <span
                          className={`rounded-full font-medium px-3 py-1 text-sm ${
                            plan.highlight
                              ? "bg-white text-[#34553A]"
                              : "bg-green-50 text-[#34553A]"
                          }`}
                        >
                          {plan.skuCount}
                        </span>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-bold text-gray-700 mb-1 text-base">
                          AMC Details:
                        </h5>
                        <p className="text-gray-600 text-base">{plan.amc}</p>
                      </div>
                    </div>
                    <button
                      className={`w-full rounded-xl font-semibold transition-all duration-300 py-3 text-lg ${
                        plan.highlight
                          ? "bg-[#34553A] text-white hover:shadow-xl"
                          : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-[#34553A] hover:shadow-md"
                      }`}
                    >
                      Select {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="md:flex-shrink-0 hidden md:block bg-white hover:bg-green-50 text-[#34553A] w-16 h-16 rounded-full md:flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#34553A] mt-[120px]"
        >
          <ChevronRight className="w-8 h-8 hidden md:block group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
