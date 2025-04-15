
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before showing the button for better UX
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '40721407727'; // Format without leading '+'
  const message = encodeURIComponent("Hello! I'm interested in learning more about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-24 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3.5 shadow-lg transition-all duration-300",
        "hover:bg-[#1EA952] hover:scale-110 hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
        <span className="sr-only">Chat on WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
