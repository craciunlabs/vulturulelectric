
import { Phone } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from './ui/badge';

// Import extracted components
import ImageLoader from './hero/ImageLoader';
import MetricsBox from './hero/MetricsBox';
import StarRating from './hero/StarRating';
import MobileMetrics from './hero/MobileMetrics';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const openDirections = () => {
    // Coordinates for Vulturul Electric
    const destination = "44.946058,23.139883";
    const label = "Vulturul Electric";
    
    // Create the Google Maps directions URL
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${label}`;
    
    // Open in a new tab
    window.open(url, '_blank');
  };
  
  return (
    <div className="relative overflow-hidden hero-clip bg-gradient-to-r from-vultur-dark to-vultur-gray pt-24 md:pt-32 pb-12 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageLoader
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt="Car engine"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }}
      ></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-white animate-fade-down">
            <div className="flex items-center mb-2">
              <div className="h-0.5 w-6 sm:w-10 bg-vultur-red mr-2 sm:mr-3"></div>
              <span className="text-xs sm:text-sm uppercase tracking-wider font-medium text-vultur-red">SERVICE AUTO ELECTRIC AUTORIZAT</span>
            </div>
            
            {isMobile ? (
              <h1 className="text-3xl font-bold mb-3 leading-tight">
                <div className="text-white">REPARAȚII</div>
                <div className="text-vultur-red">ELECTROMOTOARE</div>
                <div className="text-white">ALTERNATOARE</div>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.heroTitle1}<br/>
                <span className="text-gradient">{t.heroTitle2}</span><br/>
                {t.heroTitle3}
              </h1>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center mb-4 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg transform transition-all duration-300 hover:bg-white/15">
              <div className="flex items-center">
                <StarRating rating={4.6} />
                <span className="ml-2 text-white font-medium text-sm sm:text-base">4.6 / 5</span>
              </div>
              <div className="sm:ml-3 flex items-center mt-1 sm:mt-0">
                <Badge variant="outline" className="text-xs sm:text-sm bg-vultur-red/20 text-white border-vultur-red/30">
                  31 recenzii pe Google
                </Badge>
                <span className="ml-2 text-gray-200 text-xs sm:text-sm">Clienții ne recomandă</span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-4">
              <a 
                href="/contact" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                {isMobile ? "Contactează-ne acum" : t.contactUs}
                <ChevronRight className="ml-1 sm:ml-2 h-4 w-4" />
              </a>
              <a 
                href="/servicii-oferite" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                {isMobile ? "Vezi serviciile" : t.seeServices}
                <ChevronRight className="ml-1 sm:ml-2 h-4 w-4" />
              </a>
            </div>

            {isMobile && (
              <MobileMetrics 
                yearsExperience="ani de experiență"
                clientsCount="clienți fericiți"
                specialFeature="instalări"
              />
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
        <>
          <a 
            href="tel:+40721407727" 
            className="fixed bottom-20 right-5 z-50 bg-vultur-red text-white p-3 rounded-full shadow-lg animate-bounce-slow hover:bg-red-800 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </>
      )}
    </div>
  );
};

export default Hero;
