
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // On page load, scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-32">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-9xl font-bold text-vultur-red mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-8">Pagina nu a fost găsită</p>
          <p className="text-gray-600 mb-8">Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
          >
            Înapoi la pagina principală
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
