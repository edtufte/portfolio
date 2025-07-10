import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Data Scientist with a passion for solving complex business problems</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              Professional Summary
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              Data Scientist with 7+ years leading large-scale supply chain optimization programs. 
              Proven track record managing cross-functional engineering teams, delivering multi-million 
              dollar initiatives, and driving technical solutions across Amazon's fulfillment network 
              and Walmart's supply chain operations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Led end-to-end development of labor optimization systems delivering $180MM annual savings
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Architected and maintained 15+ cross-platform data pipelines processing millions of daily records
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-base">
                  Drove adoption of self-service analytics by designing and delivering technical training programs
                </p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
              Key Achievements
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-base mb-1">$180MM Annual Savings</h4>
                <p className="text-gray-600 text-sm">
                  Delivered through labor optimization system development and implementation
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-base mb-1">15+ Data Pipelines</h4>
                <p className="text-gray-600 text-sm">
                  Built and maintained cross-platform solutions processing millions of records daily
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-base mb-1">50+ Finance Partners</h4>
                <p className="text-gray-600 text-sm">
                  Empowered with SQL and BigQuery capabilities through technical training programs
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-base mb-1">170+ Fulfillment Centers</h4>
                <p className="text-gray-600 text-sm">
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