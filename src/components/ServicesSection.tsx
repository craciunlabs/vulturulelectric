
import { Wrench, Cpu, Car, Settings, Check } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';

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
        
        <div className="mt-12 sm:mt-20">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Servicii-ul VULTURUL ELECTRIC vă pune la dispoziție:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vultur-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Service autoturisme, autoutilitare, autocaramioane, autocare, remorci și semiremorci</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vultur-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Service instalații electrice (reparații electromotoare, alternatoare, recondiționări instalații electrice, remedieri scurt la instalația electrică, montaj alarme, închideri centralizate, etc.)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vultur-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Diagnoză / Computerizată a sistemelor electrico-electronice și pneumatice pentru toate mărcile de autoturisme, autocamioane, autocare.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vultur-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Diagnoză cu sistem de citire memorii-chei</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vultur-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Diagnoză / sistem frânare semiremorci ABS-EBS</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-auto">
                <div className="absolute inset-0 bg-vultur-red flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Service Auto</h2>
                  <div className="absolute bottom-6 right-6 bg-vultur-red p-2 rounded text-white text-sm">
                    <div className="text-xs">Partener autorizat</div>
                    <div className="text-xl font-bold">Webasto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-vultur-red rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 sm:h-80 flex items-center justify-center text-white text-center p-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Service Auto</h2>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider text-vultur-red font-medium">DESPRE NOI</div>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1">Experiență și calitate în domeniul auto</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Cu o experiență de peste 30 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri. Pe lângă toate acestea dispunem de propriul magazin de piese auto.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-red-100 p-1 rounded-full text-vultur-red">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Experiență dovedită</p>
                    <p className="text-sm text-gray-600">Peste 30 ani de experiență în domeniul auto electric</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-red-100 p-1 rounded-full text-vultur-red">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Echipamente moderne</p>
                    <p className="text-sm text-gray-600">Utilizăm tehnologie de ultimă generație pentru diagnosticare</p>
                  </div>
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
