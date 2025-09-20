import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import ContactForm from './contact-form';

interface HeroProps {
  handleWhatsAppClick: () => void;
  handlePhoneClick: () => void;
}

// Sticky CTA Buttons Component for Mobile
const StickyMobileCTA: React.FC<{
  handleWhatsAppClick: () => void;
  handlePhoneClick: () => void;
}> = ({ handleWhatsAppClick, handlePhoneClick }) => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
          className="bg-[#7b6824] hover:bg-[#5a4e1a] text-white text-xs py-2 px-4 h-auto rounded-xl flex items-center justify-center shadow-lg flex-1 gap-2 transition-colors duration-200"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp style={{ width: '20px', height: '20px' }} />
          Message us on WhatsApp
        </Button>
        <Button
          variant="outline"
          className="bg-[#7b6824] hover:bg-[#5a4e1a] text-white text-xs py-2 px-4 h-auto rounded-xl flex items-center justify-center shadow-lg flex-1 gap-2 transition-colors duration-200"
          onClick={handlePhoneClick}
        >
          <FaTelegram style={{ width: '20px', height: '20px' }} />
          Telegram
        </Button>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({
  handleWhatsAppClick,
  handlePhoneClick,
}) => {
  const heroContent = {
    title: 'Welcome to Artemis Hospital',
    subtitle: 'International Patient Services',
    backgroundImage: '/artemis-hero.png',
  };

  return (
    <>
      <section className="relative lg:min-h-[700px] z-10 overflow-hidden">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroContent.backgroundImage}
            alt="Artemis Hospital"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-5 bg-black/40"></div>

        {/* Content Overlay - Container constraints moved here */}
        <div className="relative z-10 container mx-auto px-4 h-full max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-start lg:items-center w-full lg:min-h-[600px]">
            {/* Hero Content - Left Side */}
            <div className="flex flex-col justify-center lg:justify-center h-full text-left pt-8 lg:pt-0 space-y-6 lg:space-y-8">
              {/* Text Content */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {heroContent.title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed">
                  {heroContent.subtitle}
                </p>
              </div>

              {/* CTA Buttons - Desktop Only */}
              <div className="hidden lg:flex flex-col xl:flex-row gap-4 xl:gap-6">
                <Button
                  className="bg-[#7b6824] hover:bg-[#5a4e1a] text-white text-lg py-4 px-8 h-auto rounded-xl flex items-center justify-center font-bold shadow-xl transition-all duration-300 gap-3 min-w-[280px]"
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp style={{ width: '28px', height: '28px' }} />
                  Connect us on WhatsApp
                </Button>
                <Button
                  className="bg-[#7b6824] hover:bg-[#5a4e1a] text-white text-lg py-4 px-8 h-auto rounded-xl flex items-center justify-center font-bold shadow-xl transition-all duration-300 gap-3 min-w-[280px]"
                  onClick={handlePhoneClick}
                >
                  <FaTelegram style={{ width: '28px', height: '28px' }} />
                  Message us on Telegram
                </Button>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="flex justify-center lg:justify-center items-start lg:items-center w-full h-full">
              <div className="w-full max-w-lg">
                <ContactForm />
              </div>
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
