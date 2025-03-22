
import MetricsBox from './MetricsBox';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroMetricsProps {
  isMobile: boolean;
}

const HeroMetrics = ({ isMobile }: HeroMetricsProps) => {
  const { t } = useLanguage();
  
  if (isMobile) {
    return (
      <div className="mt-5 grid grid-cols-3 gap-1.5 animate-fade-up">
        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
          <div className="text-vultur-red font-bold text-lg">30+</div>
          <div className="text-gray-800 text-xs">ani de experiență</div>
        </div>
        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
          <div className="text-vultur-red font-bold text-lg">2000+</div>
          <div className="text-gray-800 text-xs">clienți fericiți</div>
        </div>
        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
          <div className="text-vultur-red font-bold text-lg">Webasto</div>
          <div className="text-gray-800 text-xs">instalări</div>
        </div>
      </div>
    );
  }
  
  return (
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
  );
};

export default HeroMetrics;
