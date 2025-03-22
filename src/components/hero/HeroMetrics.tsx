
import MetricsBox from './MetricsBox';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroMetricsProps {
  isMobile: boolean;
}

const HeroMetrics = ({ isMobile }: HeroMetricsProps) => {
  const { t } = useLanguage();
  
  if (isMobile) {
    return (
      <div className="grid grid-cols-3 gap-2 animate-fade-up metrics-container">
        <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-vultur-red font-bold text-lg leading-tight">30+</div>
          <div className="text-gray-800 text-xs">ani de experiență</div>
        </div>
        <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-vultur-red font-bold text-lg leading-tight">2000+</div>
          <div className="text-gray-800 text-xs">clienți fericiți</div>
        </div>
        <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-lg text-center flex flex-col items-center webasto-metric">
          <div className="text-vultur-red font-bold text-lg leading-tight">Webasto</div>
          <div className="text-gray-800 text-[10px] leading-tight">instalări și service</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-3 gap-3 absolute -bottom-10 left-0 right-0 z-10">
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
        className="webasto-metric"
      />
    </div>
  );
};

export default HeroMetrics;
