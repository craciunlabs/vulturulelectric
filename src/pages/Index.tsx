
import { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Vulturul Electric - Service Auto Electric Professional | Remorci și Semiremorci";
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
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
    </div>
  );
};

export default Index;
