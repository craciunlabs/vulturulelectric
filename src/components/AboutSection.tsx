
import { Check, Award, Wrench, ShieldCheck } from 'lucide-react';
import { Badge } from './ui/badge';

const AboutSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-right">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/cU2nn7w.jpeg" 
                  alt="Service Auto Electric" 
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Service+Auto';
                  }}
                />
              </div>
              
              {/* Repositioned partner badge with Webasto logo */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-5 md:-right-5 bg-gradient-to-r from-vultur-red to-vultur-dark p-4 sm:p-6 rounded-xl shadow-lg max-w-[260px] z-10 transform hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white mr-3 sm:mr-4" />
                    <div>
                      <div className="font-bold text-lg sm:text-xl">Partener</div>
                      <div className="text-base sm:text-lg">Autorizat</div>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-2 flex items-center">
                    <img 
                      src="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png" 
                      alt="Webasto" 
                      className="h-6 sm:h-8 mr-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/120x30/ffffff/c41e1e?text=Webasto';
                      }}
                    />
                  </div>
                </div>
              </div>
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
              Cu o experiență de peste 30 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri. Pe lângă toate acestea dispunem de propriul magazin de piese auto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-vultur-red/10 rounded-full p-2 mr-3 mt-0.5">
                  <Check className="h-5 w-5 text-vultur-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Experiență dovedită</h3>
                  <p className="text-sm text-gray-600">Peste 30 ani de experiență în domeniul auto electric</p>
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
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="/despre-noi" 
                className="inline-flex items-center font-medium text-vultur-red hover:text-red-800 transition-colors"
              >
                Află mai multe despre noi
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a 
                href="/despre-noi#certificari" 
                className="inline-flex items-center font-medium bg-vultur-red text-white hover:bg-red-700 transition-colors px-3 py-1 rounded-md"
              >
                Vezi certificările noastre
                <Award className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
