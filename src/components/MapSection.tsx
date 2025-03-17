import { MapPin, Navigation, Clock } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
            <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Locație</span>
            <div className="h-0.5 w-10 bg-vultur-red ml-3"></div>
          </div>
          <h2 className="text-3xl font-bold mb-2">Unde ne găsești</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suntem situați pe DE 79, Nr. 229, în localitatea Vârt, Gorj. Te așteptăm să ne vizitezi!
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-[21/9] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.7548536429198!2d23.13978444727798!3d44.94609351744701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475272722a35768d%3A0x30dab34d9c1b536e!2sVulturul%20Electric%20-%20AUTO%20SERVICE!5e0!3m2!1sro!2sro!4v1719596219764!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Vulturul Electric"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-vultur-red mr-2" />
              <span className="font-medium">Vulturul Electric - AUTO SERVICE</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">DE 79, Nr. 229, Vârt, 215400, Gorj</p>
            <div className="mt-3">
              <a 
                href="https://www.google.com/maps/dir//Vulturul+Electric+-+AUTO+SERVICE,+DN66,+V%C3%A2r%C8%9B/@44.9460418,23.1382941,17z/data=!4m17!1m7!3m6!1s0x475272722a35768d:0x30dab34d9c1b536e!2sVulturul+Electric+-+AUTO+SERVICE!8m2!3d44.9460418!4d23.1404828!16s%2Fg%2F11h462090p!4m8!1m0!1m5!1m1!1s0x475272722a35768d:0x30dab34d9c1b536e!2m2!1d23.1404828!2d44.9460418!3e0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-vultur-red hover:text-red-800 transition-colors"
              >
                <Navigation className="h-4 w-4 mr-1" />
                Indicații rutiere
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="bg-vultur-red/10 rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <div className="bg-vultur-red rounded-full p-1 mr-3 mt-0.5">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Program de lucru</h3>
                <p className="text-sm text-gray-600">
                  Luni - Vineri: 09<sup>00</sup> - 18<sup>00</sup> | Sâmbătă - Duminică: Închis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
