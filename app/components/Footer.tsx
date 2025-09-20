import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 lg:py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Quick Links Column */}
                    <div>
                        <ul className="space-y-0">
                            <li><a href="#" className="text-[#7b6824] hover:text-[#5a4e1a] font-medium">About Us</a></li>
                            <li><a href="#" className="text-[#7b6824] hover:text-[#5a4e1a] font-medium">Hospitals</a></li>
                            <li><a href="#" className="text-[#7b6824] hover:text-[#5a4e1a] font-medium">Doctors</a></li>
                            <li><a href="#" className="text-[#7b6824] hover:text-[#5a4e1a] font-medium">Specialities</a></li>
                            <li><a href="#" className="text-[#7b6824] hover:text-[#5a4e1a] font-medium">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Accreditation Column */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-[#7b6824] mb-4">List of Accreditation</h3>

                        {/* Accreditation Badges */}
                        <div className="flex justify-center lg:justify-start gap-4 mb-4">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/footer/nabh-logo.png"
                                    alt="NABH Accredited"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/footer/jci-logo.png"
                                    alt="JCI Accredited"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                        </div>

                        <p className="text-lg font-semibold text-[#7b6824]">NABH & JCI Accredited</p>
                    </div>

                    {/* Address Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#7b6824] mb-4">Address</h3>

                        <div className="flex items-start gap-2 mb-3">
                            <div className="w-4 h-4 mt-1 flex-shrink-0">
                                <svg className="w-4 h-4 text-[#7b6824]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-[#7b6824] text-sm leading-relaxed">
                                Sector 51, Main Road, Opposite Village Wazirabad, Near United Nations Park, Gurugram, Haryana - 122003
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <FaPhone className="w-4 h-4 text-[#7b6824]" />
                                <span className="text-[#7b6824] text-sm">+91-124 4511 111</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaWhatsapp className="w-4 h-4 text-[#7b6824]" />
                                <span className="text-[#7b6824] text-sm">+91-9800400498</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div>
                        <div className="w-full h-40 relative overflow-hidden">
                            <Image
                                src="/footer/map-location.png"
                                alt="Artemis Hospital Location Map"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-4 mb-6">
                    <a href="#" className="w-12 h-12 bg-[#7b6824] rounded-full flex items-center justify-center hover:bg-[#5a4e1a] transition-colors">
                        <FaFacebook className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#7b6824] rounded-full flex items-center justify-center hover:bg-[#5a4e1a] transition-colors">
                        <FaXTwitter className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#7b6824] rounded-full flex items-center justify-center hover:bg-[#5a4e1a] transition-colors">
                        <FaInstagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#7b6824] rounded-full flex items-center justify-center hover:bg-[#5a4e1a] transition-colors">
                        <FaYoutube className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#7b6824] rounded-full flex items-center justify-center hover:bg-[#5a4e1a] transition-colors">
                        <FaLinkedin className="w-6 h-6 text-white" />
                    </a>
                </div>

                {/* Copyright and Legal Links */}
                <div className="border-t border-gray-400 pt-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <p className="text-[#7b6824] text-sm order-2 lg:order-1">
                            © 2025 Artemis Hospital. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-end items-baseline gap-4 text-sm text-[#7b6824] order-1 lg:order-2">
                            <a href="#" className="hover:text-[#5a4e1a]">Corporate Info</a>
                            <span className="text-[#7b6824] leading-none">|</span>
                            <a href="#" className="hover:text-[#5a4e1a]">Terms of Use</a>
                            <span className="text-[#7b6824] leading-none">|</span>
                            <a href="#" className="hover:text-[#5a4e1a]">Disclaimer</a>
                            <span className="text-[#7b6824] leading-none">|</span>
                            <a href="#" className="hover:text-[#5a4e1a]">Privacy Policy</a>
                            <span className="text-[#7b6824] leading-none">|</span>
                            <a href="#" className="hover:text-[#5a4e1a]">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
