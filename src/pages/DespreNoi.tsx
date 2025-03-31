
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Wrench, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DespreNoi = () => {
  const { t } = useLanguage();
  
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
                <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">{t.aboutUs}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.aboutHeroTitle}
              </h1>
              <p className="text-gray-300 max-w-2xl">
                {t.aboutHeroDesc}
              </p>
            </div>
          </div>
        </div>
        
        {/* History & Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t.historyTitle}</h2>
                <p className="text-gray-600 mb-4">
                  {t.historyDesc1}
                </p>
                <p className="text-gray-600 mb-4">
                  {t.historyDesc2}
                </p>
                <p className="text-gray-600">
                  {t.historyDesc3}
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.imgur.com/hqPdiUC.jpeg" 
                    alt={t.teamAlt} 
                    className="w-full h-[400px] md:h-[500px] object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/c41e1e/ffffff?text=Echipa+Noastră';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 md:hidden"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full md:hidden">
                    <h3 className="text-2xl font-bold text-white">Echipa Noastră</h3>
                  </div>
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
                  <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">{t.values}</span>
                  <div className="h-0.5 w-10 bg-vultur-red ml-3"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t.valuesPrinciples}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.valuesDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.valueQuality}</h3>
                <p className="text-gray-600">
                  {t.valueQualityDesc}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.valueIntegrity}</h3>
                <p className="text-gray-600">
                  {t.valueIntegrityDesc}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.valueProfessionalism}</h3>
                <p className="text-gray-600">
                  {t.valueProfessionalismDesc}
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
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-gray-600">{t.statsYears}</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Users className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-gray-600">{t.statsClients}</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Wrench className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-gray-600">{t.statsProjects}</div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Award className="h-8 w-8 text-vultur-red mx-auto" />
                </div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-gray-600">{t.statsPartnerships}</div>
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
