
import { Navigation } from 'lucide-react';

const LocationMap = () => {
  // Static map image URL - using a placeholder service
  const staticMapImageUrl = "https://placehold.co/1200x400/e0e0e0/c41e1e?text=Vulturul+Electric+Location";

  return (
    <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
      <a 
        href="https://www.google.com/maps/place/Vulturul+Electric+-+AUTO+SERVICE/@44.9460418,23.1382941,17z/data=!3m1!4b1!4m6!3m5!1s0x475272722a35768d:0x30dab34d9c1b536e!8m2!3d44.9460418!4d23.1404828!16s%2Fg%2F11h462090p?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img 
          src={staticMapImageUrl} 
          alt="Locație Vulturul Electric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="bg-white/90 text-vultur-red px-6 py-3 rounded-lg font-medium flex items-center">
            <Navigation className="h-5 w-5 mr-2" />
            Vezi locația pe Google Maps
          </span>
        </div>
      </a>
    </div>
  );
};

export default LocationMap;
