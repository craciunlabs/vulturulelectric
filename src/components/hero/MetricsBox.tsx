
import { cn } from "@/lib/utils";

interface MetricsBoxProps {
  icon?: string;
  value: string;
  label: string;
  className?: string;
}

const MetricsBox = ({ icon, value, label, className }: MetricsBoxProps) => (
  <div className={cn(
    "bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 metrics-box",
    className
  )}>
    <div className="text-vultur-red font-bold text-xl md:text-2xl">{value}</div>
    <div className="text-gray-800 text-sm md:text-base">{label}</div>
  </div>
);

export default MetricsBox;
