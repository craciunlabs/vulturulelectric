
import React from 'react';
import { Testimonial } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";

interface MobileTestimonialCarouselProps {
  testimonials: Testimonial[];
  api: CarouselApi | null;
  setApi: (api: CarouselApi) => void;
  currentIndex: number;
}

const MobileTestimonialCarousel: React.FC<MobileTestimonialCarouselProps> = ({ 
  testimonials, 
  api, 
  setApi,
  currentIndex 
}) => {
  return (
    <div className="relative">
      <Carousel 
        className="w-full" 
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center mt-4">
          <div className="flex gap-1">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-2 h-2 p-0 rounded-full ${
                  currentIndex === index
                    ? "bg-vultur-red border-vultur-red"
                    : "bg-gray-200 border-gray-200"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileTestimonialCarousel;
