
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { Settings, Battery, ShieldCheck, Plug, Wrench, Cpu, Car } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from "@/components/ui/card";

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
        
        {/* Highlighted Service - Now First */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-3">
                  <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
                  <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">SERVICIUL NOSTRU PRINCIPAL</span>
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
                  <AspectRatio ratio={4/3} className="w-full">
                    <img 
                      src="public/lovable-uploads/44ea2bb6-87b7-4959-b9b1-dd104483391f.png" 
                      alt="Diagnosticare auto profesională" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://i.imgur.com/FO71pEJ.jpeg';
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Services - Updated with New Design */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Serviciile Noastre</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferim o gamă completă de servicii pentru toate tipurile de vehicule, asigurând calitate și profesionalism.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Row 1 */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reparații Electromotoare</h3>
                  <p className="text-gray-600">
                    Reparăm și recondiționăm electromotoare pentru toate tipurile de vehicule, asigurând porniri fără probleme.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Battery className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reparații Alternatoare</h3>
                  <p className="text-gray-600">
                    Servicii complete de diagnoză, reparație și reconstrucție a alternatoarelor pentru orice tip de vehicul.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Plug className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Recondiționări Instalații Electrice</h3>
                  <p className="text-gray-600">
                    Recondiționăm complet instalațiile electrice deteriorate, asigurând funcționarea optimă a vehiculului.
                  </p>
                </CardContent>
              </Card>
              
              {/* Row 2 */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Montaj Alarme</h3>
                  <p className="text-gray-600">
                    Instalăm sisteme de alarmă moderne, oferind protecție împotriva furturilor și tentativelor de efracție.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Închideri Centralizate</h3>
                  <p className="text-gray-600">
                    Montăm și reparăm sisteme de închidere centralizată pentru confort și siguranță sporite.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Montaj Casetofoane</h3>
                  <p className="text-gray-600">
                    Servicii de instalare a sistemelor audio auto, cu integrare perfectă în bordul mașinii.
                  </p>
                </CardContent>
              </Card>
              
              {/* Row 3 */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Diagnoză Computerizată</h3>
                  <p className="text-gray-600">
                    Identificăm rapid problemele cu ajutorul echipamentelor de diagnoză computerizată de ultimă generație.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Diagnoză Sisteme Frânare</h3>
                  <p className="text-gray-600">
                    Verificarea și diagnosticarea sistemelor de frânare ABS-EBS pentru semiremorci și camioane.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Service Climatizare Auto</h3>
                  <p className="text-gray-600">
                    Reparații, întreținere și reîncărcare agent frigorific pentru sistemele de climatizare auto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiciiOferite;
