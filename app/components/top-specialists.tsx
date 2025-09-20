import React from 'react';
import Image from 'next/image';
import { CalendarClock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface SpecialtyItem {
  icon: string;
  name: string;
}

interface DoctorItem {
  name: string;
  specialty: string;
  designation: string;
  hospital: string;
  experience: string;
  image: string;
}

const TopSpecialists: React.FC = () => {
  const specialties: SpecialtyItem[] = [
    {
      icon: '/specialist-icons/oncology.png',
      name: 'Oncology'
    },
    {
      icon: '/specialist-icons/neurology.png',
      name: 'Neurology & Neurosurgery'
    },
    {
      icon: '/specialist-icons/orthopedic.png',
      name: 'Orthopedics'
    },
    {
      icon: '/specialist-icons/cardiology.png',
      name: 'Cardiology'
    },
    {
      icon: '/specialist-icons/kidney.png',
      name: 'Kidney Transplant'
    },
    {
      icon: '/specialist-icons/urology.png',
      name: 'Urology'
    },
    {
      icon: '/specialist-icons/bone.png',
      name: 'Bone Marrow Transplant'
    },
    {
      icon: '/specialist-icons/liver.png',
      name: 'Liver Transplant'
    }
  ];

  const doctors: DoctorItem[] = [
    {
      name: 'Dr Akhil Govil',
      specialty: 'Cardiology',
      designation: 'Senior Consultant',
      hospital: 'Artemis Hospital, Gurgaon, India',
      experience: '29+ Years of Experience',
      image: '/doctor-images/dr-akhil-govil.jpg'
    },
    {
      name: 'Dr Sushant Srivastava',
      specialty: 'Cardiology',
      designation: 'Director',
      hospital: 'Artemis Hospital, Gurgaon, India',
      experience: '28+ Years of Experience',
      image: '/doctor-images/dr-sushant-srivastava.jpg'
    },
    {
      name: 'Dr Lakshmi Kant Tripathi',
      specialty: 'Kidney Transplant',
      designation: 'Senior Consultant',
      hospital: 'Artemis Hospital, Gurgaon, India',
      experience: '31+ Years of Experience',
      image: '/doctor-images/dr-lakshmi-kant-tripathi.jpg'
    },
    {
      name: 'Dr Rahul Mehrotra',
      specialty: 'Cardiac Surgeon',
      designation: 'Chair',
      hospital: 'Artemis Hospital, Gurgaon, India',
      experience: '24+ Years of Experience',
      image: '/doctor-images/dr-rahul-mehrotra.jpg'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#b8af8e]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Top Specialties
          </h2>
          <p className="text-base lg:text-lg text-white/90 max-w-5xl mx-auto leading-relaxed">
            Artemis Hospitals, Gurgaon's first JCI and NABH accredited hospital, brings together 40+ specialties and 12 Centers of
            Excellence under one roof, offering international patients world-class care powered by innovation and compassion.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 lg:p-4 border border-gray-100"
            >
              {/* Horizontal Layout: Icon Left, Text Right */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 relative">
                    <Image
                      src={specialty.icon}
                      alt={specialty.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 40px, 48px"
                    />
                  </div>
                </div>

                {/* Specialty Name */}
                <div className="flex-1 text-sm lg:text-lg font-semibold text-[#7b6824] leading-tight">
                  {specialty.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctors Section */}
        <div className="mt-16 lg:mt-24">
          {/* Doctors Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Book an Online Consultation with our Experts for Free
            </h3>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Doctor Image */}
                <div className="relative h-48 lg:h-56 bg-gray-100">
                  <div className="absolute bottom-2 inset-x-0 mx-auto w-fit bg-[#8b7832] px-3 py-1 rounded-full">
                    <span className="text-xs lg:text-sm text-white">
                      {doctor.experience}
                    </span>
                  </div>

                  {/* Placeholder for doctor image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Doctor Image</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-4 lg:p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">
                    {doctor.name}
                  </h4>
                  <p className="text-base text-[#7b6824] font-semibold mb-1">
                    {doctor.specialty}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {doctor.designation}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {doctor.hospital}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <CalendarClock className="w-5 h-5" />
                      Request Appointment
                    </button>
                    <button className="w-full bg-[#7b6824] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#5a4e1a] transition-colors flex items-center justify-center gap-2">
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSpecialists
