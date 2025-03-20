
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, Search, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile, useBreakpoint } from '@/hooks/use-mobile';
import BrandLogo from './BrandLogo';
import { Button } from './ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from './ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
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
      
      // Show floating navigation after scrolling down on mobile
      if (isMobile) {
        setShowMobileNav(scrollPosition > 300);
      }
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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      {/* Top bar - now conditionally hidden on mobile scroll */}
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
          <nav className="hidden md:flex space-x-4 xl:space-x-6 animate-fade-down">
            <Link to="/" className="nav-link font-medium">{t.home}</Link>
            <Link to="/despre-noi" className="nav-link font-medium">{t.about}</Link>
            <Link to="/servicii-oferite" className="nav-link font-medium">{t.services}</Link>
            <Link to="/magazin-piese-auto" className="nav-link font-medium">{t.shop}</Link>
            <Link to="/galerie" className="nav-link font-medium">{t.gallery}</Link>
            <Link to="/clienti" className="nav-link font-medium">{t.clients}</Link>
            <Link to="/contact" className="nav-link font-medium">{t.contact}</Link>
          </nav>
          
          {/* Right side tools */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowSearch(!showSearch)} 
              className="rounded-full"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
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
          
          {/* Mobile tools with Directions */}
          <div className="flex md:hidden items-center space-x-2">
            <a 
              href="tel:+40721407727" 
              className="p-2 text-sm text-vultur-red flex items-center" 
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            
            {/* Navigation Button - positioned here in the middle stripe */}
            <button
              onClick={scrollToLocation}
              className="p-2 text-sm text-vultur-red flex items-center"
              aria-label="Indicații rutiere"
            >
              <Navigation className="h-4 w-4" />
            </button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowSearch(!showSearch)} 
              className="rounded-full"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-vultur-red" />
              ) : (
                <Menu className="h-6 w-6 text-vultur-red" />
              )}
            </button>
          </div>
        </div>
        
        {/* Search bar */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 bg-gray-50",
          showSearch ? "max-h-16 py-2 border-b border-gray-200" : "max-h-0"
        )}>
          <div className="container">
            <div className="relative">
              <input 
                type="text"
                placeholder={t.search}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md" 
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs (not on homepage) */}
        {location.pathname !== '/' && breadcrumbs.length > 1 && (
          <div className="bg-gray-50 py-2 border-t border-gray-100">
            <div className="container">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((breadcrumb, i) => (
                    <React.Fragment key={breadcrumb.path}>
                      {i < breadcrumbs.length - 1 ? (
                        <>
                          <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                              <Link to={breadcrumb.path}>
                                {breadcrumb.name}
                              </Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                        </>
                      ) : (
                        <BreadcrumbItem>
                          <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Navigation Menu - removed Indicații rutiere from here */}
      {isMobile && (
        <div className={cn(
          "fixed inset-0 top-0 bg-white/95 backdrop-blur-layer z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col pt-3 px-6 h-full">
            {/* Close button header */}
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
      )}
      
      {/* Persistent Mobile Navigation Button */}
      {isMobile && showMobileNav && (
        <div className="fixed bottom-6 right-6 z-50 float-nav-button">
          <Button
            onClick={scrollToLocation}
            className="rounded-full shadow-lg bg-vultur-red hover:bg-vultur-red/90 p-4 h-14 w-14 flex items-center justify-center"
            aria-label="Indicații rutiere"
          >
            <Navigation className="h-6 w-6" />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
