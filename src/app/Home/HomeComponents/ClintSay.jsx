import React from 'react';

const testimonials = [
  {
    quote: `"Wydex Media’s expertise and dedication helped us scale Interval to new heights. Their team truly feels like an extension of ours."`,
    name: 'Aslah Thadathil',
    role: 'Co-founder of Interval',
    image: '/images/interval.webp',
  },
  {
    quote: `"The team at Wydex is proactive, professional, and always delivers more than expected. Highly recommended!"`,
    name: 'Priya Menon',
    role: 'Founder, Foo Foods',
    image: '/images/interval.webp',
  },
  {
    quote: `"From branding to digital marketing, Wydex Media is our go-to partner for growth and innovation."`,
    name: 'Suresh Kumar',
    role: 'CEO, Care.',
    image: '/images/interval.webp',
  },
];

function ClintSay() {
  return (
    <section className="py-20 px-4 bg-black ">
      {/* Geometric Background Elements */}
    

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-white"></div>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white ">
                TESTIMONIALS
              </h2>
              <div className="w-12 h-px bg-white"></div>
            </div>
          </div>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            What our clients say about their experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                {/* Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-black"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-black"></div>

                {/* Quote Mark */}
                <div className="absolute top-4 right-4 text-6xl text-black/10 font-serif leading-none">"</div>

                {/* Content */}
                <div className="relative z-10 pt-8">
                  <blockquote className="text-black text-lg leading-relaxed mb-8 font-medium min-h-24">
                    {t.quote}
                  </blockquote>

                  <div className="border-t-2 border-black pt-6">
                    <div className="flex items-center space-x-4">
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-none object-cover border-2 border-black"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-lg">
                          {t.name.split(' ')[0][0]}
                        </div>
                      )}
                      <div>
                        <div className="text-black font-bold text-lg uppercase tracking-wide">{t.name}</div>
                        <div className="text-black/60 text-sm font-medium">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 p-8">
                  <div className="h-full flex flex-col justify-center">
                    <blockquote className="text-white text-lg leading-relaxed mb-8 font-medium">
                      {t.quote}
                    </blockquote>
                    <div className="border-t-2 border-white pt-6">
                      <div className="flex items-center space-x-4">
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-12 h-12 rounded-none object-cover border-2 border-white"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-lg">
                            {t.name.split(' ')[0][0]}
                          </div>
                        )}
                        <div>
                          <div className="text-white font-bold text-lg uppercase tracking-wide">{t.name}</div>
                          <div className="text-white/80 text-sm font-medium">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-20 h-px bg-white"></div>
            <span className="text-white/60 text-sm uppercase tracking-widest font-medium">
              Trusted by Industry Leaders
            </span>
            <div className="w-20 h-px bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClintSay;
