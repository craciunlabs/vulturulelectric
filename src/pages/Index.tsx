
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AuthorizedPartnerSection from '@/components/AuthorizedPartnerSection';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Vulturul Electric - Service Auto Electric Professional";
    
    // Handle scroll for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow overflow-hidden">
        <Hero />
        <AuthorizedPartnerSection />
        <ClientsCarousel />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <MapSection />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Back to top button - positioned in bottom-right */}
      <Button
        onClick={scrollToTop}
        className={cn(
          "fixed z-50 bottom-5 right-5 rounded-full shadow-lg transition-all duration-300 transform bg-vultur-red hover:bg-vultur-red/90",
          isMobile ? "w-10 h-10" : "w-12 h-12",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        size="icon"
        aria-label="Back to top"
      >
        <ArrowUp className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
      </Button>
    </div>
  );
};

export default Index;
