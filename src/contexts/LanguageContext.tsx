
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Record<string, string>;
}

// Create translations object with all the necessary text for the entire website
const translations = {
  ro: {
    // Header translations
    home: 'Acasa',
    about: 'Despre noi',
    services: 'Servicii oferite',
    shop: 'Magazin Piese Auto',
    gallery: 'Galerie',
    clients: 'Clienți',
    contact: 'Contact',
    schedule: 'Avem deschis: Luni - Vineri, 09<sup>00</sup> - 18<sup>00</sup>',
    callUs: 'Sunați ne acum: +40 721 407 727',
    address: 'DE 79, Nr. 229, Sat Vârt, 215400, Gorj, Romania',
    search: 'Căutare...',
    
    // Hero section
    heroTitle1: 'REPARAȚII',
    heroTitle2: 'ELECTROMOTOARE',
    heroTitle3: 'ALTERNATOARE',
    heroDesc: 'RECONDIȚIONĂRI INSTALAȚII ELECTRICE, MONTAJ ALARME, ÎNCHIDERI CENTRALIZATE, CASETOFOANE AUTO, REMEDIERI SCURT LA INSTALAȚIA ELECTRICĂ',
    contactUs: 'Contactează-ne acum',
    seeServices: 'Vezi serviciile',
    
    // Stats
    yearsExperience: 'ani de experiență',
    happyClients: 'clienți fericiți',
    webastoInstall: 'instalări și service',
    
    // Testimonials section
    testimonialsTitle: 'Clienții Noștri Mulțumiți',
    testimonialsDesc: 'Descoperă experiențele clienților noștri cu serviciile Vulturul Electric. Satisfacția lor este prioritatea noastră!',
    writeReview: 'Doriți să scrieți o recenzie?',
    realExperiences: 'Aceste testimoniale reprezintă experiențele reale ale clienților noștri.',
    
    // Map section
    location: 'Locație',
    findUs: 'Unde ne găsești',
    findUsDesc: 'Suntem situați pe DE 79, Nr. 229, în localitatea Vârt, Gorj. Te așteptăm să ne vizitezi!',
    directions: 'Indicații rutiere',
    workSchedule: 'Program de lucru',
    workHours: 'Luni - Vineri: 09<sup>00</sup> - 18<sup>00</sup> | Sâmbătă - Duminică: Închis',
    
    // Footer
    footerDesc: 'Cu o experiență de peste 15 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri.',
    contactInfo: 'Informații de contact',
    quickLinks: 'Link-uri rapide',
    allRights: 'Toate drepturile rezervate.',
    termsOfUse: 'Condiții utilizare',
    privacyPolicy: 'Politica de confidențialitate'
  },
  en: {
    // Header translations
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    shop: 'Auto Parts Shop',
    gallery: 'Gallery',
    clients: 'Clients',
    contact: 'Contact',
    schedule: 'We are open: Monday - Friday, 09<sup>00</sup> - 18<sup>00</sup>',
    callUs: 'Call us now: +40 721 407 727',
    address: 'DE 79, Nr. 229, Sat Vârt, 215400, Gorj, Romania',
    search: 'Search...',
    
    // Hero section
    heroTitle1: 'REPAIRS',
    heroTitle2: 'STARTERS',
    heroTitle3: 'ALTERNATORS',
    heroDesc: 'ELECTRICAL INSTALLATIONS RECONDITIONING, ALARMS INSTALLATION, CENTRAL LOCKING, CAR STEREOS, ELECTRICAL SHORT CIRCUIT REPAIRS',
    contactUs: 'Contact us now',
    seeServices: 'See our services',
    
    // Stats
    yearsExperience: 'years of experience',
    happyClients: 'happy clients',
    webastoInstall: 'installations and service',
    
    // Testimonials section
    testimonialsTitle: 'Our Happy Clients',
    testimonialsDesc: 'Discover our clients\' experiences with Vulturul Electric services. Their satisfaction is our priority!',
    writeReview: 'Would you like to write a review?',
    realExperiences: 'These testimonials represent real experiences of our clients.',
    
    // Map section
    location: 'Location',
    findUs: 'Where to find us',
    findUsDesc: 'We are located on DE 79, Nr. 229, in Vârt, Gorj. We are waiting for you to visit us!',
    directions: 'Get directions',
    workSchedule: 'Working hours',
    workHours: 'Monday - Friday: 09<sup>00</sup> - 18<sup>00</sup> | Saturday - Sunday: Closed',
    
    // Footer
    footerDesc: 'With over 15 years of experience in the automotive field, Vulturul Electric is ready every day to assist our clients.',
    contactInfo: 'Contact Information',
    quickLinks: 'Quick Links',
    allRights: 'All rights reserved.',
    termsOfUse: 'Terms of Use',
    privacyPolicy: 'Privacy Policy'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');
  
  // Get translations for current language
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
