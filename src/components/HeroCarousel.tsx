
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
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Zap className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: "ALTERNATOARE",
    description: "Diagnosticare și reparații alternatoare pentru toate tipurile de autovehicule",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Battery className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: "INSTALAȚII ELECTRICE",
    description: "Recondiționări complete ale instalațiilor electrice și remedieri scurt circuite",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Cpu className="h-8 w-8 text-white" />
  },
  {
    id: 4,
    title: "SISTEME AUTO",
    description: "Montaj alarme, închideri centralizate, sisteme audio și navigație pentru confort și siguranță",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Car className="h-8 w-8 text-white" />
  }
];

const HeroCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  // Force consistent timing regardless of slide position
  useEffect(() => {
    if (!api || !autoplay) return;
    
    // Set a consistent interval for all slides
    const timer = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(timer);
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
                    target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
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
