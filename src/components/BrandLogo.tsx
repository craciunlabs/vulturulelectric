
import { Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface BrandLogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

const BrandLogo = ({ variant = 'default', size = 'md', showText = false }: BrandLogoProps) => {
  const isMobile = useIsMobile();
  
  // Adjust size for mobile
  const adjustedSize = isMobile && size === 'md' ? 'sm' : size;
  
  const logoSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
    lg: 'w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16',
    xl: 'w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24',
    '2xl': 'w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32'
  };
  
  const textSizes = {
    sm: 'text-sm sm:text-base md:text-lg',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl',
    xl: 'text-xl sm:text-2xl md:text-3xl',
    '2xl': 'text-2xl sm:text-3xl md:text-4xl'
  };
  
  const textColors = {
    default: 'text-white',
    white: 'text-white',
    dark: 'text-vultur-dark'
  };
  
  const bgColors = {
    default: 'bg-vultur-red rounded-md',
    white: 'bg-white rounded-md',
    dark: 'bg-vultur-dark rounded-md'
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
      <div className={`${logoSizes[adjustedSize]} ${bgColors[variant]} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center bg-vultur-red">
          <Zap className="w-2/3 h-2/3 text-white" strokeWidth={2.5} />
        </div>
      </div>
      
      {showText && (
        <div className={`${textSizes[adjustedSize]} font-bold tracking-wide ${textColors[variant]}`}>
          <span>Vulturul</span>
          <span className="block">Electric</span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
