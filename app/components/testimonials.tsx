import React from 'react';

interface TestimonialItem {
  name: string;
  country: string;
  youtubeEmbedId: string;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Baby Mathews',
      country: 'Kenya',
      youtubeEmbedId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    },
    {
      name: 'Juliana',
      country: 'Ghana',
      youtubeEmbedId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    },
    {
      name: 'Natacha',
      country: 'Mauritius',
      youtubeEmbedId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 [background-image:linear-gradient(to_bottom,white_0%,white_70%,#E8E0D0_70%,#E8E0D0_100%)]">
      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7b6824] mb-6">
            Patient's Testimonials
          </h2>
          <p className="text-lg text-[#7b6824] max-w-2xl mx-auto leading-relaxed">
            The journeys shared by Artemis patients speak of renewed hope,
            seamless care, and our unwavering dedication to their well-being.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* YouTube Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.youtubeEmbedId}`}
                  title={`${testimonial.name} testimonial`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Patient Details */}
              <div className="p-4 lg:p-6 text-center">
                <h3 className="text-2xl font-bold text-[#7b6824]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-lg">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
