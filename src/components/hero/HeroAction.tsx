
import { Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroAction = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <a 
      href="tel:+40721407727" 
      className="fixed bottom-20 right-5 z-50 bg-vultur-red text-white p-3 rounded-full shadow-lg animate-bounce-slow hover:bg-red-800 transition-colors"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
    </a>
  );
};

export default HeroAction;
