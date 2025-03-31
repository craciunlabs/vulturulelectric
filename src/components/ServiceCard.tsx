
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
      "service-card bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group",
      className
    )}>
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-red-100 text-vultur-red mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:bg-vultur-red group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-vultur-red">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">
        {isMobile ? description.split(' ').slice(0, 10).join(' ') + (description.split(' ').length > 10 ? '...' : '') : description}
      </p>
    </div>
  );
};

export default ServiceCard;
