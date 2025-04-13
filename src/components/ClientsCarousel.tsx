
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const clientsData: ClientLogo[] = [
  {
    id: 2,
    name: "CE OLTENIA",
    logo: "https://placehold.co/200x100/ffffff/c41e1e?text=CE+OLTENIA",
    url: "https://www.ceoltenia.ro"
  },
  {
    id: 3,
    name: "TELEKOM",
    logo: "https://placehold.co/200x100/ffffff/e4007c?text=T-MOBILE",
    url: "https://www.telekom.ro"
  },
  {
    id: 4,
    name: "RCS & RDS",
    logo: "https://placehold.co/200x100/ffffff/0089cf?text=RCS+%26+RDS",
    url: "https://www.rcs-rds.ro"
  },
  {
    id: 5,
    name: "ENOVA GROUP",
    logo: "https://placehold.co/200x100/ffffff/e74c3c?text=ENOVA",
    url: "https://www.enova-group.biz"
  },
  {
    id: 6,
    name: "CS PANDURII",
    logo: "https://placehold.co/200x100/ffffff/00a8e8?text=PANDURII",
    url: "https://www.panduriics.ro"
  },
  {
    id: 7,
    name: "CARPATIA TOUR",
    logo: "https://placehold.co/200x100/ffffff/4CAF50?text=CARPATIA+TOUR",
    url: "https://www.carpatiatour.ro"
  },
  {
    id: 8,
    name: "FAN COURIER",
    logo: "https://placehold.co/200x100/ffffff/003366?text=FAN+COURIER",
    url: "https://www.fancourier.ro"
  },
  {
    id: 9,
    name: "VIITORUL",
    logo: "https://placehold.co/200x100/ffffff/0033cc?text=VIITORUL",
    url: "https://www.viitorultransport.com"
  },
  {
    id: 10,
    name: "ENERGOMONTAJ",
    logo: "https://placehold.co/200x100/ffffff/e74c3c?text=SAEM",
    url: "https://www.saem.ro"
  }
];

const ClientsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const [isReady, setIsReady] = useState(false);
  
  // Function to handle the animation scroll
  const scrollAnimation = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isReady) return;
    
    if (!isPaused) {
      // Adjust mobile scroll speed to be slower than desktop but not too slow
      const scrollSpeed = isMobile ? 0.15 : 0.5;
      positionRef.current += scrollSpeed;
      scrollContainer.scrollLeft = positionRef.current;
      
      // Reset when we reach the end of the first set
      if (positionRef.current >= scrollContainer.scrollWidth / 2) {
        positionRef.current = 0;
        scrollContainer.scrollLeft = 0;
      }
    }
    
    animationRef.current = requestAnimationFrame(scrollAnimation);
  };
  
  // Add a delay to make sure the mobile detection happens before animation starts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isReady) return;
    
    // Start the scrolling animation
    animationRef.current = requestAnimationFrame(scrollAnimation);
    
    // Clean up animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isReady, isMobile]);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  return (
    <section className="py-8 sm:py-12 bg-gray-50 overflow-hidden relative">
      <div className="container">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Parteneri de Încredere</h2>
          <p className="text-gray-600 mt-2">Soluții electrice auto pentru companii de top din România</p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto whitespace-nowrap py-4 sm:py-6 px-4 sm:px-8 scrollbar-hide"
        style={{ 
          msOverflowStyle: 'none', 
          scrollbarWidth: 'none',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Duplicate the items to create a seamless loop effect */}
        {[...clientsData, ...clientsData].map((client, index) => (
          <div 
            key={`${client.id}-${index}`} 
            className="shrink-0 h-16 sm:h-16 md:h-20 px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg shadow-sm flex items-center justify-center transition duration-300 hover:shadow-md group border border-gray-100"
          >
            <a 
              href={client.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={client.name}
              className="h-full flex items-center"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-full w-auto object-contain max-w-[160px] sm:max-w-[180px] transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/200x100/ffffff/c41e1e?text=${client.name.replace(/\s+/g, '+')}`;
                }}
              />
            </a>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <p className="text-sm text-gray-500 italic">
          Peste 2000+ de clienți au ales serviciile noastre în ultimii 30 de ani
        </p>
      </div>
    </section>
  );
};

export default ClientsCarousel;
