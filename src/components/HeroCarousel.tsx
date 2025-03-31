
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
            <HeroCarouselItem 
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              icon={item.icon}
            />
          ))}
        </CarouselContent>
        
        {/* Only show one type of navigation control based on device */}
        {isMobile ? (
          <CarouselDots 
            items={sliderItems}
            currentIndex={currentIndex}
            api={api}
          />
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
