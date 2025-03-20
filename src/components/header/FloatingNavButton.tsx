
import React from 'react';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingNavButtonProps {
  showMobileNav: boolean;
  scrollToLocation: () => void;
  isMobile: boolean;
}

// This component now returns null, effectively removing the floating navigation button
const FloatingNavButton = ({ showMobileNav, scrollToLocation, isMobile }: FloatingNavButtonProps) => {
  return null;
};

export default FloatingNavButton;
