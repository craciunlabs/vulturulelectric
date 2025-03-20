
import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  showSearch: boolean;
}

const SearchBar = ({ showSearch }: SearchBarProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={cn(
      "overflow-hidden transition-all duration-300 bg-gray-50",
      showSearch ? "max-h-16 py-2 border-b border-gray-200" : "max-h-0"
    )}>
      <div className="container">
        <div className="relative">
          <input 
            type="text"
            placeholder={t.search}
            className="w-full p-2 pr-10 border border-gray-300 rounded-md" 
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
