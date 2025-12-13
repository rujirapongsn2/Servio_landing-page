import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-softnix-slate/10' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Softnix styled logo representation */}
            <div className="text-2xl font-display font-bold text-softnix-navy tracking-tight">
                Servio
            </div>
            <div className="h-4 w-[1px] bg-softnix-slate/30 mx-1"></div>
            <span className="text-sm font-medium text-softnix-blue tracking-wide">
                by Softnix
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'Multi-Agent', 'Enterprise', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium hover:text-softnix-blue transition-colors font-display ${isScrolled ? 'text-softnix-charcoal' : 'text-softnix-navy'}`}
            >
              {item}
            </button>
          ))}
          <button className="bg-layer3-gradient hover:opacity-90 text-softnix-navy px-6 py-2.5 rounded-full font-bold font-display transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-softnix-navy">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100">
          {['Features', 'Multi-Agent', 'Enterprise', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-softnix-charcoal font-medium py-3 border-b border-gray-50 last:border-0 font-display"
            >
              {item}
            </button>
          ))}
           <button className="bg-layer3-gradient text-softnix-navy w-full py-3 rounded-lg font-bold font-display shadow-sm mt-2">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};