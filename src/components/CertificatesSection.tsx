
import React, { useState } from 'react';
import { FileText, ExternalLink, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

interface Certificate {
  id: number;
  logo: string;
  title: string;
  description?: string[];
  viewUrl: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    logo: "https://www.eberspaecher.com/typo3conf/ext/eberspaecher_distribution/Resources/Public/Images/logo_eberspaecher.svg",
    title: "Noțiuni de bază în montarea AERO- și hidrotermetor Eberspaecher",
    viewUrl: "#"
  },
  {
    id: 2,
    logo: "https://www.wabco-customercentre.com/images/wabcoWeb.png",
    title: "Sistem de frânare controlat electric (EBS)",
    description: [
      "Suspensie pneumatică controlată electronic (ECAS)",
      "Comandă electronică a ușilor (ETS/MTS)",
      "Sistem electronic de climatizare (ATC)"
    ],
    viewUrl: "#"
  },
  {
    id: 3,
    logo: "https://www.wabco-customercentre.com/images/wabcoWeb.png",
    title: "Ssteme de frânare EBS C, EBS D",
    description: ["Sisteme ECAS pentru remorci"],
    viewUrl: "#"
  },
  {
    id: 4,
    logo: "https://www.wabco-customercentre.com/images/wabcoWeb.png",
    title: "Sistemul EBS-E pentru remorci",
    viewUrl: "#"
  },
  {
    id: 5,
    logo: "https://www.wabco-customercentre.com/images/wabcoWeb.png",
    title: "Frânarea cu aer comprimat",
    description: ["Sisteme ABS"],
    viewUrl: "#"
  },
  {
    id: 6,
    logo: "https://www.webasto-comfort.com/fileadmin/_processed_/b/e/csm_Webasto_logo_small_a57a0a4a80.png",
    title: "Prezentare gama de încălzitoare",
    description: [
      "Prezentare gama de încălzitoare pe aer - AirTop 2000ST, AirTop EVO 3900/5500",
      "Prezentare gama de încălzitoare pe apa - Thermo 90ST, Thermo 300",
      "Prescripții de instalare, diagnoză și repararea încălzitoarelor pe aer și apă",
      "Prezentarea încălzitorului pe apă Thermo Top EVO",
      "Prescripții de instalare și diagnoză încălzitoarelor pe apa Thermo Top EVO"
    ],
    viewUrl: "#"
  },
  {
    id: 7,
    logo: "https://via.placeholder.com/150x50/ffffff/333333?text=Mecanic+Auto",
    title: "Mecanic Auto",
    viewUrl: "#"
  },
  {
    id: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png",
    title: "Electrician Electronist Auto",
    viewUrl: "#"
  },
  {
    id: 9,
    logo: "https://via.placeholder.com/150x50/ffffff/333333?text=Euro+Cars",
    title: "Personal Operator pentru lucrul la echipamente de climatizare auto funcționând cu anumite gaze fluorurate Categoria I",
    viewUrl: "#"
  }
];

const CertificatesSection = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-vultur-red">CURSURI / CERTIFICĂRI</h2>
          <Separator className="max-w-md mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suntem service autorizat pentru:
          </p>
          
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
              <span>Încălzire staționară, Aer condiționat, Reactor staționar - WEBASTO</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-vultur-red mr-2" />
              <span>Autotractoare</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-vultur-red mr-2" />
              <span>Efectuăm reparații la autosamioane</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-36">Logo</TableHead>
                <TableHead>Certificare</TableHead>
                <TableHead className="text-right w-36">Acțiune</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="align-middle py-4">
                    <img 
                      src={cert.logo} 
                      alt={cert.title} 
                      className="h-10 max-w-[120px] object-contain" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/120x40/c41e1e/ffffff?text=Certificat';
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      {cert.description && cert.description.length > 0 && (
                        <ul className="list-disc ml-5 mt-1 text-sm text-gray-600">
                          {cert.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      className="bg-vultur-red text-white hover:bg-red-700"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Vizualizare certificat
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <Dialog 
        open={selectedCertificate !== null} 
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Certificat: {selectedCertificate?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-center mb-4">
              <img
                src={selectedCertificate?.logo}
                alt={selectedCertificate?.title}
                className="h-16 object-contain mx-auto mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/200x80/c41e1e/ffffff?text=Certificat';
                }}
              />
              <h3 className="text-xl font-semibold">{selectedCertificate?.title}</h3>
            </div>
            
            <div className="w-full p-6 bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p>În acest moment certificatul este în proces de încărcare.</p>
                <p className="text-sm text-gray-500 mt-2">Vă rugăm să ne contactați pentru mai multe detalii.</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Button onClick={() => setSelectedCertificate(null)}>
                Închide
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
