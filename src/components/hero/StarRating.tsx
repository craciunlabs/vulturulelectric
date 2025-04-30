
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.8;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex space-x-1 animate-fade-in">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400 filter drop-shadow-sm" />
      ))}
      {hasHalfStar && (
        <span className="relative">
          <Star className="h-4 w-4 text-gray-300 fill-gray-300" />
          <span className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 filter drop-shadow-sm" />
          </span>
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
