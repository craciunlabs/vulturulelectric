
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewActionButton: React.FC = () => {
  const { t } = useLanguage();
  
  const handleWriteReview = () => {
    window.open('https://g.page/r/CW5TG5xNs9owEBM/review', '_blank');
  };

  return (
    <div className="text-center mt-12 space-y-6">
      <Button 
        onClick={handleWriteReview} 
        variant="outline" 
        className="border-vultur-red text-vultur-red hover:bg-vultur-red hover:text-white transition-colors"
      >
        {t.writeReview}
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      
      <p className="text-gray-500 italic">
        {t.realExperiences}
      </p>
    </div>
  );
};

export default ReviewActionButton;
