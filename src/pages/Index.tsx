
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import CtaSection from '@/components/CtaSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Vulturul Electric - Service Auto Electric Professional";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientsCarousel />
        <ServicesSection />
        <AboutSection />
        <MapSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
