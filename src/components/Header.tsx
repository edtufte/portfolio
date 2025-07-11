import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">
            {isScrolled ? (
              <span className="text-gradient name-dark">Eric Tufte</span>
            ) : (
              <span className="text-slate-800 name-dark">Eric Tufte</span>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => scrollToSection('about')}
              className={`nav-button ${isScrolled ? 'nav-button-light' : 'nav-button-light'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`nav-button ${isScrolled ? 'nav-button-light' : 'nav-button-light'}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`nav-button ${isScrolled ? 'nav-button-light' : 'nav-button-light'}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-button ${isScrolled ? 'nav-button-light' : 'nav-button-light'}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-button md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mobile-menu-glass rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="mobile-nav-button"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="mobile-nav-button"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="mobile-nav-button"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mobile-nav-button"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;