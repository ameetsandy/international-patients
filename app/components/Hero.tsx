import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

interface HeroProps {
  handleWhatsAppClick: () => void;
  handlePhoneClick: () => void;
}

const ContactForm = () => {
  const countryCodes = [
    { value: '+1', label: '🇺🇸 +1', country: 'United States' },
    { value: '+44', label: '🇬🇧 +44', country: 'United Kingdom' },
    { value: '+91', label: '🇮🇳 +91', country: 'India' },
  ];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-xl max-w-sm w-full">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-stone-600 mb-1">Get a Doctor's Opinion</h2>
          <p className="text-base text-stone-600">in 24 Hours</p>
        </div>

        <form
          action="https://formsubmit.co/care@nilewellness.com"
          method="POST"
          className="space-y-3"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Treatment Plan Request from Hero Form" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Name Field */}
          <input
            name="name"
            type="text"
            placeholder="Name*"
            required
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-700 text-sm"
          />

          {/* Email Field */}
          <input
            name="email"
            type="email"
            placeholder="Email*"
            required
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-700 text-sm"
          />

          {/* Phone Input with Country Code */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              defaultValue="+91"
              className="p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-700 bg-white text-sm max-w-[120px]"
              title="Select your country code"
            >
              {countryCodes.map((code) => (
                <option key={code.value} value={code.value} title={code.country}>
                  {code.label}
                </option>
              ))}
            </select>
            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number*"
              required
              className="flex-1 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-gray-700 text-sm"
            />
          </div>

          {/* Medical Description */}
          <textarea
            name="medicalDescription"
            placeholder="Briefly describe your medical emergency..."
            rows={4}
            required
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 resize-none text-gray-700 text-sm"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-stone-600 hover:bg-stone-700 text-white text-base py-3 rounded-lg font-semibold"
          >
            Get Free Treatment Plan
          </Button>
        </form>
      </div>
    </div>
  );
};

// Sticky CTA Buttons Component for Mobile
const StickyMobileCTA: React.FC<{ handleWhatsAppClick: () => void; handlePhoneClick: () => void }> = ({
  handleWhatsAppClick,
  handlePhoneClick
}) => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky buttons when user scrolls down more than 50vh
      setShowSticky(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex gap-4 p-4">
        <Button
          className="bg-stone-600 hover:bg-stone-700 text-white text-xs py-2 px-4 h-auto rounded-xl flex items-center justify-center shadow-lg flex-1 gap-2"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp
            style={{ width: '20px', height: '20px' }}
            className="text-white"
          />
          Message us on WhatsApp
        </Button>
        <Button
          variant="outline"
          className="bg-stone-600 hover:bg-stone-700 text-white text-xs py-2 px-4 h-auto rounded-xl flex items-center justify-center shadow-lg flex-1 gap-2"
          onClick={handlePhoneClick}
        >
          <FaTelegram
            style={{ width: '20px', height: '20px' }}
            className="text-white"
          />
          Telegram
        </Button>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ handleWhatsAppClick, handlePhoneClick }) => {
  const heroContent = {
    title: "Welcome to Artemis Hospital",
    subtitle: "International Patient Services",
    backgroundImage: "/artemis-hero.png"
  };

  return (
    <>
      <section className="relative lg:min-h-[700px] z-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroContent.backgroundImage}
            alt="Artemis Hospital"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full">
          {/* Combined Responsive Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center lg:items-stretch w-full py-8 lg:min-h-[700px]">
            {/* Hero Content */}
            <div className="flex flex-col justify-center lg:justify-end h-full text-left pt-20 order-1 lg:order-1">
              {/* Unified Text Content */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-1 lg:mb-6 leading-tight lg:leading-relaxed">
                  {heroContent.title}<br />
                </h1>
                <p className="text-sm lg:text-xl text-white font-medium leading-relaxed">
                  {heroContent.subtitle}
                </p>
              </div>

              {/* CTA Buttons - Desktop Only */}
              <div className="hidden lg:flex flex-row gap-4 mb-0">
                <Button
                  className="bg-stone-600 hover:bg-stone-700 text-white text-base py-3 px-6 h-auto rounded-xl flex items-center justify-center font-bold shadow-lg"
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp
                    style={{ width: '30px', height: '30px' }}
                    className="text-white"
                  />
                  Connect us on WhatsApp
                </Button>
                <Button
                  className="bg-stone-600 hover:bg-stone-700 text-white text-base py-3 px-6 h-auto rounded-xl flex items-center justify-center font-bold shadow-lg"
                  onClick={handlePhoneClick}
                >
                  <FaTelegram
                    style={{ width: '30px', height: '30px' }}
                    className="text-white"
                  />
                  Message us on Telegram
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-2 lg:order-2 mt-auto lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Buttons */}
      <StickyMobileCTA
        handleWhatsAppClick={handleWhatsAppClick}
        handlePhoneClick={handlePhoneClick}
      />
    </>
  );
};

export default Hero;