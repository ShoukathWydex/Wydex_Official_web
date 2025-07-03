import React, { useEffect, useRef, useState } from 'react';

interface SectionVisibility {
  design: boolean;
  build: boolean;
  market: boolean;
}
 
function VideoAnimation() { 
  const designRef = useRef<HTMLDivElement | null>(null);
  const buildRef = useRef<HTMLDivElement | null>(null);
  const marketRef = useRef<HTMLDivElement | null>(null);
  
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>({
    design: false,
    build: false,
    market: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute('data-section') as keyof SectionVisibility;
          if (sectionName) {
            setSectionVisibility(prev => ({
              ...prev,
              [sectionName]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.4 }
    );

    if (designRef.current) observer.observe(designRef.current);
    if (buildRef.current) observer.observe(buildRef.current);
    if (marketRef.current) observer.observe(marketRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Design Section */}
      <div 
        ref={designRef}
        data-section="design"
        className='relative bg-black h-screen overflow-hidden'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[85%] object-cover transition-all duration-[2000ms] ease-out ${
              sectionVisibility.design 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-110 blur-sm'
            }`}
          >
            <source src='/videos/butterfly.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dynamic floating particles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Gradient overlays with movement */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse opacity-60 z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse opacity-60 z-10" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-20 w-full h-full flex flex-col">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-[1500ms] ease-out ${
                sectionVisibility.design 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-90 translate-y-20'
              }`}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Design</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-blue-400/30 blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-lg opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out ${
                sectionVisibility.design 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '0.3s' }}>
                Creativity meets logic. Every interface we craft begins with a design rooted in clarity, beauty, and purpose.
              </p>
              <a 
                href="#" 
                className={`learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/40 rounded-xl text-white text-lg font-medium hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-blue-400/20 hover:shadow-blue-400/30 transform hover:scale-105 ${
                  sectionVisibility.design 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-90 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Build Section */}
      <div 
        ref={buildRef}
        data-section="build"
        className='relative bg-black h-screen overflow-hidden'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[85%] object-cover transition-all duration-[2000ms] ease-out ${
              sectionVisibility.build 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-110 blur-sm'
            }`}
          >
            <source src='/videos/build.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dynamic floating particles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/5 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-teal-200 rounded-full animate-ping opacity-40" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        </div>
        
        {/* Gradient overlays with movement */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-green-600/10 via-transparent to-teal-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse opacity-60 z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse opacity-60 z-10" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-20 w-full h-full flex flex-col">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-[1500ms] ease-out ${
                sectionVisibility.build 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-90 translate-y-20'
              }`}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Build</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/30 via-teal-400/20 to-green-400/30 blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/10 to-teal-400/10 blur-lg opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl text-green-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out ${
                sectionVisibility.build 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '0.3s' }}>
                From concept to code, we build robust systems that scale with your ideas and evolve with your vision.
              </p>
              <a 
                href="#" 
                className={`learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-400/40 rounded-xl text-white text-lg font-medium hover:from-green-500/30 hover:to-teal-500/30 hover:border-green-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transform hover:scale-105 ${
                  sectionVisibility.build 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-90 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Market Section */}
      <div 
        ref={marketRef}
        data-section="market"
        className='relative bg-black h-screen overflow-hidden'
      >
        <div className='w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[85%] object-cover transition-all duration-[2000ms] ease-out ${
              sectionVisibility.market 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-110 blur-sm'
            }`}
          >
            <source src='/videos/market.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dynamic floating particles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/6 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-1/5 left-1/3 w-1.5 h-1.5 bg-violet-200 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        </div>
        
        {/* Gradient overlays with movement */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse opacity-60 z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-full blur-2xl animate-pulse opacity-60 z-10" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-20 w-full h-full flex flex-col">
          <section className="flex-1 flex items-center justify-center text-center px-4 py-20">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-[1500ms] ease-out ${
                sectionVisibility.market 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-90 translate-y-20'
              }`}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="relative z-10">Market</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-purple-400/30 blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-lg opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out ${
                sectionVisibility.market 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '0.3s' }}>
                Launch with impact. We help you bring your product to the right audience, with strategy, clarity, and innovation.
              </p>
              <a 
                href="#" 
                className={`learn-more group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/40 rounded-xl text-white text-lg font-medium hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm shadow-lg shadow-purple-400/20 hover:shadow-purple-400/30 transform hover:scale-105 ${
                  sectionVisibility.market 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-90 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                Learn more 
                <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default VideoAnimation;