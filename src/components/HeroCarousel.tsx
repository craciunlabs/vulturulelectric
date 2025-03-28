
import { 
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselLogic } from '@/hooks/useCarouselLogic';
import { sliderItems } from '@/data/heroCarouselData';
import HeroCarouselItem from './carousel/CarouselItem';
import CarouselDots from './carousel/CarouselDots';

const HeroCarousel = () => {
  const { autoplay, setAutoplay, api, setApi, currentIndex } = useCarouselLogic();
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full relative">
      <Carousel 
        setApi={setApi}
        className="w-full"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        opts={{
          loop: true,
          duration: 35
        }}
      >
        <CarouselContent>
          {sliderItems.map((item) => (
            <HeroCarouselItem 
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              icon={item.icon}
            />
          ))}
        </CarouselContent>
        
        {isMobile ? (
          <CarouselDots 
            items={sliderItems}
            currentIndex={currentIndex}
            api={api}
          />
        ) : (
          <>
            <CarouselPrevious className="left-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white z-20" />
            <CarouselNext className="right-4 bg-vultur-red hover:bg-vultur-red/80 border-0 text-white z-20" />
            <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
              <div className="flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                {sliderItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "bg-vultur-red scale-125" : "bg-white/60"
                    }`}
                    aria-label={`Navigate to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
