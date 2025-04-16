
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleMapLoad = () => {
    setMapLoaded(true);
    setMapError(false);
  };
  
  const handleMapError = () => {
    setMapError(true);
    console.log("Map failed to load on Contact page, possibly blocked by browser or antivirus");
  };

  // Use a more secure map URL with additional parameters
  const secureMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.7548536429198!2d23.13978444727798!3d44.94609351744701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475272722a35768d%3A0x30dab34d9c1b536e!2sVulturul%20Electric%20-%20AUTO%20SERVICE!5e0!3m2!1sro!2sro!4v1719596219764!5m2!1sro!2sro&output=embed";

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
                <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Contact</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactează-ne
              </h1>
              <p className="text-gray-300 max-w-2xl">
                Suntem aici pentru a vă ajuta. Contactați-ne pentru programări sau informații suplimentare despre serviciile noastre.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Info & Image */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informații de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-gray-600">+40 721 407 727</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">service@vulturulelectric.ro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresă</h3>
                      <p className="text-gray-600">DE 79, Nr. 228, Vârt, 215400, Gorj, Romania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Program</h3>
                      <p className="text-gray-600">
                        Luni - Vineri: 09<sup>00</sup> - 17<sup>00</sup><br />
                        Sâmbătă - Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Urmărește-ne</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" aria-label="Facebook" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a href="mailto:service@vulturulelectric.ro" aria-label="Email" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Image */}
              <div>
                <div className="bg-white p-4 rounded-xl shadow-lg h-full">
                  <div className="rounded-lg overflow-hidden h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1573007268869-c891bdf849c9?q=80&w=2070&auto=format&fit=crop" 
                      alt="Servicii auto electrice profesionale" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Service+Auto+Electric';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-vultur-red">Servicii Auto Electrice Profesionale</h3>
                    <p className="mt-2 text-gray-600">Diagnoză și reparații electrice de înaltă precizie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-8">
          <div className="container">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
              {!mapError ? (
                <iframe
                  src={secureMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație Vulturul Electric"
                  onLoad={handleMapLoad}
                  onError={handleMapError}
                  sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                  <div className="text-center">
                    <p className="text-gray-500 mb-2">Harta nu poate fi încărcată</p>
                    <a 
                      href="https://www.google.com/maps/place/Vulturul+Electric+-+AUTO+SERVICE/@44.9460418,23.1382941,17z/data=!3m1!4b1!4m6!3m5!1s0x475272722a35768d:0x30dab34d9c1b536e!8m2!3d44.9460418!4d23.1404828!16s%2Fg%2F11h462090p?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-vultur-red hover:text-red-800 transition-colors"
                    >
                      Vezi locația pe Google Maps
                    </a>
                  </div>
                </div>
              )}
              {!mapLoaded && !mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Încărcare hartă...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
