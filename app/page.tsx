'use client';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import Journey from './components/journey';
import TopSpecialists from './components/top-specialists';
import OurHospital from './components/our-hospital';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

export default function Home() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '1234567890';
    const message =
      "Hello, I'm interested in your international patient services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    // Replace with your Telegram username or link
    const telegramUrl = 'https://t.me/yourusername';
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero
          handleWhatsAppClick={handleWhatsAppClick}
          handlePhoneClick={handlePhoneClick}
        />
        <Stats />
        <Journey />
        <TopSpecialists />
        <OurHospital />
        <Testimonials />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
}
