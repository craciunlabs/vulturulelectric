
import React from 'react';
import { Check } from 'lucide-react';

const ServiceTypesList: React.FC = () => {
  return (
    <div className="flex flex-col items-start text-left max-w-2xl mx-auto mt-6 space-y-2">
      <div className="flex items-center">
        <Check className="h-5 w-5 text-vultur-red mr-2" />
        <span>Autoturisme</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-vultur-red mr-2" />
        <span>Autoutilitare</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-vultur-red mr-2" />
        <span>Încălzire staționară, Aer condiționat - WEBASTO</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-vultur-red mr-2" />
        <span>Autotractoare</span>
      </div>
      <div className="flex items-center">
        <Check className="h-5 w-5 text-vultur-red mr-2" />
        <span>Efectuăm reparații la autocamioane</span>
      </div>
    </div>
  );
};

export default ServiceTypesList;
