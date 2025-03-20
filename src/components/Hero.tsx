import { useState } from 'react';
import { ChevronRight, Phone, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from './ui/badge';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader = ({ src, alt, className }: ImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "lazy-image transition-opacity duration-500",
        loaded ? "opacity-100 blur-none" : "opacity-60 blur-sm",
        className
      )}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
      }}
    />
  );
};

const MetricsBox = ({ icon, value, label }: { icon?: string, value: string, label: string }) => (
  <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center flex flex-col items-center">
    <div className="text-vultur-red font-bold text-xl md:text-2xl">{value}</div>
    <div className="text-gray-800 text-sm">{label}</div>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
      {hasHalfStar && (
        <span className="relative">
          <Star className="h-5 w-5 text-gray-300 fill-gray-300" />
          <span className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          </span>
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300 fill-gray-300" />
      ))}
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden hero-clip bg-gradient-to-r from-vultur-dark to-vultur-gray pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageLoader
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt="Car engine"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-white animate-fade-down">
            <div className="flex items-center mb-3">
              <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
              <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">SERVICE AUTO ELECTRIC AUTORIZAT</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.heroTitle1}<br/>
              <span className="text-gradient">{t.heroTitle2}</span><br/>
              {t.heroTitle3}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center mb-6 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <div className="flex items-center">
                <StarRating rating={4.6} />
                <span className="ml-2 text-white font-medium">4.6 / 5</span>
              </div>
              <div className="md:ml-3 flex items-center mt-1 md:mt-0">
                <Badge variant="outline" className="bg-vultur-red/20 text-white border-vultur-red/30">
                  31 recenzii pe Google
                </Badge>
                <span className="ml-2 text-gray-200 text-sm">Clienții ne recomandă</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
              >
                {t.contactUs}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/servicii-oferite" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark"
              >
                {t.seeServices}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {isMobile && (
              <div className="mt-8 grid grid-cols-3 gap-2 animate-fade-up">
                <MetricsBox 
                  value="30+" 
                  label={t.yearsExperience} 
                />
                <MetricsBox 
                  value="2000+" 
                  label={t.happyClients} 
                />
                <MetricsBox 
                  value="Webasto" 
                  label={t.webastoInstall} 
                />
              </div>
            )}
          </div>
          
          <div className="hidden md:block relative animate-fade-up">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <HeroCarousel />
            </div>
            <div className="grid grid-cols-3 gap-3 absolute -bottom-6 left-0 right-0">
              <MetricsBox 
                value="30+" 
                label={t.yearsExperience} 
              />
              <MetricsBox 
                value="2000+" 
                label={t.happyClients} 
              />
              <MetricsBox 
                value="Webasto" 
                label={t.webastoInstall} 
              />
            </div>
          </div>
        </div>
      </div>
      
      {isMobile && (
        <a 
          href="tel:+40721407727" 
          className="fixed bottom-20 right-5 z-50 bg-vultur-red text-white p-3 rounded-full shadow-lg animate-bounce-slow"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      )}
    </div>
  );
};

export default Hero;
