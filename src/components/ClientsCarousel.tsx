
import { useEffect, useRef, useState } from 'react';

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
  const [animationId, setAnimationId] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const startScrolling = () => {
    if (!scrollRef.current || isPaused) return;
    
    const scrollContainer = scrollRef.current;
    // Reset the animation if we've reached the end
    if (scrollPosition >= scrollContainer.scrollWidth / 2) {
      setScrollPosition(0);
      scrollContainer.scrollLeft = 0;
    }
    
    const speed = 0.5; // Restored speed to a more reasonable value
    const step = 1;
    
    const scroll = () => {
      if (!scrollContainer || isPaused) return;
      
      // Update our position state
      const newPosition = scrollPosition + step;
      setScrollPosition(newPosition);
      
      // Apply the scroll
      scrollContainer.scrollLeft = newPosition * speed;
      
      const id = requestAnimationFrame(scroll);
      setAnimationId(id);
    };
    
    const id = requestAnimationFrame(scroll);
    setAnimationId(id);
  };
  
  const stopScrolling = () => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
  };
  
  const handleMouseEnter = () => {
    // Store current scroll position when mouse enters
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft / 0.5); // Adjust by the speed factor
    }
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  useEffect(() => {
    if (isPaused) {
      stopScrolling();
    } else {
      startScrolling();
    }
    
    return () => {
      stopScrolling();
    };
  }, [isPaused, scrollPosition]);
  
  useEffect(() => {
    startScrolling();
    
    return () => {
      stopScrolling();
    };
  }, []);
  
  return (
    <section className="py-8 bg-gray-50 overflow-hidden relative">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Parteneri de Încredere</h2>
          <p className="text-gray-600">Soluții electrice auto pentru companii de top din România</p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex items-center space-x-12 overflow-x-auto whitespace-nowrap py-6 px-8 scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...clientsData, ...clientsData].map((client, index) => (
          <div 
            key={`${client.id}-${index}`} 
            className="shrink-0 h-16 md:h-20 px-6 py-3 bg-white rounded-lg shadow-sm flex items-center justify-center transition duration-300 hover:shadow-md group"
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
                className="h-full w-auto object-contain max-w-[150px] transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/200x100/ffffff/c41e1e?text=${client.name.replace(/\s+/g, '+')}`;
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsCarousel;
