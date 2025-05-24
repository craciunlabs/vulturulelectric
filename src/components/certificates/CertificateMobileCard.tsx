
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Certificate } from './types';

interface CertificateMobileCardProps {
  certificate: Certificate;
  onSelect: (cert: Certificate) => void;
}

const CertificateMobileCard: React.FC<CertificateMobileCardProps> = ({ 
  certificate, 
  onSelect 
}) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-3">
          {/* Logo and Title */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <img 
                src={certificate.logo} 
                alt={certificate.title} 
                className="h-8 w-auto max-w-[80px] object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/80x32/c41e1e/ffffff?text=Cert';
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm leading-tight text-gray-900">
                {certificate.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          {certificate.description && certificate.description.length > 0 && (
            <div className="pl-2">
              <ul className="list-disc ml-4 space-y-1">
                {certificate.description.map((desc, i) => (
                  <li key={i} className="text-xs text-gray-600 leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <Button 
              variant="outline" 
              size="sm"
              className="w-full bg-vultur-red text-white hover:bg-red-700 text-xs"
              onClick={() => onSelect(certificate)}
            >
              <ExternalLink className="h-3 w-3 mr-2" />
              Vizualizare certificat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateMobileCard;
