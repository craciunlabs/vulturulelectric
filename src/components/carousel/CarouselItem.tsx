
import { ReactNode } from 'react';
import { CarouselItem as ShadcnCarouselItem } from "@/components/ui/carousel";

interface HeroCarouselItemProps {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}

const HeroCarouselItem = ({ title, description, image, icon }: HeroCarouselItemProps) => {
  return (
    <ShadcnCarouselItem className="md:basis-1/1">
      <div className="relative h-[240px] sm:h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-4 sm:px-8 md:px-12">
          <div className="bg-vultur-red/90 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-6">
            {icon}
          </div>
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-4">{title}</h2>
          <p className="text-white/90 max-w-lg text-xs sm:text-sm md:text-xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </ShadcnCarouselItem>
  );
};

export default HeroCarouselItem;
