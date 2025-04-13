
import { Zap, Car, Wrench, Battery, Cpu, Truck, Thermometer } from 'lucide-react';
import { ReactNode } from 'react';

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}

export const sliderItems: CarouselItem[] = [
  {
    id: 1,
    title: "REPARAȚII ELECTROMOTOARE",
    description: "Servicii complete de reparații și recondiționări pentru orice tip de electromotor auto",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 2,
    title: "ALTERNATOARE",
    description: "Diagnosticare și reparații alternatoare pentru toate tipurile de autovehicule",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 3,
    title: "INSTALAȚII ELECTRICE",
    description: "Recondiționări complete ale instalațiilor electrice și remedieri scurt circuite",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 4,
    title: "SISTEME AUTO",
    description: "to be added",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Car className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 5,
    title: "SERVICE PENTRU REMORCI ȘI SEMIREMORCI",
    description: "Diagnosticare și reparare sisteme electrice și suspensii pneumatice pentru remorci",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  },
  {
    id: 6,
    title: "SISTEME DE ÎNCĂLZIRE ȘI CLIMATIZARE",
    description: "Instalare și service pentru sisteme Webasto de încălzire și aer condiționat pentru autovehicule",
    image: "https://images.unsplash.com/photo-1561118005-1a78be93c560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80",
    icon: <Thermometer className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
  }
];
