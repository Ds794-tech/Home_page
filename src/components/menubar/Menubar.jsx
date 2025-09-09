import React from "react";
import { X } from "lucide-react"; // close icon
import apxLogo from "../../assets/images/APX_O2_Logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-[#27362B] text-white z-50 overflow-y-auto flex flex-col transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header with Logo & Close */}
      <div className="flex justify-between items-center px-4 py-6">
        <div className="w-full flex flex-col justify-center items-center relative">
          <img
            alt="APX O2 Logo"
            className="w-36 object-contain"
            src={apxLogo}
          />
          <span className="absolute top-16 left-[20px] md:left-[10px] lg:left-[50px] xl:left-[-35px] text-sm">
            Where oxygen meets design
          </span>
        </div>
        <button onClick={toggleSidebar} className="text-yellow-400 text-2xl">
          <X />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col px-6 mt-4 space-y-4 text-start">
        <a href="#" className="text-lg font-light hover:text-yellow-300">
          Home
        </a>
        <a className="text-lg font-light hover:text-yellow-300">
          About APXO2
        </a>
        <a className="text-lg font-light hover:text-yellow-300">Air DNA Scan</a>
        <a className="text-lg font-light hover:text-yellow-300">
          Explore Solution
        </a>
        <a className="text-lg font-light hover:text-yellow-300">APX O2 Plan</a>
        <a className="text-lg font-light hover:text-yellow-300">
          Become a Member
        </a>
      </div>

      {/* Footer */}
      <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 mt-auto px-6 pb-6">
        <p className="mb-4 md:mb-0 font-semibold text-center md:text-left">
          ALL RIGHT RESERVED - APXO2.COM
        </p>
        <div className="flex gap-6">
          <FaInstagram className="bg-[#5C7E5E] p-2 rounded-full text-white w-8 h-8 hover:bg-[#6a9170] transition-colors duration-200 cursor-pointer" />
          <FaFacebookF className="bg-[#5C7E5E] p-2 rounded-full text-white w-8 h-8 hover:bg-[#6a9170] transition-colors duration-200 cursor-pointer" />
          <FaLinkedinIn className="bg-[#5C7E5E] p-2 rounded-full text-white w-8 h-8 hover:bg-[#6a9170] transition-colors duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
