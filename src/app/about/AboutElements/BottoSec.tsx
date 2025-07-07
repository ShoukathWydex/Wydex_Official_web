import React from 'react';

function BottomSec() {
  return (
    <section id="contact" className="py-20 bg-white text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-black rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-black rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r  from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Let Wydex Media Help You Win Online
            </h2>
            <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Whether you choose Google Ads, Meta Ads, or a mix of both, we're here to help you succeed. 
            Ready to build your success story with the best digital marketing agency in Calicut?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-10 py-4 bg-black text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 transform relative overflow-hidden">
            <span className="relative z-10">Contact Wydex Media Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-10 py-4 bg-transparent text-black rounded-full border-2 border-black font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-2 transform">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        {/* Stats/Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of successful campaigns across industries</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Setup</h3>
            <p className="text-gray-600">Quick campaign launch and optimization process</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">💎</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-quality creative and strategic execution</p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-gray-600 mb-4">Get your free consultation and campaign audit</p>
            <span className="text-black font-semibold">📞 Call us today!</span>
          </div>
          
          <div className="bg-black text-white rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Need More Info?</h3>
            <p className="text-gray-300 mb-4">Download our free digital marketing guide</p>
            <span className="text-white font-semibold">📧 Get the guide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomSec;