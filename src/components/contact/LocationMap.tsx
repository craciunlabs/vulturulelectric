
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  // Using a static local placeholder instead of external service
  const staticMapImageUrl = "/placeholder.svg";

  return (
    <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative bg-gray-100">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <MapPin className="h-16 w-16 text-vultur-red mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Vulturul Electric</h3>
        <p className="text-gray-600 mt-1">Strada Tineretului, Nr. 8, Targu Jiu, Romania</p>
        <p className="text-gray-600 mt-1">44.9460418, 23.1404828</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            className="bg-vultur-red hover:bg-vultur-red/90 text-white px-6 py-2 rounded-lg font-medium"
            onClick={() => {
              // Using window.location to ensure it's treated as navigation, not iframe
              if (window.confirm('Doriți să vizitați Google Maps?')) {
                window.open('https://maps.google.com/?q=44.9460418,23.1404828', '_blank', 'noopener,noreferrer');
              }
            }}
          >
            Deschide în Google Maps
          </button>
          <button 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium"
            onClick={() => {
              // Copy coordinates to clipboard
              navigator.clipboard.writeText('44.9460418, 23.1404828');
              alert('Coordonate copiate în clipboard!');
            }}
          >
            Copiază coordonatele
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
