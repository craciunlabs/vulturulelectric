
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import HeroCarousel from './HeroCarousel';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader = ({ src, alt, className }: ImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "lazy-image transition-opacity duration-500",
        loaded ? "opacity-100 blur-none" : "opacity-60 blur-sm",
        className
      )}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
      }}
    />
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden hero-clip bg-gradient-to-r from-vultur-dark to-vultur-gray pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageLoader
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt="Car engine"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-white animate-fade-down">
            <div className="flex items-center mb-3">
              <div className="h-0.5 w-10 bg-vultur-red mr-3"></div>
              <span className="text-sm uppercase tracking-wider font-medium text-vultur-red">Service Auto Electric Profesionist</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              REPARAȚII<br/>
              <span className="text-gradient">ELECTROMOTOARE</span><br/>
              ALTERNATOARE
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              RECONDIȚIONĂRI INSTALAȚII ELECTRICE, MONTAJ ALARME, ÎNCHIDERI CENTRALIZATE, CASETOFOANE AUTO, REMEDIERI SCURT LA INSTALAȚIA ELECTRICĂ
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
              >
                Contactează-ne acum
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/servicii-oferite" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 transition-colors rounded-lg font-medium text-vultur-dark"
              >
                Vezi serviciile
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-up">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <HeroCarousel />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-vultur-red font-bold text-3xl">30+</div>
              <div className="text-gray-800">ani de experiență</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
