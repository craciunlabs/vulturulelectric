
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import ElectricLine from './ElectricLine';
import StarRating from './StarRating';

interface HeroContentProps {
  isMobile: boolean;
}

const HeroContent = ({ isMobile }: HeroContentProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-white animate-fade-down">
      <div className="flex items-center mb-2">
        <ElectricLine />
        <span className="text-xs sm:text-sm uppercase tracking-wider font-medium bg-gradient-to-r from-orange-300 to-white text-transparent bg-clip-text glow-text">SERVICE AUTO ELECTRIC AUTORIZAT</span>
      </div>
      
      {isMobile && (
        <div className="flex items-center mb-4 mobile-metrics-container animate-fade-up">
          <div className="flex items-center justify-between w-full">
            <div className="metrics-item">
              <span className="text-vultur-red font-bold text-xl leading-none">30+</span>
              <span className="text-xs block mt-0.5 opacity-90 whitespace-nowrap">ani exp.</span>
            </div>
            <div className="metrics-item">
              <span className="text-vultur-red font-bold text-xl leading-none">2000+</span>
              <span className="text-xs block mt-0.5 opacity-90 whitespace-nowrap">clienți</span>
            </div>
            <div className="metrics-item">
              <span className="text-vultur-red font-bold text-xl leading-none">Webasto</span>
              <span className="text-xs block mt-0.5 opacity-90 whitespace-nowrap">service</span>
            </div>
          </div>
        </div>
      )}
      
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

      {isMobile ? (
        <div className="mb-5 rating-badge-container">
          <div className="flex items-center bg-black/50 backdrop-blur-sm py-1.5 px-3 rounded-lg">
            <StarRating rating={4.6} />
            <span className="ml-2 text-white font-medium text-sm whitespace-nowrap">4.6 / 5</span>
          </div>
          <div className="ml-2 inline-block">
            <Badge variant="outline" className="bg-vultur-red text-white border-vultur-red/30 px-2.5 py-1 text-xs whitespace-nowrap">
              31 recenzii pe Google
            </Badge>
          </div>
        </div>
      ) : (
        <div className="flex items-center mb-4 w-fit bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg transform transition-all duration-300 hover:bg-white/15">
          <div className="flex items-center">
            <StarRating rating={4.6} />
            <span className="ml-2 text-white font-medium text-sm sm:text-base">4.6 / 5</span>
          </div>
          <div className="ml-3 flex items-center">
            <Badge variant="outline" className="text-xs sm:text-sm bg-vultur-red/20 text-white border-vultur-red/30">
              31 recenzii pe Google
            </Badge>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 mb-1">
        {isMobile ? (
          <>
            <a 
              href="/contact" 
              className="w-full inline-flex items-center justify-center py-2.5 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm"
            >
              Contactează-ne
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a 
              href="/servicii-oferite" 
              className="w-full inline-flex items-center justify-center py-2.5 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm"
            >
              Vezi serviciile
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </>
        ) : (
          <>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center py-3 px-10 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm min-w-[200px]"
            >
              {t.contactUs}
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a 
              href="/servicii-oferite" 
              className="inline-flex items-center justify-center py-3 px-10 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm min-w-[200px]"
            >
              {t.seeServices}
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
