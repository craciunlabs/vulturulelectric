
import { Zap } from 'lucide-react';

interface BrandLogoProps {
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

const BrandLogo = ({ variant = 'default', size = 'md', showText = false }: BrandLogoProps) => {
  const logoSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl'
  };
  
  const textColors = {
    default: 'text-white',
    white: 'text-white',
    dark: 'text-vultur-dark'
  };
  
  const bgColors = {
    default: 'bg-transparent',
    white: 'bg-transparent',
    dark: 'bg-transparent'
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${logoSizes[size]} ${bgColors[variant]} flex items-center justify-center relative overflow-hidden`}>
        <img 
          src="/lovable-uploads/b446f6d8-2e22-41a8-8b00-dfe21e94d6a9.png" 
          alt="Vulturul Electric Logo" 
          className="w-full h-full object-contain" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const container = target.parentElement;
            if (container) {
              const zap = document.createElement('div');
              zap.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>';
              container.appendChild(zap.firstChild!);
            }
          }}
        />
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
