
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import BrandLogo from '@/components/BrandLogo';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
  toggleLanguage: () => void;
}

const MobileMenu = ({ isMenuOpen, closeMenu, toggleLanguage }: MobileMenuProps) => {
  const { language, t } = useLanguage();
  
  return (
    <div className={cn(
      "fixed inset-0 top-0 bg-white/95 backdrop-blur-layer z-40 transform transition-transform duration-300 ease-in-out",
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <div className="flex flex-col pt-3 px-6 h-full">
        <div className="flex justify-between items-center border-b border-gray-100 py-4 mb-4">
          <BrandLogo variant="dark" size="sm" showText={false} />
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="text-vultur-red hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="flex flex-col">
          <Link 
            to="/" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.home}
          </Link>
          <Link 
            to="/despre-noi" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.about}
          </Link>
          <Link 
            to="/servicii-oferite" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.services}
          </Link>
          <Link 
            to="/magazin-piese-auto" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.shop}
          </Link>
          <Link 
            to="/galerie" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.gallery}
          </Link>
          <Link 
            to="/clienti" 
            className="py-4 border-b border-gray-100 text-lg font-medium" 
            onClick={closeMenu}
          >
            {t.clients}
          </Link>
          <Link 
            to="/contact" 
            className="py-4 text-lg font-medium border-b border-gray-100" 
            onClick={closeMenu}
          >
            {t.contact}
          </Link>
        </nav>
        
        <div className="mt-auto py-4 border-t border-gray-100">
          <div className="flex items-center mb-3">
            <Phone className="h-4 w-4 mr-2 text-vultur-red" />
            <span>+40 721 407 727</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="h-4 w-4 mr-2 text-vultur-red" />
            <span className="text-sm">{t.address}</span>
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex-1"
            >
              {language === 'ro' ? 'English' : 'Română'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
