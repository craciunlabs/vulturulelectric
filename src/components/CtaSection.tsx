
import { Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-vultur-red">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Pentru programări în service sunați la numărul:
            </h2>
            <p className="text-white/80">
              Servicii rapide și de calitate pentru automobilul dumneavoastră
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <a 
              href="tel:+40721407727" 
              className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold hover:text-white/90 transition-colors"
            >
              <Phone className="h-8 w-8 animate-pulse-slow" />
              0721-407.727
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
