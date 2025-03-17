
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Wrench, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

const DespreNoi = () => {
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
                <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Despre Noi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cu pasiune și experiență în servicii auto
              </h1>
              <p className="text-gray-300 max-w-2xl">
                Cu o experiență de peste 15 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri.
              </p>
            </div>
          </div>
        </div>
        
        {/* History & Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Istoria și misiunea noastră</h2>
                <p className="text-gray-600 mb-4">
                  Vulturul Electric a luat ființă din pasiunea pentru automobile și dorința de a oferi servicii de cea mai înaltă calitate în domeniul electric auto.
                </p>
                <p className="text-gray-600 mb-4">
                  Cu peste 15 ani de experiență în spate, am crescut constant, investind în tehnologie de ultimă generație și în pregătirea echipei noastre.
                </p>
                <p className="text-gray-600">
                  Misiunea noastră este de a oferi servicii rapide, eficiente și de calitate pentru toate tipurile de vehicule, de la autoturisme până la camioane și autocare.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1562256039-870e13602864?q=80&w=1024&auto=format&fit=crop" 
                    alt="Echipa noastră" 
                    className="w-full h-[400px] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Echipa+Noastră';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block mx-auto">
                <div className="flex items-center mb-3">
                  <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
                  <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Valorile noastre</span>
                  <div className="h-0.5 w-10 bg-vultur-red ml-3"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Principiile care ne ghidează
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ne mândrim cu valori solide care ne-au ajutat să câștigăm încrederea clienților noștri de-a lungul anilor
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calitate</h3>
                <p className="text-gray-600">
                  Suntem dedicați calității în tot ceea ce facem. Utilizăm doar piese de calitate și oferim servicii impecabile.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integritate</h3>
                <p className="text-gray-600">
                  Acționăm cu onestitate și transparență în toate interacțiunile cu clienții noștri, construind relații de încredere durabile.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Profesionalism</h3>
                <p className="text-gray-600">
                  Echipa noastră este formată din profesioniști cu experiență, dedicați excelenței în serviciile auto electrice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="mb-3">
                  <Calendar className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-600">Ani de experiență</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Users className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-600">Clienți mulțumiți</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Wrench className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-gray-600">Proiecte finalizate</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Award className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-gray-600">Parteneriate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DespreNoi;
