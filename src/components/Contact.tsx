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