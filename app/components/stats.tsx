import React from 'react';
import Image from 'next/image';

interface StatItem {
  icon: string;
  number: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: '/stats-icons/globe.png',
    number: '70+',
    label: 'Countries'
  },
  {
    icon: '/stats-icons/doctor.png',
    number: '400+',
    label: 'Doctors'
  },
  {
    icon: '/stats-icons/bed.png',
    number: '750',
    label: 'Beds'
  },
  {
    icon: '/stats-icons/hospital.png',
    number: '04',
    label: 'Hospitals'
  }
];

const Stats: React.FC = () => {

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-md lg:shadow-lg border border-gray-200 lg:border-2"
            >
              {/* Internal Border Container */}
              <div className="border border-[#7b6824] rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4">
                {/* Horizontal Layout: Icon Left, Content Right */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative">
                      <Image
                        src={stat.icon}
                        alt={stat.label}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Number */}
                    <div className="mb-0.5 sm:mb-1">
                      <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-[#7b6824]">
                        {stat.number}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-xs sm:text-sm lg:text-lg font-semibold text-[#7b6824] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
