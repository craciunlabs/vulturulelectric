
import React from 'react';
import { Phone, Search, Menu, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavigationProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  setShowSearch: (show: boolean) => void;
  showSearch: boolean;
  scrollToLocation: () => void;
}

const MobileNavigation = ({ 
  toggleMenu, 
  isMenuOpen, 
  setShowSearch, 
  showSearch,
  scrollToLocation 
}: MobileNavigationProps) => {
  return (
    <div className="flex md:hidden items-center space-x-2">
      <a 
        href="tel:+40721407727" 
        className="p-1.5 text-sm text-vultur-red flex items-center" 
        aria-label="Call us"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
      </a>
      
      <button
        onClick={scrollToLocation}
        className="p-1.5 text-sm text-vultur-red flex items-center"
        aria-label="Navigate to location"
      >
        <Navigation className="h-4 w-4" strokeWidth={2.5} />
      </button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setShowSearch(!showSearch)} 
        className="rounded-full h-7 w-7 p-1"
        aria-label="Search"
      >
        <Search className="h-4 w-4" strokeWidth={2.5} />
      </Button>
      
      <button 
        onClick={toggleMenu} 
        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
      >
        {isMenuOpen ? (
          <span className="sr-only">Close menu</span>
        ) : (
          <Menu className="h-5 w-5 text-vultur-red" strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
};

export default MobileNavigation;
