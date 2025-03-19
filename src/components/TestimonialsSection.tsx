
import React from 'react';
import { User, Star, Quote, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  avatar?: string;
}

// Sample testimonials for the initial layout
const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandru Popescu',
    role: 'Proprietar BMW X5',
    content: 'Am avut o experiență excelentă cu echipa de la Vulturul Electric. Au diagnosticat și reparat problema electrică a mașinii mele într-un timp record. Recomand cu încredere!',
    rating: 5,
    date: '15 aprilie 2023'
  },
  {
    id: '2',
    name: 'Maria Ionescu',
    role: 'Proprietar Audi A4',
    content: 'Service auto de încredere, cu personal calificat și prețuri corecte. M-au ajutat când aveam o problemă electrică complicată pe care alte service-uri nu au reușit să o identifice.',
    rating: 5,
    date: '3 martie 2023'
  },
  {
    id: '3',
    name: 'Cristian Dumitrescu',
    role: 'Proprietar Mercedes GLC',
    content: 'Vulturul Electric oferă servicii de calitate superioară. Echipamentele moderne și expertiza personalului m-au convins că am făcut alegerea corectă pentru mașina mea.',
    rating: 4,
    date: '22 mai 2023'
  }
];

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const handleWriteReview = () => {
    window.open('https://g.page/r/CXaJGdDCBZbEEAI/review', '_blank');
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div className="mr-4 bg-gray-200 rounded-full p-2">
                    {testimonial.avatar ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    ) : (
                      <User className="w-10 h-10 text-gray-400" />
                    )}
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
                
                <div className="mt-4 text-right text-sm text-gray-400">
                  {testimonial.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
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
    </section>
  );
};

export default TestimonialsSection;
