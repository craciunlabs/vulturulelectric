
interface MobileMetricsProps {
  yearsExperience: string;
  clientsCount: string;
  specialFeature: string;
}

const MobileMetrics = ({ yearsExperience, clientsCount, specialFeature }: MobileMetricsProps) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-1.5 animate-fade-up">
      <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
        <div className="text-vultur-red font-bold text-lg">30+</div>
        <div className="text-gray-800 text-xs">{yearsExperience}</div>
      </div>
      <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
        <div className="text-vultur-red font-bold text-lg">2000+</div>
        <div className="text-gray-800 text-xs">{clientsCount}</div>
      </div>
      <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-md text-center">
        <div className="text-vultur-red font-bold text-lg">Webasto</div>
        <div className="text-gray-800 text-xs">{specialFeature}</div>
      </div>
    </div>
  );
};

export default MobileMetrics;
