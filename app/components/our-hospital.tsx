import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Award, Building } from 'lucide-react';

const OurHospital: React.FC = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#E8E0D0' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7b6824] mb-4">
            Our Hospital
          </h2>
          <p className="text-lg lg:text-xl text-[#7b6824]/80 max-w-3xl mx-auto leading-relaxed">
            Artemis Hospital is proud to welcome international patients to its expanding presence,
            offering globally benchmarked medical care across modern, accessible locations.
          </p>
        </header>

        {/* Main Hospital Card */}
        <div className="max-w-6xl mx-auto">
          <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/20">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative order-2 lg:order-1">
                <div className="relative h-64 lg:h-full min-h-[450px]">
                  <Image
                    src="/artemis-hospital-gurgaon.webp"
                    alt="Artemis Hospital, Gurgaon - Modern healthcare facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Hospital Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 lg:p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#7b6824]">
                      Artemis Hospital, Gurgaon
                    </h3>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">
                        <Award className="w-3 h-3" />
                        JCI Certified
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                        <Building className="w-3 h-3" />
                        NABH Accredited
                      </span>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Gurgaon, India
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Est. 2007
                      </span>
                      <span className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        750 Beds
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
                <div className="space-y-6">
                  {/* Title */}
                  <header>
                    <h4 className="text-2xl lg:text-3xl font-bold text-[#7b6824] leading-tight">
                      About Artemis Hospital, Gurgaon
                    </h4>
                  </header>

                  {/* Description */}
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Artemis Hospital in Gurgaon, established in 2007, is a leading healthcare institution with cutting-edge
                      technology, world-class infrastructure, and top-notch patient care.
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4 my-6">
                      <div className="text-center p-3 bg-[#7b6824]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#7b6824]">400+</div>
                        <div className="text-sm text-gray-600">Medical Professionals</div>
                      </div>
                      <div className="text-center p-3 bg-[#7b6824]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#7b6824]">12+</div>
                        <div className="text-sm text-gray-600">Centers of Excellence</div>
                      </div>
                      <div className="text-center p-3 bg-[#7b6824]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#7b6824]">40+</div>
                        <div className="text-sm text-gray-600">Specialties</div>
                      </div>
                      <div className="text-center p-3 bg-[#7b6824]/5 rounded-lg">
                        <div className="text-2xl font-bold text-[#7b6824]">65+</div>
                        <div className="text-sm text-gray-600">ICU Beds</div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Advanced imaging technology including 3 Tesla MRI and 64-Slice Cardiac CT.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 flex justify-center">
                    <button
                      className="w-full sm:w-auto bg-[#7b6824] hover:bg-[#5a4e1a] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                      aria-label="Book an appointment at Artemis Hospital"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurHospital;
