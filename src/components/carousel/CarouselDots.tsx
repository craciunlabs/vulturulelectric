
import { CarouselApi } from "@/components/ui/carousel";

interface CarouselDotsProps {
  items: Array<any>;
  currentIndex: number;
  api: CarouselApi | null;
}

const CarouselDots = ({ items, currentIndex, api }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center mt-2 gap-1.5">
      {items.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
            currentIndex === index ? "bg-vultur-red scale-125" : "bg-gray-300"
          }`}
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
