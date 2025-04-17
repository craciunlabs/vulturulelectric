
import React from 'react';
import { FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Certificate } from './types';

interface CertificateDialogProps {
  certificate: Certificate | null;
  onClose: () => void;
}

const CertificateDialog: React.FC<CertificateDialogProps> = ({ 
  certificate, 
  onClose 
}) => {
  if (!certificate) return null;
  
  return (
    <Dialog 
      open={certificate !== null} 
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Certificat: {certificate.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-center mb-4">
            <img
              src={certificate.logo}
              alt={certificate.title}
              className="h-16 object-contain mx-auto mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/200x80/c41e1e/ffffff?text=Certificat';
              }}
            />
            <h3 className="text-xl font-semibold">{certificate.title}</h3>
          </div>
          
          <div className="w-full p-6 bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p>În acest moment certificatul este în proces de încărcare.</p>
              <p className="text-sm text-gray-500 mt-2">Vă rugăm să ne contactați pentru mai multe detalii.</p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button onClick={onClose}>
              Închide
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateDialog;
