
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface DesktopNavigationProps {
  toggleLanguage: () => void;
  setShowSearch: (show: boolean) => void;
  showSearch: boolean;
}

const DesktopNavigation = ({ toggleLanguage, setShowSearch, showSearch }: DesktopNavigationProps) => {
  const { language, t } = useLanguage();
  
  return (
    <>
      <nav className="hidden md:flex space-x-4 xl:space-x-6 animate-fade-down">
        <Link to="/" className="nav-link font-medium">{t.home}</Link>
        <Link to="/despre-noi" className="nav-link font-medium">{t.about}</Link>
        <Link to="/servicii-oferite" className="nav-link font-medium">{t.services}</Link>
        <Link to="/magazin-piese-auto" className="nav-link font-medium">{t.shop}</Link>
        <Link to="/lucrari-realizate" className="nav-link font-medium">{t.gallery}</Link>
        <Link to="/contact" className="nav-link font-medium">{t.contact}</Link>
      </nav>
      
      <div className="hidden md:flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setShowSearch(!showSearch)} 
          className="rounded-full"
          aria-label="Search"
        >
          <Search className="h-5 w-5" strokeWidth={2.5} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleLanguage} 
          className="font-medium"
        >
          {language === 'ro' ? 'EN' : 'RO'}
        </Button>
      </div>
    </>
  );
};

export default DesktopNavigation;
