
import React, { useRef } from 'react';
import { User, Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Updated testimonials with the provided information
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Narcis Stoica',
    role: '',
    content: 'Profesioniști desăvârșiți!!! Am fost la două service-uri în afara țării și nu au reușit să-mi rezolve problema. Aici, în mai puțin de două ore, am plecat din garaj cu garanția că 2 ani de zile nu voi mai avea aceeași problemă.',
    rating: 5,
    avatar: 'https://i.imgur.com/FHqgyZS.png'
  },
  {
    id: '2',
    name: 'Claudiu Craciun',
    role: '',
    content: 'The best in the state for trucks and automotive 💯🚀 …',
    rating: 5,
    avatar: 'https://i.imgur.com/rErVmDS.jpeg'
  },
  {
    id: '3',
    name: 'Cosmin Pupazan',
    role: '',
    content: 'Profesioniștii in electrica auto !',
    rating: 5,
    avatar: 'https://i.imgur.com/Ltf1nAK.png'
  }
];

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleWriteReview = () => {
    window.open('https://g.page/r/CW5TG5xNs9owEBM/review', '_blank');
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

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
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="flex-shrink-0 w-[280px] snap-center shadow-md"
                >
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
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollLeft}
                className="h-8 w-8 rounded-full border-vultur-red text-vultur-red hover:bg-vultur-red hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollRight}
                className="h-8 w-8 rounded-full border-vultur-red text-vultur-red hover:bg-vultur-red hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <Avatar className="h-16 w-16 border-2 border-gray-200">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>
                          <User className="w-8 h-8 text-gray-400" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow relative">
                    <Quote className="absolute text-gray-200 w-8 h-8 -left-1 -top-1 transform -scale-x-100" />
                    <p className="text-gray-600 relative z-10 pl-4">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12 space-y-6">
          <Button 
            onClick={handleWriteReview} 
            variant="outline" 
            className="border-vultur-red text-vultur-red hover:bg-vultur-red hover:text-white transition-colors"
          >
            {t.writeReview}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          <p className="text-gray-500 italic">
            {t.realExperiences}
          </p>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
