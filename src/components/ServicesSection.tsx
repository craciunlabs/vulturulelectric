
import { Wrench, Cpu, Car, Settings, Battery, Plug, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ServicesSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 sm:py-16 bg-gray-50 overflow-x-hidden">
      <div className="container px-3 sm:px-6">
        <div className="text-center mb-8 sm:mb-16 animate-fade-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            {t.serviceTitle}<span className="text-vultur-red">{t.serviceHighlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t.serviceDesc}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-fade-up">
          <ServiceCard
            title={t.serviceCars}
            description={t.serviceCarsDesc}
            icon={<Car className={`h-5 w-5 sm:h-6 sm:w-6`} />}
          />
          <ServiceCard
            title={t.serviceVans}
            description={t.serviceVansDesc}
            icon={<Wrench className={`h-5 w-5 sm:h-6 sm:w-6`} />}
          />
          <ServiceCard
            title={t.serviceCoaches}
            description={t.serviceCoachesDesc}
            icon={<Settings className={`h-5 w-5 sm:h-6 sm:w-6`} />}
          />
          <ServiceCard
            title={t.serviceTrucks}
            description={t.serviceTrucksDesc}
            icon={<Cpu className={`h-5 w-5 sm:h-6 sm:w-6`} />}
          />
        </div>
        
        <div className="mt-8 sm:mt-16 pb-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">VULTURUL ELECTRIC vă pune la dispoziție:</h3>
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 sm:mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{t.serviceOffer1}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 sm:mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{t.serviceOffer2}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 sm:mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{t.serviceOffer3}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 sm:mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{t.serviceOffer4}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 sm:mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{t.serviceOffer5}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-48 sm:h-64 md:h-auto">
                <AspectRatio ratio={16/9} className="h-full">
                  <img 
                    src="https://i.imgur.com/78J38c9.jpeg" 
                    alt="Service Auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Service+Auto';
                    }}
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r"></div>
                
                {/* Webasto badge - repositioned with more space and better visibility */}
                <div className="absolute bottom-5 right-5 bg-vultur-red p-3 rounded-lg text-white shadow-md max-w-[160px] z-10">
                  <div className="text-xs font-medium mb-1">{t.authorizedPartner}</div>
                  <div className="text-lg font-bold">Webasto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
