
import { Badge } from "./ui/badge";

interface PartnerBadgeProps {
  name: string;
  logo: string;
  label: string;
}

const PartnerBadge = ({ name, logo, label }: PartnerBadgeProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center justify-center h-full">
    <img 
      src={logo} 
      alt={`${name} logo`} 
      className="h-12 md:h-16 mb-2 object-contain" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://placehold.co/200x80/ffffff/c41e1e?text=${name.replace(/\s+/g, '+')}`;
      }}
    />
    <Badge variant="outline" className="bg-gray-50 font-semibold text-vultur-dark">
      {label}
    </Badge>
  </div>
);

const AuthorizedPartnerSection = () => {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-vultur-dark">Partener Autorizat</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          <PartnerBadge 
            name="Webasto"
            logo="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png"
            label="Webasto Service"
          />
          <PartnerBadge 
            name="Eberspächer"
            logo="https://www.eberspaecher.com/typo3conf/ext/eberspaecher/Resources/Public/Images/logo.svg"
            label="Eberspächer Partner"
          />
          <PartnerBadge 
            name="Bosch"
            logo="https://logodownload.org/wp-content/uploads/2014/04/bosch-logo-1-1.png"
            label="Bosch Service"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorizedPartnerSection;
