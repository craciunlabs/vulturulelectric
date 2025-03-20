
interface MetricsBoxProps {
  icon?: string;
  value: string;
  label: string;
}

const MetricsBox = ({ icon, value, label }: MetricsBoxProps) => (
  <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="text-vultur-red font-bold text-xl md:text-2xl">{value}</div>
    <div className="text-gray-800 text-sm">{label}</div>
  </div>
);

export default MetricsBox;
