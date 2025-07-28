import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to discuss your next data science or supply chain optimization project</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="contact-info">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16308776357">(630) 877-6357</a>
              </div>
              
              <div className="contact-info">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:erictufte@gmail.com">erictufte@gmail.com</a>
              </div>
              
              <div className="contact-info">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nashville, TN</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-base">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag"><span>Supply Chain Optimization</span></span>
                <span className="skill-tag"><span>Data Science</span></span>
                <span className="skill-tag"><span>Business Intelligence</span></span>
                <span className="skill-tag"><span>Process Automation</span></span>
                <span className="skill-tag"><span>Team Leadership</span></span>
                <span className="skill-tag"><span>Financial Modeling</span></span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-base">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/edtufte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/erictufte/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
              Education & Highlights
            </h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800">University of Alabama</h4>
              <p className="text-blue-600 font-medium text-base">Bachelor of Science in Commerce and Business Administration</p>
              <p className="text-gray-600 text-base">Majors: Finance and Economics</p>
              <p className="text-gray-500 text-sm mt-1">August 2014 – May 2018 • Tuscaloosa, AL</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-base">Professional Highlights</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="stat-card">
                  <div className="stat-value text-high-contrast">$180MM</div>
                  <div className="stat-label">Annual Savings</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-high-contrast">15+</div>
                  <div className="stat-label">Data Pipelines</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-high-contrast">50+</div>
                  <div className="stat-label">Finance Partners</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-high-contrast">170+</div>
                  <div className="stat-label">Fulfillment Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-base">
            I'm always interested in discussing new opportunities and challenging projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:erictufte@gmail.com" className="btn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a href="tel:+16308776357" className="btn btn-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;