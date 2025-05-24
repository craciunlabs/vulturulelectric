
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Table, TableHeader, TableBody, TableRow, TableHead } from '@/components/ui/table';
import { useLanguage } from '@/contexts/LanguageContext';

// Import our components
import CertificateDialog from './certificates/CertificateDialog';
import CertificateRow from './certificates/CertificateRow';
import CertificateMobileCard from './certificates/CertificateMobileCard';
import ServiceTypesList from './certificates/ServiceTypesList';
import { certificates } from './certificates/certificates-data';
import { Certificate } from './certificates/types';

const CertificatesSection = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  return (
    <section className="py-16 bg-gray-50" id="certificari">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-vultur-red">CURSURI / CERTIFICĂRI</h2>
          <Separator className="max-w-md mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suntem service autorizat pentru:
          </p>
          
          <ServiceTypesList />
        </div>
        
        {/* Desktop Table View - hidden on mobile */}
        <div className="mt-10 hidden md:block">
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
                <CertificateRow 
                  key={cert.id} 
                  certificate={cert} 
                  onSelect={setSelectedCertificate} 
                />
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View - visible only on mobile */}
        <div className="mt-10 md:hidden space-y-4">
          {certificates.map((cert) => (
            <CertificateMobileCard 
              key={cert.id} 
              certificate={cert} 
              onSelect={setSelectedCertificate} 
            />
          ))}
        </div>
      </div>
      
      <CertificateDialog 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default CertificatesSection;
