
import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Zap, Car, Wrench, Battery, Cpu } from 'lucide-react';

const sliderItems = [
  {
    id: 1,
    title: "REPARAȚII ELECTROMOTOARE",
    description: "Servicii complete de reparații și recondiționări pentru orice tip de electromotor auto",
    image: "/lovable-uploads/09cb70f2-9872-4d37-84a1-7f6d868cf6d0.png",
    icon: <Zap className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: "ALTERNATOARE",
    description: "Diagnosticare și reparații alternatoare pentru toate tipurile de autovehicule",
    image: "/lovable-uploads/5c56f901-7fb3-459d-b66d-206f3d0231e8.png",
    icon: <Battery className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: "INSTALAȚII ELECTRICE",
    description: "Recondiționări complete ale instalațiilor electrice și remedieri scurt circuite",
    image: "/lovable-uploads/e95affab-b50d-4d5c-98cc-6c88700c87c2.png",
    icon: <Cpu className="h-8 w-8 text-white" />
  },
  {
    id: 4,
    title: "SISTEME AUTO",
    description: "Montaj alarme, închideri centralizate, sisteme audio și navigație pentru confort și siguranță",
    image: "/lovable-uploads/c8f767fa-7681-4596-ad6b-bb7f7b15a908.png",
    icon: <Car className="h-8 w-8 text-white" />
  }
];

const HeroCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  useEffect(() => {
    if (!api || !autoplay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoplay]);

  return (
    <div className="w-full">
      <Carousel 
        setApi={setApi}
        className="w-full"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <CarouselContent>
          {sliderItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/1">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/1200x800/c41e1e/ffffff?text=Service+Auto+Electric';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-12">
                  <div className="bg-vultur-red/90 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-white/90 max-w-lg text-lg md:text-xl">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white" />
        <CarouselNext className="right-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
