
import React from 'react';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  showMobileNav: boolean;
  scrollToLocation: () => void;
  isMobile: boolean;
}

const FloatingNavButton = ({ showMobileNav, scrollToLocation, isMobile }: FloatingNavButtonProps) => {
  if (!isMobile || !showMobileNav) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 float-nav-button">
      <Button
        onClick={scrollToLocation}
        className="rounded-full shadow-lg bg-vultur-red hover:bg-vultur-red/90 p-4 h-14 w-14 flex items-center justify-center"
        aria-label="Indicații rutiere"
      >
        <Navigation className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingNavButton;
