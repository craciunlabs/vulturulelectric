
import { Award } from "lucide-react";

interface PartnerBadgeProps {
  name: string;
  logo: string;
  fontSize?: string;
}

const PartnerBadge = ({ name, logo, fontSize = 'text-xs md:text-sm' }: PartnerBadgeProps) => (
  <div className="bg-white rounded shadow-sm p-3 text-center flex flex-col items-center justify-center h-full">
    <img 
      src={logo} 
      alt={`${name} logo`} 
      className={`h-8 md:h-10 w-auto object-contain ${fontSize}`} 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://placehold.co/200x80/ffffff/c41e1e?text=${name.replace(/\s+/g, '+')}`;
      }}
    />
  </div>
);

const AuthorizedPartnerSection = () => {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-vultur-red to-red-800 text-white rounded-lg shadow-md p-4 flex items-center gap-3 mb-2 md:mb-0">
            <Award className="h-5 w-5 md:h-6 md:w-6" />
            <div className="flex flex-col">
              <span className="font-medium">Partener</span>
              <span className="font-bold">Autorizat</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <PartnerBadge 
              name="Webasto"
              logo="https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png"
            />
            <PartnerBadge 
              name="Eberspächer"
              logo="https://www.eberspaecher.com/typo3conf/ext/eberspaecher/Resources/Public/Images/logo.svg"
            />
            <PartnerBadge 
              name="Knorr"
              logo="https://www.knorr-bremse.com/remote/media/public/global/design/images/knorr-bremse-logo.png"
              fontSize="text-[0.5rem] md:text-[0.6rem]"
            />
            <PartnerBadge 
              name="Thermo King"
              logo="https://www.thermoking.com/content/dam/thermoking/images/tk-logo.jpg"
            />
            <PartnerBadge 
              name="Carrier"
              logo="https://www.carrier.com/carrier/en/worldwide/images/carrier-logo.png"
              fontSize="text-[0.5rem] md:text-[0.6rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorizedPartnerSection;
