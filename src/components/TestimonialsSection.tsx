
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselLogic } from '@/hooks/useCarouselLogic';
import { testimonials } from '@/data/testimonials';
import MobileTestimonialCarousel from './testimonials/MobileTestimonialCarousel';
import DesktopTestimonialGrid from './testimonials/DesktopTestimonialGrid';
import ReviewActionButton from './testimonials/ReviewActionButton';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { api, setApi, currentIndex } = useCarouselLogic();

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t.testimonialsTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.testimonialsDesc}
          </p>
        </div>
        
        {isMobile ? (
          <MobileTestimonialCarousel 
            testimonials={testimonials} 
            api={api} 
            setApi={setApi} 
            currentIndex={currentIndex} 
          />
        ) : (
          <DesktopTestimonialGrid testimonials={testimonials} />
        )}
        
        <ReviewActionButton />
      </div>
    </section>
  );
};

export default TestimonialsSection;
