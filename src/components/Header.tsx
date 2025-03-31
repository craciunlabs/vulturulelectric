
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile, useBreakpoint } from '@/hooks/use-mobile';
import BrandLogo from './BrandLogo';
import { useLanguage } from '@/contexts/LanguageContext';

// Import refactored components
import TopBar from './header/TopBar';
import DesktopNavigation from './header/DesktopNavigation';
import MobileNavigation from './header/MobileNavigation';
import MobileMenu from './header/MobileMenu';
import SearchBar from './header/SearchBar';
import BreadcrumbNav from './header/BreadcrumbNav';
import FloatingNavButton from './header/FloatingNavButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const routeMap: Record<string, { name: string; path: string }> = {
    '/': { name: t.home, path: '/' },
    '/despre-noi': { name: t.about, path: '/despre-noi' },
    '/servicii-oferite': { name: t.services, path: '/servicii-oferite' },
    '/magazin-piese-auto': { name: t.shop, path: '/magazin-piese-auto' },
    '/galerie': { name: t.gallery, path: '/galerie' },
    '/clienti': { name: t.clients, path: '/clienti' },
    '/contact': { name: t.contact, path: '/contact' },
  };
  
  const getBreadcrumbs = useCallback(() => {
    const paths = location.pathname.split('/').filter(Boolean);
    
    if (paths.length === 0) return [];
    
    const breadcrumbs = [{ name: t.home, path: '/' }];
    
    let currentPath = '';
    for (const segment of paths) {
      currentPath += `/${segment}`;
      
      if (routeMap[currentPath]) {
        breadcrumbs.push(routeMap[currentPath]);
      }
    }
    
    return breadcrumbs;
  }, [location.pathname, routeMap, t.home]);
  
  const breadcrumbs = getBreadcrumbs();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Hide top bar on scroll for mobile
      if (isMobile) {
        setShowTopBar(scrollPosition < 10);
      }
      
      // Show floating navigation after scrolling a bit
      // We still set this even at top so the FloatingNavButton can control its own visibility
      setShowMobileNav(scrollPosition > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
  };

  const scrollToLocation = () => {
    closeMenu();
    // Smooth scroll to the location section
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar */}
      <TopBar showTopBar={showTopBar} isMobile={isMobile} />
      
      {/* Main navigation */}
      <div 
        className={cn(
          "transition-all duration-300 backdrop-blur-layer", 
          isScrolled 
            ? "bg-white/95 shadow-md py-2" 
            : "bg-white/90 py-3"
        )}
        style={{
          paddingTop: isMobile && !showTopBar ? '0.75rem' : undefined
        }}
      >
        <div className="container flex justify-between items-center">
          <Link to="/" className="relative block animate-fade-down">
            <BrandLogo variant="dark" size={isMobile ? "sm" : "md"} showText={false} />
          </Link>
          
          {/* Desktop Navigation */}
          <DesktopNavigation 
            toggleLanguage={toggleLanguage} 
            setShowSearch={setShowSearch} 
            showSearch={showSearch} 
          />
          
          {/* Mobile Navigation */}
          <MobileNavigation 
            toggleMenu={toggleMenu} 
            isMenuOpen={isMenuOpen} 
            setShowSearch={setShowSearch} 
            showSearch={showSearch}
            scrollToLocation={scrollToLocation}
          />
        </div>
        
        {/* Search bar */}
        <SearchBar showSearch={showSearch} />
        
        {/* Breadcrumbs (not on homepage) */}
        {location.pathname !== '/' && breadcrumbs.length > 1 && (
          <BreadcrumbNav breadcrumbs={breadcrumbs} />
        )}
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu} 
        toggleLanguage={toggleLanguage} 
      />
      
      {/* Smart Floating Navigation Button - always passes the showMobileNav value and handles visibility internally */}
      <FloatingNavButton 
        showMobileNav={showMobileNav} 
        scrollToLocation={scrollToLocation} 
        isMobile={isMobile} 
      />
    </header>
  );
};

export default Header;
