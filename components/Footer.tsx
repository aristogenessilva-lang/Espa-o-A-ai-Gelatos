import { Instagram, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#250526] text-[#faf8fb] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10 bg-white px-8 py-4 rounded-3xl shadow-lg">
          <Logo />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://www.instagram.com/espacoacaiegelatos/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#faf8fb]/10 flex items-center justify-center hover:bg-[#6b1471] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/5598985080705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#faf8fb]/10 flex items-center justify-center hover:bg-[#6b1471] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#faf8fb]/50 text-sm font-light">
          © {new Date().getFullYear()} Espaço Açaí & Gelatos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
