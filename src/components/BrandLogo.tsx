
import { Zap } from 'lucide-react';

interface BrandLogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const BrandLogo = ({ variant = 'default', size = 'md', showText = true }: BrandLogoProps) => {
  const logoSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  const textColors = {
    default: 'text-white',
    white: 'text-white',
    dark: 'text-vultur-dark'
  };
  
  const bgColors = {
    default: 'bg-vultur-red',
    white: 'bg-vultur-red',
    dark: 'bg-vultur-red'
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${logoSizes[size]} ${bgColors[variant]} rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden`}>
        <Zap className="h-8 w-8 text-white" />
      </div>
      
      {showText && (
        <div className={`${textSizes[size]} font-bold tracking-wide ${textColors[variant]}`}>
          <span>Vulturul</span>
          <span className="block">Electric</span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
