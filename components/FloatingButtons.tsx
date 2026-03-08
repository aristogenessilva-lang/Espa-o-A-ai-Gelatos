import { Instagram, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://www.instagram.com/espacoacaiegelatos/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Instagram"
      >
        <Instagram size={28} />
      </a>
      <a
        href="https://wa.me/5598985080705"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
