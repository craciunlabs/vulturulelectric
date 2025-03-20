
import React from 'react';
import { Clock, Phone, MapPin, Navigation2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TopBarProps {
  showTopBar: boolean;
  isMobile: boolean;
}

const TopBar = ({ showTopBar, isMobile }: TopBarProps) => {
  const { t } = useLanguage();
  
  const scrollToLocation = () => {
    // Smooth scroll to the location section
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={cn(
      "bg-vultur-red text-white text-sm transition-all duration-300",
      isMobile ? (showTopBar ? "max-h-16 py-1 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden") : "py-2"
    )}>
      <div className="container flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span dangerouslySetInnerHTML={{ __html: t.schedule }} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center cursor-pointer" onClick={scrollToLocation}>
            <Navigation2 className="h-3.5 w-3.5 mr-1.5" />
            <span>{t.directions}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-3.5 w-3.5 mr-1.5" />
            <span>{t.callUs}</span>
          </div>
          <div className="hidden md:flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            <span>{t.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
