
import { Wrench, Cpu, Car, Settings, Battery, Plug, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.serviceTitle}<span className="text-vultur-red">{t.serviceHighlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.serviceDesc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
          <ServiceCard
            title={t.serviceCars}
            description={t.serviceCarsDesc}
            icon={<Car className="h-6 w-6" />}
          />
          <ServiceCard
            title={t.serviceVans}
            description={t.serviceVansDesc}
            icon={<Wrench className="h-6 w-6" />}
          />
          <ServiceCard
            title={t.serviceCoaches}
            description={t.serviceCoachesDesc}
            icon={<Settings className="h-6 w-6" />}
          />
          <ServiceCard
            title={t.serviceTrucks}
            description={t.serviceTrucksDesc}
            icon={<Cpu className="h-6 w-6" />}
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">{t.serviceOffers}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">{t.serviceOffer1}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">{t.serviceOffer2}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">{t.serviceOffer3}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">{t.serviceOffer4}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">{t.serviceOffer5}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1486262322291-6f4dbcd69bbf?q=80&w=1024&auto=format&fit=crop"
                  alt="Service Auto"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Service+Auto';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white">
                  <div className="text-sm font-medium mb-1">{t.authorizedPartner}</div>
                  <div className="text-2xl font-bold">Webasto</div>
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
