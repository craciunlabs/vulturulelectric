import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
    
    // Services Section
    serviceTitle: 'SERVICE',
    serviceHighlight: 'AutoELECTRICĂ',
    serviceDesc: 'Pe lângă toate aceste dispunem de propriul magazin de piese auto.',
    serviceCars: 'Autoturisme',
    serviceCarsDesc: 'Servicii complete de diagnoză și reparații electrice pentru autoturisme de toate mărcile.',
    serviceVans: 'Autoutilitare',
    serviceVansDesc: 'Soluții specializate pentru probleme electrice la autoutilitare și vehicule comerciale ușoare.',
    serviceCoaches: 'Autocare',
    serviceCoachesDesc: 'Mentenanță și reparații pentru sistemele electrice complexe ale autocarelor și autobuzelor.',
    serviceTrucks: 'Autocamioane',
    serviceTrucksDesc: 'Diagnosticare și remediere probleme electrice pentru flote de camioane și vehicule grele.',
    serviceOffers: 'Servicii-ul VULTURUL ELECTRIC vă pune la dispoziție:',
    serviceOffer1: 'Service autoturisme, autoutilitare, autocamioane, autocare, remorci și semiremorci',
    serviceOffer2: 'Service instalații electrice (reparații electromotoare, alternatoare, recondiționări instalații electrice, remedieri scurt la instalația electrică, montaj alarme, închideri centralizate, etc.)',
    serviceOffer3: 'Diagnoză / Computerizată a sistemelor electrico-electronice și pneumatice pentru toate mărcile de autoturisme, autocamioane, autocare.',
    serviceOffer4: 'Diagnoză cu sistem de citire memorii-chei',
    serviceOffer5: 'Diagnoză / sistem frânare semiremorci ABS-EBS',
    authorizedPartner: 'Partener autorizat',
    
    // Testimonials section
    testimonialsTitle: 'Ce spun Clienții',
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
    privacyPolicy: 'Politica de confidențialitate',
    
    // NotFound page
    notFoundTitle: '404',
    notFoundMessage: 'Pagina nu a fost găsită',
    notFoundDesc: 'Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.',
    backToHome: 'Înapoi la pagina principală',
    
    // About page
    aboutUs: 'Despre Noi',
    aboutHeroTitle: 'Cu pasiune și experiență în servicii auto',
    aboutHeroDesc: 'Cu o experiență de peste 15 ani în domeniul auto, Vulturul Electric este zi de zi pregătit să ofere asistență clienților noștri.',
    historyTitle: 'Istoria și misiunea noastră',
    historyDesc1: 'Vulturul Electric a luat ființă din pasiunea pentru automobile și dorința de a oferi servicii de cea mai înaltă calitate în domeniul electric auto.',
    historyDesc2: 'Cu peste 15 ani de experiență în spate, am crescut constant, investind în tehnologie de ultimă generație și în pregătirea echipei noastre.',
    historyDesc3: 'Misiunea noastră este de a oferi servicii rapide, eficiente și de calitate pentru toate tipurile de vehicule, de la autoturisme până la camioane și autocare.',
    teamAlt: 'Echipa noastră',
    values: 'Valorile noastre',
    valuesPrinciples: 'Principiile care ne ghidează',
    valuesDesc: 'Ne mândrim cu valori solide care ne-au ajutat să câștigăm încrederea clienților noștri de-a lungul anilor',
    valueQuality: 'Calitate',
    valueQualityDesc: 'Suntem dedicați calității în tot ceea ce facem. Utilizăm doar piese de calitate și oferim servicii impecabile.',
    valueIntegrity: 'Integritate',
    valueIntegrityDesc: 'Acționăm cu onestitate și transparență în toate interacțiunile cu clienții noștri, construind relații de încredere durabile.',
    valueProfessionalism: 'Profesionalism',
    valueProfessionalismDesc: 'Echipa noastră este formată din profesioniști cu experiență, dedicați excelenței în serviciile auto electrice.',
    statsYears: 'Ani de experiență',
    statsClients: 'Clienți mulțumiți',
    statsProjects: 'Proiecte finalizate',
    statsPartnerships: 'Parteneriate'
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
    
    // Services Section
    serviceTitle: 'AUTO',
    serviceHighlight: 'ELECTRICAL SERVICE',
    serviceDesc: 'In addition to all these, we have our own auto parts store.',
    serviceCars: 'Cars',
    serviceCarsDesc: 'Complete diagnostic and electrical repair services for cars of all makes.',
    serviceVans: 'Vans',
    serviceVansDesc: 'Specialized solutions for electrical problems in vans and light commercial vehicles.',
    serviceCoaches: 'Coaches',
    serviceCoachesDesc: 'Maintenance and repairs for the complex electrical systems of coaches and buses.',
    serviceTrucks: 'Trucks',
    serviceTrucksDesc: 'Diagnosis and remediation of electrical problems for truck fleets and heavy vehicles.',
    serviceOffers: 'VULTURUL ELECTRIC Service offers you:',
    serviceOffer1: 'Service for cars, vans, trucks, coaches, trailers and semi-trailers',
    serviceOffer2: 'Electrical installations service (starter repairs, alternators, electrical installations reconditioning, electrical short circuit repairs, alarm installation, central locking, etc.)',
    serviceOffer3: 'Diagnosis / Computerized diagnosis of electro-electronic and pneumatic systems for all makes of cars, trucks, coaches.',
    serviceOffer4: 'Diagnosis with key memory reading system',
    serviceOffer5: 'Diagnosis / semi-trailer braking system ABS-EBS',
    authorizedPartner: 'Authorized partner',
    
    // Testimonials section
    testimonialsTitle: 'What Clients Say',
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
    privacyPolicy: 'Privacy Policy',
    
    // NotFound page
    notFoundTitle: '404',
    notFoundMessage: 'Page Not Found',
    notFoundDesc: 'Sorry, the page you are looking for does not exist or has been moved.',
    backToHome: 'Back to homepage',
    
    // About page
    aboutUs: 'About Us',
    aboutHeroTitle: 'With passion and experience in automotive services',
    aboutHeroDesc: 'With over 15 years of experience in the automotive field, Vulturul Electric is ready every day to assist our clients.',
    historyTitle: 'Our History & Mission',
    historyDesc1: 'Vulturul Electric was born from the passion for automobiles and the desire to offer the highest quality services in the automotive electrical field.',
    historyDesc2: 'With over 15 years of experience behind us, we have grown constantly, investing in cutting-edge technology and in training our team.',
    historyDesc3: 'Our mission is to provide fast, efficient, and quality services for all types of vehicles, from cars to trucks and coaches.',
    teamAlt: 'Our Team',
    values: 'Our Values',
    valuesPrinciples: 'The principles that guide us',
    valuesDesc: 'We take pride in solid values that have helped us earn our clients\' trust over the years',
    valueQuality: 'Quality',
    valueQualityDesc: 'We are dedicated to quality in everything we do. We use only quality parts and offer impeccable services.',
    valueIntegrity: 'Integrity',
    valueIntegrityDesc: 'We act with honesty and transparency in all interactions with our clients, building lasting relationships of trust.',
    valueProfessionalism: 'Professionalism',
    valueProfessionalismDesc: 'Our team consists of experienced professionals, dedicated to excellence in automotive electrical services.',
    statsYears: 'Years of experience',
    statsClients: 'Happy clients',
    statsProjects: 'Completed projects',
    statsPartnerships: 'Partnerships'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get stored language preference from localStorage
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage === 'ro' || storedLanguage === 'en') {
        return storedLanguage;
      }
    }
    return 'ro'; // Default language
  };
  
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  
  // Get translations for current language
  const t = translations[language];
  
  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    // Store language preference
    localStorage.setItem('language', language);
  }, [language]);
  
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
