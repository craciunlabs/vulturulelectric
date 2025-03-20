
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingNavButtonProps {
  showMobileNav: boolean;
  scrollToLocation: () => void;
  isMobile: boolean;
}

const FloatingNavButton = ({ showMobileNav, scrollToLocation, isMobile }: FloatingNavButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // The button should be visible when scrolled down, regardless of device type
  // We're using the showMobileNav prop which is triggered on scroll
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showMobileNav && (
        <button 
          onClick={scrollToTop} 
          className={cn(
            "float-nav-button p-3 rounded-full bg-vultur-red text-white shadow-lg transform transition-all duration-300 hover:scale-110",
          )}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingNavButton;
