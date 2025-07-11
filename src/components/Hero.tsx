import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
            Eric Tufte
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 mb-8 font-medium">
            Principal Data Scientist
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Leading large-scale supply chain optimization with 7+ years of experience 
            managing cross-functional teams and delivering multi-million dollar initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('experience')}
              className="btn px-8 py-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary px-8 py-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card hero-stat-card">
              <div className="stat-value">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card hero-stat-card">
              <div className="stat-value">$180M</div>
              <div className="stat-label">Annual Savings</div>
            </div>
            <div className="stat-card hero-stat-card">
              <div className="stat-value">15+</div>
              <div className="stat-label">Data Pipelines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;