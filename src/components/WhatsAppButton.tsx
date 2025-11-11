import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/21620452570"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 whatsapp-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
};
