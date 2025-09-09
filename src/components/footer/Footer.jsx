import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import apx_logo from '../../assets/images/APX_O2_Logo.png'

const Footer = () => {
    const quickLinks = ["Home", "About Us", "Air DNA Scan", "Solutions"];
    const packages = ["1 BHK", "2 BHK", "3 BHK", "Duplex", "Penthouse"];

    return (
        <footer className="w-full bg-[#3C5C45] text-white px-6 md:px-16 py-10">
            <div data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="0" className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {/* Left Section */}
                <div className="flex flex-col relative">
                    <div className="w-full flex flex-col justify-center items-center relative top-0 md:top-[-20px]">
                        <img
                            alt="APX O2 Logo"
                            className="w-40 object-contain"
                            src={apx_logo}
                        />
                        <span className="absolute top-[70px] left-[72px] md:left-0">
                            Where oxygen meets design
                        </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-6">
                        Join our wellness tribe for fresh air tips, clean living insights,
                        and exclusive updates—delivered right to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="rounded-full px-4 py-2 w-full text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5C7E5E] focus:border-transparent placeholder-gray-500"
                        />
                        <button className="bg-[#5C7E5E] hover:bg-[#6a9170] text-white font-semibold rounded-full px-6 py-2 whitespace-nowrap transition-colors duration-200">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-around md:space-between">
                    {/* Quick Links */}
                    <div className="md:pl-8">
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {quickLinks.map((link, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center hover:text-white transition-colors cursor-pointer"
                                >
                                    <span className="mr-2">▸</span> {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Packages */}
                    <div className="md:pl-8">
                        <h2 className="text-lg font-bold mb-4">Our Packages</h2>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {packages.map((pkg, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center hover:text-white transition-colors cursor-pointer"
                                >
                                    <span className="mr-2">▸</span> {pkg}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div data-aos="fade-up"
                data-aos-delay="400"
                data-aos-offset="0" className="max-w-screen-xl mx-auto mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
                <p className="mb-4 md:mb-0 font-semibold">
                    ALL RIGHT RESERVED - APXO2.COM
                </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                    {/* Instagram */}
                    <FaInstagram />
                    {/* LinkedIn */}
                    <FaLinkedin />
                    {/* Twitter */}
                    <FaTwitter />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
