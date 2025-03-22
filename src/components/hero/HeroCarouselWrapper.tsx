
import HeroCarousel from '../HeroCarousel';
import HeroMetrics from './HeroMetrics';

const HeroCarouselWrapper = () => {
  return (
    <div className="hidden md:block relative animate-fade-up">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <HeroCarousel />
      </div>
      <HeroMetrics isMobile={false} />
    </div>
  );
};

export default HeroCarouselWrapper;
