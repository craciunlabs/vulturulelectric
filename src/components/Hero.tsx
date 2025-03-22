
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroCarouselWrapper from './hero/HeroCarouselWrapper';
import HeroAction from './hero/HeroAction';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden hero-clip bg-gradient-to-r from-vultur-dark to-vultur-gray pt-24 md:pt-32 pb-16 md:pb-32 hero-section">
      <HeroBackground />
      
      <div className="container relative z-10 content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <HeroContent isMobile={isMobile} />
          <HeroCarouselWrapper />
        </div>
      </div>
      
      {!isMobile && <HeroAction />}
    </div>
  );
};

export default Hero;
