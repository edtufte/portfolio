import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Senior Data Scientist driving $180M+ in measurable business impact through supply chain optimization and analytics leadership</p>
        
        <div ref={aboutRef} className={`grid md:grid-cols-2 gap-12 items-start ${aboutVisible ? 'visible' : 'fade-in-up'}`}>
          <div className={`card ${aboutVisible ? 'animate-fade-in-left' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              Professional Summary
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Results-driven Senior Data Scientist with 7+ years transforming supply chain operations at Fortune 10 companies. 
              Delivered $192M+ in quantifiable business value through advanced analytics, machine learning, and cross-functional 
              leadership. Expert in scaling data solutions from prototype to enterprise-wide deployment across 170+ facilities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Spearheaded labor optimization system development generating $180MM annual savings through data-driven efficiency improvements
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Architected enterprise-grade data infrastructure processing 500M+ records daily across 15+ pipelines, enabling real-time analytics
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Scaled organizational analytics capability by training 50+ finance professionals, reducing dependency on technical teams by 60%
                </p>
              </div>
            </div>
          </div>
          
          <div className={`card ${aboutVisible ? 'animate-fade-in-right' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
              Key Achievements
            </h3>
            <div className="space-y-5">
              <div className="border-l-4 border-indigo-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-800 text-lg mb-2">$180MM Annual Savings</h4>
                <p className="text-gray-600 text-base">
                  Delivered through labor optimization system development and implementation
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-800 text-lg mb-2">15+ Data Pipelines</h4>
                <p className="text-gray-600 text-base">
                  Built and maintained cross-platform solutions processing millions of records daily
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-800 text-lg mb-2">50+ Finance Partners</h4>
                <p className="text-gray-600 text-base">
                  Empowered with SQL and BigQuery capabilities through technical training programs
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-800 text-lg mb-2">170+ Fulfillment Centers</h4>
                <p className="text-gray-600 text-base">
                  Rolled out PowerBI tools and standard work processes with $12.3M realized savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;