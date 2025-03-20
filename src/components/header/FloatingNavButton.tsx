
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingNavButtonProps {
  showMobileNav: boolean;
  scrollToLocation: () => void;
  isMobile: boolean;
}

const FloatingNavButton = ({ showMobileNav, scrollToLocation, isMobile }: FloatingNavButtonProps) => {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  
  // Check if we're at the top or bottom of the page
  useEffect(() => {
    const checkPosition = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Determine if at top (within 100px of the top)
      setAtTop(scrollPosition < 100);
      
      // Determine if near bottom (within 200px of the bottom)
      setAtBottom(scrollPosition + windowHeight > documentHeight - 200);
    };
    
    // Check position immediately and on scroll
    checkPosition();
    window.addEventListener('scroll', checkPosition);
    
    return () => window.removeEventListener('scroll', checkPosition);
  }, []);
  
  const handleClick = () => {
    // If at bottom or in the middle of the page, scroll to top
    if (atBottom || !atTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } 
    // If at top, scroll to either the location section or halfway down the page
    else {
      const locationSection = document.getElementById('location');
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If no location section, scroll halfway down the page
        const documentHeight = document.documentElement.scrollHeight;
        window.scrollTo({
          top: documentHeight / 3, // Scroll about a third of the way down
          behavior: 'smooth'
        });
      }
    }
  };
  
  // The button should only be visible when scrolled down a bit (showMobileNav) or when we're at the top of the page
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {(showMobileNav || atTop) && (
        <button 
          onClick={handleClick} 
          className={cn(
            "float-nav-button p-3 rounded-full bg-vultur-red text-white shadow-lg transform transition-all duration-300 hover:scale-110",
            // Add animation class only if not at extremes of the page
            !atTop && !atBottom ? "animate-pulse-slow" : ""
          )}
          aria-label={atTop ? "Scroll down" : "Scroll to top"}
        >
          {atTop ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
      )}
    </div>
  );
};

export default FloatingNavButton;
