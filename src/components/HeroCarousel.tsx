
import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";
import { Zap, Car, Wrench, Battery, Cpu, Truck, Thermometer } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const sliderItems = [
  {
    id: 1,
    title: "REPARAȚII ELECTROMOTOARE",
    description: "Servicii complete de reparații și recondiționări pentru orice tip de electromotor auto",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 2,
    title: "ALTERNATOARE",
    description: "Diagnosticare și reparații alternatoare pentru toate tipurile de autovehicule",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 3,
    title: "INSTALAȚII ELECTRICE",
    description: "Recondiționări complete ale instalațiilor electrice și remedieri scurt circuite",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 4,
    title: "SISTEME AUTO",
    description: "Montaj alarme, închideri centralizate, sisteme audio și navigație pentru confort și siguranță",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Car className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 5,
    title: "SERVICE PENTRU REMORCI ȘI SEMIREMORCI",
    description: "Diagnosticare și reparare sisteme electrice și suspensii pneumatice pentru remorci",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 6,
    title: "SISTEME DE ÎNCĂLZIRE ȘI CLIMATIZARE",
    description: "Instalare și service pentru sisteme Webasto de încălzire și aer condiționat pentru autovehicule",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Thermometer className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  }
];

const HeroCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!api || !autoplay) return;
    
    const timer = setInterval(() => {
      api.scrollNext();
    }, 4000); // 4 seconds interval
    
    return () => clearInterval(timer);
  }, [api, autoplay]);

  useEffect(() => {
    if (!api) return;
    
    // Update current slide index when carousel changes
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full">
      <Carousel 
        setApi={setApi}
        className="w-full"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        opts={{
          loop: true
        }}
      >
        <CarouselContent>
          {sliderItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/1">
              <div className="relative h-[240px] sm:h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-4 sm:px-8 md:px-12">
                  <div className="bg-vultur-red/90 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-6">
                    {item.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-4">{item.title}</h2>
                  <p className="text-white/90 max-w-lg text-xs sm:text-sm md:text-xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Only show one type of navigation control based on device */}
        {isMobile ? (
          <div className="flex justify-center mt-2 gap-1.5">
            {sliderItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-vultur-red scale-125" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          <>
            <CarouselPrevious className="left-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white" />
            <CarouselNext className="right-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
