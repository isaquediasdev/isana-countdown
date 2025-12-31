import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flower, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Navbar style logic:
  // On home page: Transparent at top, solid white on scroll.
  // On other pages: Always solid white (or paper color).
  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
    isHome && !isScrolled 
      ? 'bg-transparent text-white border-transparent' 
      : 'bg-background-light/95 backdrop-blur-md text-text-dark border-b border-[#E5E0D8] shadow-sm'
  }`;

  const linkClass = (path: string) => `text-xs font-display tracking-[0.2em] uppercase transition-colors pb-1 border-b-2 ${
    location.pathname === path 
      ? 'border-primary text-primary' 
      : 'border-transparent hover:text-primary hover:border-primary/50'
  } ${isHome && !isScrolled && location.pathname !== path ? 'text-white/90 hover:text-white' : ''}`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`p-1.5 border rounded-full transition-colors ${
            isHome && !isScrolled ? 'border-white/40 text-white' : 'border-primary/30 text-primary'
          }`}>
            <Flower size={18} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold tracking-[0.15em] uppercase text-lg leading-none ${
              isHome && !isScrolled ? 'text-white' : 'text-primary-dark'
            }`}>
              Isana
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass('/')}>Início</Link>
          <Link to="/details" className={linkClass('/details')}>Detalhes</Link>
          <Link to="/rsvp" className="px-6 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-display font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-sm hover:shadow-md">
            RSVP
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isHome && !isScrolled ? 'text-white' : 'text-text-dark'} />
          ) : (
            <Menu size={24} className={isHome && !isScrolled ? 'text-white' : 'text-text-dark'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b border-[#E5E0D8] py-8 px-6 flex flex-col gap-6 items-center shadow-lg animate-fade-in">
          <Link 
            to="/" 
            className="text-sm font-display tracking-widest uppercase text-text-dark hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/details" 
            className="text-sm font-display tracking-widest uppercase text-text-dark hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Detalhes
          </Link>
          <Link 
            to="/rsvp" 
            className="px-8 py-3 bg-primary text-white text-xs font-display font-bold uppercase tracking-widest rounded-sm w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            RSVP
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;