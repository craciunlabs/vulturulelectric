
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CtaSection from '@/components/CtaSection';
import { Car, Wrench, Cpu, Settings, Battery, Plug } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const ServiciiOferite = () => {
  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-vultur-dark text-white pt-32 pb-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
                <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Servicii Oferite</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluții complete pentru sistemele electrice auto
              </h1>
              <p className="text-gray-300 max-w-2xl">
                Oferim o gamă completă de servicii pentru toate tipurile de vehicule, de la autoturisme până la camioane și autocare.
              </p>
            </div>
          </div>
        </div>
        
        {/* All Services */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Reparații Electromotoare"
                description="Reparăm și recondiționăm electromotoare pentru toate tipurile de vehicule, asigurând porniri fără probleme."
                icon={<Settings className="h-6 w-6" />}
              />
              
              <ServiceCard
                title="Reparații Alternatoare"
                description="Servicii complete de diagnoză, reparație și reconstrucție a alternatoarelor pentru orice tip de vehicul."
                icon={<Battery className="h-6 w-6" />}
              />
              
              <ServiceCard
                title="Recondiționări Instalații Electrice"
                description="Recondiționăm complet instalațiile electrice deteriorate, asigurând funcționarea optimă a vehiculului."
                icon={<Plug className="h-6 w-6" />}
              />
              
              <ServiceCard
                title="Diagnoză Computerizată"
                description="Identificăm rapid problemele cu ajutorul echipamentelor de diagnoză computerizată de ultimă generație."
                icon={<Cpu className="h-6 w-6" />}
              />
              
              <ServiceCard
                title="Diagnoză Sisteme Frânare"
                description="Verificarea și diagnosticarea sistemelor de frânare ABS-EBS pentru semiremorci și camioane."
                icon={<Settings className="h-6 w-6" />}
              />
              
              <ServiceCard
                title="Service Climatizare Auto"
                description="Reparații, întreținere și reîncărcare agent frigorific pentru sistemele de climatizare auto."
                icon={<Car className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>
        
        {/* Highlighted Service */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-3">
                  <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
                  <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Serviciul Nostru Principal</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Diagnosticare și Reparații Electrice Complete
                </h2>
                <p className="text-gray-600 mb-6">
                  Serviciile noastre de diagnosticare și reparații electrice sunt complete și acoperă toate componentele electrice ale vehiculului dumneavoastră.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">Diagnosticare completă a sistemelor electrice</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">Reparații profesionale cu echipamente moderne</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">Piese de calitate și garanție pentru lucrări</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 text-vultur-red">✓</div>
                    <div>
                      <p className="font-medium">Servicii rapide și eficiente</p>
                    </div>
                  </li>
                </ul>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
                >
                  Contactează-ne acum
                </a>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1599171628320-a8e31dc37ff5?q=80&w=1024&auto=format&fit=crop" 
                    alt="Diagnoză auto" 
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Diagnostic+Auto';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiciiOferite;
