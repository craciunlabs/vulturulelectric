
import React from 'react';
import { Testimonial } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';
import { Card } from '@/components/ui/card';

interface DesktopTestimonialGridProps {
  testimonials: Testimonial[];
}

const DesktopTestimonialGrid: React.FC<DesktopTestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default DesktopTestimonialGrid;
