
import { useState } from 'react';
import { cn } from '@/lib/utils';

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

export default ImageLoader;
