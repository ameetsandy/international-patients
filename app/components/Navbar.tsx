'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Primary Navbar Component
const PrimaryNavbar = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent("Hello, I'm interested in your services.")}`,
      '_blank'
    );
  };

  return (
    <div className="hidden md:block w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/artemis-logo.png"
              alt="Logo"
              width={160}
              height={42}
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#7b6824]">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+91 80760 36335</span>
            </div>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#7b6824] text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors font-medium"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Secondary Navbar Component - FIXED
const SecondaryNavbar = () => {
  return (
    <div className="hidden md:block w-full bg-[#92834d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
          {/* Left side menu items */}
          <div className="flex items-center space-x-8">
            <Link
              href="/specialities"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Specialities
            </Link>
            <Link
              href="/doctors"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="/locations"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Locations
            </Link>
          </div>

          {/* Right side menu items */}
          <div className="flex items-center space-x-8">
            <Link
              href="/visa"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Visa
            </Link>
            <Link
              href="/testimonials"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/appointments"
              className="font-medium hover:text-gray-200 transition-colors"
            >
              Appointments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Navbar Component
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent("Hello, I'm interested in your services.")}`,
      '_blank'
    );
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden w-full bg-white">
      <div className="flex justify-between items-center px-4 py-3">
        <Link href="/">
          <Image
            src="/artemis-logo.png"
            alt="Logo"
            width={120}
            height={32}
            priority
          />
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="h-6 w-6 text-[#7b6824]" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-80">
            <div className="flex flex-col space-y-6 pt-8">
              {/* Main navigation links */}
              <div className="space-y-1">
                <Link
                  href="/specialities"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Specialities
                </Link>
                <Link
                  href="/doctors"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Doctors
                </Link>
                <Link
                  href="/locations"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Locations
                </Link>
                <Link
                  href="/visa"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Visa
                </Link>
                <Link
                  href="/testimonials"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/appointments"
                  onClick={handleLinkClick}
                  className="block text-lg font-medium text-[#7b6824] hover:text-stone-800 hover:bg-gray-50 py-3 px-2 rounded-lg transition-colors"
                >
                  Appointments
                </Link>
              </div>

              {/* Contact section */}
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <div className="flex items-center gap-3 p-3 bg-gray-50 text-[#7b6824] rounded-lg">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+91 80760 36335</span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#7b6824] text-white px-4 py-3 rounded-lg hover:bg-stone-700 transition-colors font-medium"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp Us
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

// Main Navbar Export
export default function Navbar() {
  return (
    <nav className="w-full shadow-sm sticky top-0 z-50">
      <PrimaryNavbar />
      <SecondaryNavbar />
      <MobileNavbar />
    </nav>
  );
}
