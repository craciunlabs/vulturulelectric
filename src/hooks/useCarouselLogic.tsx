
import { useState, useEffect } from 'react';
import { CarouselApi } from "@/components/ui/carousel";

export const useCarouselLogic = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  return {
    autoplay,
    setAutoplay,
    api,
    setApi,
    currentIndex
  };
};
