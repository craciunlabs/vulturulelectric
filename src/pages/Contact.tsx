
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // On page load, scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-vultur-dark text-white pt-32 pb-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
                <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Contact</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactează-ne
              </h1>
              <p className="text-gray-300 max-w-2xl">
                Suntem aici pentru a vă ajuta. Contactați-ne pentru programări sau informații suplimentare despre serviciile noastre.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informații de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-gray-600">+40 721 407 727</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">contact@vulturulelectric.ro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresă</h3>
                      <p className="text-gray-600">DF 79, Nr. 226, Sat Vad, Jud. Gorj, Romania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vultur-red/10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-vultur-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Program</h3>
                      <p className="text-gray-600">
                        Luni - Vineri: 09<sup>00</sup> - 18<sup>00</sup><br />
                        Sâmbătă - Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Urmărește-ne</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" aria-label="Facebook" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a href="mailto:contact@vulturulelectric.ro" aria-label="Email" className="bg-vultur-gray hover:bg-vultur-red transition-colors p-2 rounded-full text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-1">Nume</label>
                        <input
                          type="text"
                          id="nume"
                          name="nume"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
                      <input
                        type="text"
                        id="subiect"
                        name="subiect"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
                      <textarea
                        id="mesaj"
                        name="mesaj"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
                    >
                      Trimite mesajul
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-8">
          <div className="container">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88919.73493381016!2d23.111806430029467!3d45.03268337107612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474e12d909b71761%3A0x44c2ddac3ecbe8b2!2sSat%20Vad%2C%20Rom%C3%A2nia!5e0!3m2!1sro!2s!4v1684322248975!5m2!1sro!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație Vulturul Electric"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
