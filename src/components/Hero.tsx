
import { useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';
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

const CertificationBadge = ({ name, logo }: { name: string, logo: string }) => (
  <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg text-center flex flex-col items-center">
    <img 
      src={logo} 
      alt={name} 
      className="h-10 mb-1" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://placehold.co/100x40/ffffff/c41e1e?text=Logo';
      }}
    />
    <Badge variant="outline" className="text-xs bg-gray-100 border-gray-200">
      {name}
    </Badge>
  </div>
);

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

            {/* Mobile Metrics Display */}
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
      
      {/* Certification Badges Row - Both Mobile and Desktop */}
      <div className="container mt-12 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 animate-fade-up">
          <CertificationBadge 
            name="Webasto" 
            logo="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png" 
          />
          <CertificationBadge 
            name="Eberspächer" 
            logo="https://www.eberspaecher.com/typo3conf/ext/eberspaecher/Resources/Public/Images/logo.svg" 
          />
          <CertificationBadge 
            name="Bosch" 
            logo="https://logodownload.org/wp-content/uploads/2014/04/bosch-logo-1-1.png" 
          />
          <CertificationBadge 
            name="Magneti Marelli" 
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Magneti_Marelli_logo.svg/1200px-Magneti_Marelli_logo.svg.png" 
          />
          <CertificationBadge 
            name="Delphi" 
            logo="https://1000logos.net/wp-content/uploads/2020/04/Delphi-Logo-1998.jpg" 
          />
        </div>
      </div>
      
      {/* Floating Call Button for Mobile */}
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
