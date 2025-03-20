
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

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
  <div className="bg-white p-3 rounded-lg shadow-lg text-center">
    <div className="text-vultur-red font-bold text-xl md:text-2xl">{value}</div>
    <div className="text-gray-800 text-sm">{label}</div>
  </div>
);

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden hero-clip bg-gradient-to-r from-vultur-dark to-vultur-gray pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageLoader
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt="Car engine"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        {/* Mobile Metrics Display - Visible only on mobile */}
        {isMobile && (
          <div className="mb-6 grid grid-cols-3 gap-2 animate-fade-down">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-white animate-fade-down">
            <div className="flex items-center mb-3">
              <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
              <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Service Auto Electric Autorizat</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.heroTitle1}<br/>
              <span className="text-gradient">{t.heroTitle2}</span><br/>
              {t.heroTitle3}
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              {t.heroDesc}
            </p>
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
    </div>
  );
};

export default Hero;
