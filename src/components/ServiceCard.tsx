
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "service-card bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group",
      className
    )}>
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-vultur-red/10 text-vultur-red mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-vultur-red group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-vultur-red">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">
        {isMobile ? description.split(' ').slice(0, 12).join(' ') + (description.split(' ').length > 12 ? '...' : '') : description}
      </p>
    </div>
  );
};

export default ServiceCard;
