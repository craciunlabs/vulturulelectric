
import { Check, Award, Wrench, ShieldCheck } from 'lucide-react';
import { Badge } from './ui/badge';

const CertificationBadge = ({ name, logo }: { name: string, logo: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
    <img 
      src={logo} 
      alt={name} 
      className="h-10 mb-2" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://placehold.co/100x40/ffffff/c41e1e?text=Logo';
      }}
    />
    <Badge variant="outline" className="mt-1 bg-gray-50">
      {name}
    </Badge>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-right">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1024&auto=format&fit=crop" 
                  alt="Service Auto Electric" 
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Service+Auto';
                  }}
                />
              </div>
              
              {/* Enhanced partner badge with Webasto logo */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-vultur-red to-vultur-dark p-6 rounded-xl shadow-lg max-w-[280px] transform hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  <div className="flex items-center mb-3">
                    <Award className="h-10 w-10 text-white mr-4" />
                    <div>
                      <div className="font-bold text-xl">Partener</div>
                      <div className="text-lg">Autorizat</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <img 
                      src="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png" 
                      alt="Webasto" 
                      className="h-8 mr-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/120x30/ffffff/c41e1e?text=Webasto';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certifications Grid */}
            <div className="mt-16 grid grid-cols-3 gap-3">
              <CertificationBadge 
                name="Webasto" 
                logo="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png" 
              />
              <CertificationBadge 
                name="Bosch" 
                logo="https://logodownload.org/wp-content/uploads/2014/04/bosch-logo-1-1.png" 
              />
              <CertificationBadge 
                name="Magneti Marelli" 
                logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Magneti_Marelli_logo.svg/1200px-Magneti_Marelli_logo.svg.png" 
              />
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="flex items-center mb-3">
              <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
              <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Despre Noi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experiență și calitate în domeniul auto
            </h2>
            <p className="text-gray-600 mb-8">
              Cu o experiență de peste 25 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri. Pe lângă toate acestea dispunem de propriul magazin de piese auto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-vultur-red/10 rounded-full p-2 mr-3 mt-0.5">
                  <Check className="h-5 w-5 text-vultur-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Experiență dovedită</h3>
                  <p className="text-sm text-gray-600">Peste 25 ani de experiență în domeniul auto electric</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vultur-red/10 rounded-full p-2 mr-3 mt-0.5">
                  <Wrench className="h-5 w-5 text-vultur-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Echipamente moderne</h3>
                  <p className="text-sm text-gray-600">Utilizăm tehnologie de ultimă generație pentru diagnosticare</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vultur-red/10 rounded-full p-2 mr-3 mt-0.5">
                  <ShieldCheck className="h-5 w-5 text-vultur-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Garanție lucrări</h3>
                  <p className="text-sm text-gray-600">Oferim garanție pentru toate serviciile efectuate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vultur-red/10 rounded-full p-2 mr-3 mt-0.5">
                  <Award className="h-5 w-5 text-vultur-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Partener autorizat Webasto</h3>
                  <p className="text-sm text-gray-600">Suntem partener autorizat pentru mărcile principale</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/despre-noi" 
              className="inline-flex items-center font-medium text-vultur-red hover:text-red-800 transition-colors"
            >
              Află mai multe despre noi
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
