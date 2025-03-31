
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin, Clock, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vultur-dark text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-vultur-red rounded-md flex items-center justify-center mr-3">
                  <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-xl font-bold">
                  <span>Vulturul</span>
                  <span className="block">Electric</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {t.footerDesc}
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
            <h3 className="text-lg font-semibold mb-4">{t.contactInfo}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <span>+40 721 407 727</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-vultur-red" />
                <div dangerouslySetInnerHTML={{ __html: t.schedule }}></div>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-vultur-red transition-colors">{t.home}</Link></li>
              <li><Link to="/despre-noi" className="hover:text-vultur-red transition-colors">{t.about}</Link></li>
              <li><Link to="/servicii-oferite" className="hover:text-vultur-red transition-colors">{t.services}</Link></li>
              <li><Link to="/magazin-piese-auto" className="hover:text-vultur-red transition-colors">{t.shop}</Link></li>
              <li><Link to="/galerie" className="hover:text-vultur-red transition-colors">{t.gallery}</Link></li>
              <li><Link to="/clienti" className="hover:text-vultur-red transition-colors">{t.clients}</Link></li>
              <li><Link to="/contact" className="hover:text-vultur-red transition-colors">{t.contact}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-6 border-t border-gray-800 mt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {currentYear} Vulturul Electric. {t.allRights}
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/conditii-utilizare" className="hover:text-white transition-colors">{t.termsOfUse}</Link>
            <Link to="/politica-de-confidentialitate" className="hover:text-white transition-colors">{t.privacyPolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
