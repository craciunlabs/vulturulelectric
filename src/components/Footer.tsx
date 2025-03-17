
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vultur-dark text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/logo-white.png" 
                alt="Vulturul Electric" 
                className="h-16 object-contain mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/240x80/c41e1e/ffffff?text=Vulturul+Electric';
                }}
              />
              <p className="text-gray-300 text-sm">
                Cu o experiență de peste 15 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri.
              </p>
            </div>
            <div className="flex space-x-4 mt-auto">
              <a href="https://facebook.com" aria-label="Facebook" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@vulturulelectric.ro" aria-label="Email" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informații de contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <span>+40 721 407 727</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <span>DF 79, Nr. 226, Sat Vad, Jud. Gorj, Romania</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <div>
                  <div>Luni - Vineri: 09<sup>00</sup> - 18<sup>00</sup></div>
                  <div>Sâmbătă - Duminică: Închis</div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-vultur-red transition-colors">Acasa</Link></li>
              <li><Link to="/despre-noi" className="hover:text-vultur-red transition-colors">Despre noi</Link></li>
              <li><Link to="/servicii-oferite" className="hover:text-vultur-red transition-colors">Servicii oferite</Link></li>
              <li><Link to="/magazin-piese-auto" className="hover:text-vultur-red transition-colors">Magazin Piese Auto</Link></li>
              <li><Link to="/galerie" className="hover:text-vultur-red transition-colors">Galerie</Link></li>
              <li><Link to="/clienti" className="hover:text-vultur-red transition-colors">Clienți</Link></li>
              <li><Link to="/contact" className="hover:text-vultur-red transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-6 border-t border-gray-800 mt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} Vulturul Electric. Toate drepturile rezervate.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/conditii-utilizare" className="hover:text-white transition-colors">Condiții utilizare</Link>
            <Link to="/politica-de-confidentialitate" className="hover:text-white transition-colors">Politica de confidențialitate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
