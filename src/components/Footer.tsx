import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Eric Tufte</h3>
          <p className="text-gray-300 mb-6 text-base max-w-2xl mx-auto">
            Principal Data Scientist specializing in supply chain optimization and large-scale data solutions
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:erictufte@gmail.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="tel:+16308776357" className="text-gray-300 hover:text-white transition-colors" aria-label="Phone">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Eric Tufte. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Built with React & TypeScript • Designed for performance and accessibility
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;