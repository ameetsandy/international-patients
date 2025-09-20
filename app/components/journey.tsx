import React from 'react';
import Image from 'next/image';

interface JourneyItem {
  icon: string;
  label: string;
}

const journeyItems: JourneyItem[] = [
  {
    icon: '/journey-icons/visa.png',
    label: 'Instant Visa Letter'
  },
  {
    icon: '/journey-icons/flight.png',
    label: 'Flight Bookings'
  },
  {
    icon: '/journey-icons/taxi.png',
    label: 'Free Airport Pickup'
  },
  {
    icon: '/journey-icons/sim.png',
    label: 'Free Local SIM'
  },
  {
    icon: '/journey-icons/accommodation.png',
    label: 'Accommodation'
  },
  {
    icon: '/journey-icons/manager.png',
    label: '24/7 Dedicated Manager'
  }
];

const Journey: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Text */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#7b6824] mb-4">
            At Artemis, we make your journey to health simple, safe, and stress-free.
          </h2>
        </div>

        {/* Journey Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#efede4] rounded-2xl p-3 lg:p-6 text-center border border-gray-200"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-24 h-24 lg:w-30 lg:h-30 relative">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
              </div>

              {/* Label */}
              <div className="text-base lg:text-lg text-[#7b6824] leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
