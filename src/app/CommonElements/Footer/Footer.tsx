import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

function FooterPage() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4 mt-4">
            {/* Logo */}
            <div className="flex-row justify-center items-center w-full">
              <div className="h-10 flex justify-center items-center mr-4">
                <img
                  src="/images/wydex-whitelogo.png"
                  alt="Wydex Logo"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            <p className="text-1xl text-center font-medium  text-blue-400 mt-3 ">WYDEX Media</p>
            </div>


            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving growth through creative marketing and technology solutions tailored for your success.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2 w-full justify-center">
              {[
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              Company
            </h3>
            <div className="space-y-2">
              {['About', 'Services', 'Industries', 'Works', 'Careers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              Services
            </h3>
            <div className="space-y-2">
              {['Branding', 'Experience Design', 'Technology', 'Digital Marketing', 'Resource Augmentation', 'Partnership'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500">General</p>
                  <a href="tel:+910000000000" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    +91 000 0000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a href="mailto:wydexmedia@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    wydexmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <MessageCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <a href="https://wa.me/91000000000" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    +91 000 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500">HR Enquiry</p>
                  <a href="tel:+917593885895" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    +91 7593 885 895
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <span className="text-blue-400 font-semibold">WYDEX</span> © 2025 All rights reserved
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;