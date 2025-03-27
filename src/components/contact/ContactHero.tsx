
import { useLanguage } from '@/contexts/LanguageContext';

const ContactHero = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default ContactHero;
