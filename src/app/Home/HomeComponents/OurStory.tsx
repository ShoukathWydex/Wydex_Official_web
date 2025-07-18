import React, { useEffect } from 'react';


// Add TypeScript declaration for 'model-viewer' custom
declare global { 
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'background-color'?: string;
        exposure?: string;
        'tone-mapping'?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        loading?: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}


const OurStory = () => { 
  useEffect(() => {
    // Load the model-viewer script if not already loaded
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text */}
        <div className="space-y-6 md:ml-[100px]">
          <p className="text-4xl font-bold text-white">
            Our Story
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Wydex Media is the best digital marketing agency in Calicut, offering 360-degree marketing strategies that cover everything from social media and SEO to branding, design, and paid ads. We focus on simplicity, consistency, and real results — helping your brand grow and succeed online.
          </p>
          <button
           
            className="hover:cursor-pointer inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300"
          >
            About Us
          </button>
        </div>

        
        <div className="flex flex-col justify-center items-center bg-black rounded-2xl shadow-xl p-6 min-w-[260px] w-full max-w-[340px] h-[340px] mx-auto border border-gray-800">
         <model-viewer  
            src="/3d/logo_white.glb"  
            alt="Wydex 3D Logo"
            auto-rotate  
            camera-controls
            background-color="#000000"
            exposure="1.2"
            tone-mapping="neutral"
            shadow-intensity="0.8"
            shadow-softness="0.5"
            loading="eager"
            className="w-full h-full rounded-xl"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '300px',
              backgroundColor: 'transparent'
            }}
          />
          
          {/* Fallback loading indicator */}
          
        </div>

      </div>
    </section>
  );
};

export default OurStory;