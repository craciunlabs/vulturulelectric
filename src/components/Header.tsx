
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronUp, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import BrandLogo from './BrandLogo';
import { Button } from './ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from './ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Set up route map for breadcrumbs
  const routeMap: Record<string, { name: string; path: string }> = {
    '/': { name: t.home, path: '/' },
    '/despre-noi': { name: t.about, path: '/despre-noi' },
    '/servicii-oferite': { name: t.services, path: '/servicii-oferite' },
    '/magazin-piese-auto': { name: t.shop, path: '/magazin-piese-auto' },
    '/galerie': { name: t.gallery, path: '/galerie' },
    '/clienti': { name: t.clients, path: '/clienti' },
    '/contact': { name: t.contact, path: '/contact' },
  };
  
  // Generate breadcrumb path
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
      setIsScrolled(window.scrollY > 20);
      setShowScrollToTop(window.scrollY > 300);
      
      // Hide top bar on scroll for mobile
      if (isMobile) {
        setShowTopBar(window.scrollY < 10);
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
  
  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      
      {/* Main navigation - adjusted for cleaner mobile view */}
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
          
          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <a 
              href="tel:+40721407727" 
              className="p-2 text-sm text-vultur-red flex items-center mr-1" 
              aria-label="Call us"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden xs:inline">+40 721 407 727</span>
            </a>
            
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
      
      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={cn(
          "fixed inset-0 top-[60px] bg-white/95 backdrop-blur-layer z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col pt-5 px-8">
            <Link 
              to="/" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link 
              to="/despre-noi" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <Link 
              to="/servicii-oferite" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.services}
            </Link>
            <Link 
              to="/magazin-piese-auto" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.shop}
            </Link>
            <Link 
              to="/galerie" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.gallery}
            </Link>
            <Link 
              to="/clienti" 
              className="py-4 border-b border-gray-100 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.clients}
            </Link>
            <Link 
              to="/contact" 
              className="py-4 text-lg font-medium" 
              onClick={toggleMenu}
            >
              {t.contact}
            </Link>
            
            <div className="mt-6 py-4 border-t border-gray-100">
              <div className="flex items-center mb-3">
                <Phone className="h-4 w-4 mr-2 text-vultur-red" />
                <span>+40 721 407 727</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-vultur-red" />
                <span className="text-sm">{t.address}</span>
              </div>
              
              <div className="flex items-center mt-6">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleLanguage}
                  className="flex-1"
                >
                  {language === 'ro' ? 'English' : 'Română'}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Back to top button */}
      <div
        className={cn(
          "fixed right-5 bottom-5 z-50 transition-all duration-300",
          showScrollToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <Button
          variant="default"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full shadow-md bg-vultur-red hover:bg-vultur-red/90"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Call now floating button for mobile - now moved to Header toolbar */}
    </header>
  );
};

export default Header;
