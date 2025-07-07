import React from 'react';
import {
  TrendingUp, Search, Palette, Target, Users,
  BarChart3, Globe, Zap
} from 'lucide-react';

const services = [
 {
  no: 1,
  title: 'Social Media Marketing',
  description: 'Wydex Media is Calicut’s leading digital marketing agency for social media growth. We deliver engaging content, targeted advertising, and data-driven campaigns that increase reach, build loyalty, and grow your brand on Facebook, Instagram, LinkedIn, and more.',
  icon: <Users className="w-12 h-12" />,
  features: [
    'Content Strategy',
    'Community Management',
    'Targeted Advertising',
    'Analytics & Reporting'
  ],
},
{
  no: 2,
  title: 'SEO Optimization',
  description: 'Boost your Google rankings and get discovered by your customers with Wydex Media’s expert SEO services in Calicut. We deliver in-depth keyword research, on-page optimization, technical audits, and ethical link-building for sustainable, long-term results.',
  icon: <Search className="w-12 h-12" />,
  features: [
    'Keyword Research',
    'On-Page SEO',
    'Technical SEO',
    'Link Building'
  ],
},
{
  no: 3,
  title: 'Web Design & Development',
  description: 'We build stunning, responsive, SEO-friendly websites that combine beautiful design with flawless functionality. From corporate sites to e-commerce, our solutions are optimized for performance, user experience, and lead generation.',
  icon: <Palette className="w-12 h-12" />,
  features: [
    'Responsive Design',
    'E-commerce Solutions',
    'SEO Integration',
    'Performance Optimization'
  ],
},
{
  no: 4,
  title: 'Branding & Strategy',
  description: 'Define your brand’s voice, vision, and market positioning with our comprehensive branding and strategy services. We help you create a compelling brand identity, establish guidelines, and plan campaigns that connect with your audience and drive growth.',
  icon: <Target className="w-12 h-12" />,
  features: [
    'Logo & Identity Design',
    'Brand Guidelines',
    'Market Research',
    'Strategic Planning'
  ],
},
  
];

function Services() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Why Choose the Best Digital Marketing Agency in Calicut? We deliver exceptional results through innovative strategies, 
            cutting-edge technology, and personalized service that drives your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100  p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Service Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-gray-300  ">
                    {String(service.no).padStart(2, '0')}
                  </div>
                  <div className="text-gray-700    transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900   mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600    text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500  /80 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 group-hover:bg-blue-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gray-900  text-white  py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-300 transform group-hover:scale-105 hover:cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
