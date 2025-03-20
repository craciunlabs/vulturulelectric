
import React from 'react';
import { Navigation } from 'lucide-react';

interface FloatingNavButtonProps {
  showMobileNav: boolean;
  scrollToLocation: () => void;
  isMobile: boolean;
}

const FloatingNavButton = ({ showMobileNav, scrollToLocation, isMobile }: FloatingNavButtonProps) => {
  if (!showMobileNav || !isMobile) return null;
  
  return (
    <button 
      onClick={scrollToLocation}
      className="fixed bottom-5 left-5 z-50 bg-white text-vultur-red p-3 rounded-full shadow-lg border-2 border-vultur-red hover:bg-gray-100 transition-colors flex items-center"
      aria-label="Indicații rutiere către noi"
    >
      <Navigation className="h-5 w-5" />
      <span className="ml-2 text-xs font-medium hidden xs:inline whitespace-nowrap">Indicații rutiere</span>
    </button>
  );
};

export default FloatingNavButton;
