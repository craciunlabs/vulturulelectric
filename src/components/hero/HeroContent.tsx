
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import ElectricLine from './ElectricLine';
import StarRating from './StarRating';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
            <StarRating rating={5.0} />
            <span className="ml-2 text-white font-medium text-sm whitespace-nowrap">5.0 / 5</span>
          </div>
          <div className="ml-2 inline-block">
            <Badge variant="outline" className="bg-vultur-red text-white border-vultur-red/30 px-2.5 py-1 text-xs whitespace-nowrap">
              44 recenzii pe Google
            </Badge>
          </div>
        </div>
      ) : (
        <div className="flex items-center mb-8 w-fit bg-black/50 backdrop-blur-sm p-2 rounded-lg">
          <div className="flex items-center">
            <StarRating rating={5.0} />
            <span className="ml-2 text-white font-medium text-base">5.0 / 5</span>
          </div>
          <div className="ml-3 flex items-center">
            <Badge variant="outline" className="text-sm bg-transparent text-white border-white/30">
              44 recenzii pe Google
            </Badge>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        {isMobile ? (
          <>
            <Link 
              to="/contact" 
              className="w-full inline-flex items-center justify-center py-2.5 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm"
            >
              Contactează-ne
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link 
              to="/servicii-oferite" 
              className="w-full inline-flex items-center justify-center py-2.5 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-sm"
            >
              Vezi serviciile
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </>
        ) : (
          <>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center py-3 px-5 bg-vultur-red text-white rounded-sm font-medium text-base hover:bg-red-700 transition-colors"
            >
              Contactează-ne acum
              <ChevronRight className="ml-1.5 h-5 w-5" />
            </Link>
            <Link 
              to="/servicii-oferite" 
              className="inline-flex items-center justify-center py-3 px-5 bg-white text-vultur-dark rounded-sm font-medium text-base hover:bg-gray-100 transition-colors"
            >
              Vezi serviciile
              <ChevronRight className="ml-1.5 h-5 w-5" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
