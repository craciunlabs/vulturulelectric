
import React from 'react';
import { User, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex items-start mb-3">
          <div className="mr-3">
            <Avatar className="h-14 w-14 border-2 border-gray-200">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>
                <User className="w-6 h-6 text-gray-400" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
            {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-grow relative">
          <Quote className="absolute text-gray-200 w-6 h-6 -left-1 -top-1 transform -scale-x-100" />
          <p className="text-gray-600 relative z-10 pl-3 text-sm">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
