
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TableRow, TableCell } from '@/components/ui/table';
import { Certificate } from './types';

interface CertificateRowProps {
  certificate: Certificate;
  onSelect: (cert: Certificate) => void;
}

const CertificateRow: React.FC<CertificateRowProps> = ({ 
  certificate, 
  onSelect 
}) => {
  return (
    <TableRow>
      <TableCell className="align-middle py-4">
        <img 
          src={certificate.logo} 
          alt={certificate.title} 
          className="h-10 max-w-[120px] object-contain" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/120x40/c41e1e/ffffff?text=Certificat';
          }}
        />
      </TableCell>
      <TableCell>
        <div>
          <p className="font-medium">{certificate.title}</p>
          {certificate.description && certificate.description.length > 0 && (
            <ul className="list-disc ml-5 mt-1 text-sm text-gray-600">
              {certificate.description.map((desc, i) => (
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
          onClick={() => onSelect(certificate)}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Vizualizare certificat
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CertificateRow;
