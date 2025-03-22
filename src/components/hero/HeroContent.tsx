
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import ElectricLine from './ElectricLine';
import StarRating from './StarRating';
import HeroMetrics from './HeroMetrics';

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

      {isMobile && <HeroMetrics isMobile={true} />}
    </div>
  );
};

export default HeroContent;
