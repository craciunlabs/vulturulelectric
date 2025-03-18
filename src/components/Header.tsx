
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-vultur-red text-white text-sm py-2">
        <div className="container flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              <span>Avem deschis: Luni - Vineri, 09<sup>00</sup> - 18<sup>00</sup></span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>Sunați ne acum: +40 721 407 727</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>DE 79, Nr. 229, Sat Vârt, 215400, Gorj, Romania</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div 
        className={cn(
          "transition-all duration-300 backdrop-blur-layer", 
          isScrolled 
            ? "bg-white/95 shadow-md py-2" 
            : "bg-white/80 py-4"
        )}
      >
        <div className="container flex justify-between items-center">
          <Link to="/" className="relative block animate-fade-down">
            <BrandLogo variant="dark" size="md" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 animate-fade-down">
            <Link to="/" className="nav-link font-medium">Acasa</Link>
            <Link to="/despre-noi" className="nav-link font-medium">Despre noi</Link>
            <Link to="/servicii-oferite" className="nav-link font-medium">Servicii oferite</Link>
            <Link to="/magazin-piese-auto" className="nav-link font-medium">Magazin Piese Auto</Link>
            <Link to="/galerie" className="nav-link font-medium">Galerie</Link>
            <Link to="/clienti" className="nav-link font-medium">Clienți</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </nav>
          
          {/* Mobile menu toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-vultur-red" />
            ) : (
              <Menu className="h-6 w-6 text-vultur-red" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={cn(
          "fixed inset-0 top-[125px] bg-white/95 backdrop-blur-layer z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col pt-5 px-8">
            <Link 
              to="/" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Acasa
            </Link>
            <Link 
              to="/despre-noi" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Despre noi
            </Link>
            <Link 
              to="/servicii-oferite" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Servicii oferite
            </Link>
            <Link 
              to="/magazin-piese-auto" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Magazin Piese Auto
            </Link>
            <Link 
              to="/galerie" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Galerie
            </Link>
            <Link 
              to="/clienti" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Clienți
            </Link>
            <Link 
              to="/contact" 
              className="py-4 text-lg font-medium" 
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <div className="mt-6 py-4 border-t border-gray-100">
              <div className="flex items-center mb-3">
                <Phone className="h-4 w-4 mr-2 text-vultur-red" />
                <span>+40 721 407 727</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-vultur-red" />
                <span className="text-sm">DE 79, Nr. 229, Sat Vârt, 215400, Gorj, Romania</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
