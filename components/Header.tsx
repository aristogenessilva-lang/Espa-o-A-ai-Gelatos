'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Convert to São Paulo timezone
      const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
      const day = spTime.getDay(); // 0 = Sunday, 1 = Monday, ...
      const hours = spTime.getHours();
      const minutes = spTime.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      // Segunda (1) a Domingo (0): 16:30 (990) às 22:00 (1320)
      if (timeInMinutes >= 990 && timeInMinutes < 1320) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'CATÁLOGO', href: '#catalogo' },
    { name: 'LOCALIZAÇÃO', href: '#localizacao' },
    { name: 'SOBRE NÓS', href: '#sobre-nos' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#faf8fb]/95 backdrop-blur-md shadow-md py-2 sm:py-3' : 'bg-[#faf8fb] py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity min-w-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-wider text-[#6b1471] hover:text-[#f26522] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/espacoacaiegelatos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#6b1471] hover:text-[#f26522] transition-colors"
          >
            <Instagram size={18} />
            INSTAGRAM
          </a>
          {/* Status Indicator */}
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${isOpen ? 'bg-green-100 text-green-800 border-green-200' : 'bg-red-100 text-red-800 border-red-200'}`}>
            <Clock size={14} />
            {isOpen ? 'ABERTO' : 'FECHADO'}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-3 md:hidden shrink-0">
           <div className={`flex items-center gap-1 px-1.5 py-1 sm:px-2 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider border ${isOpen ? 'bg-green-100 text-green-800 border-green-200' : 'bg-red-100 text-red-800 border-red-200'}`}>
            <Clock size={10} className="sm:w-3 sm:h-3" />
            {isOpen ? 'ABERTO' : 'FECHADO'}
          </div>
          <button
            className="text-[#6b1471] p-0.5 sm:p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold tracking-wider text-[#6b1471] hover:text-[#f26522] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full h-px bg-gray-100" />
            <a
              href="https://www.instagram.com/espacoacaiegelatos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base font-bold tracking-wider text-[#6b1471] hover:text-[#f26522] transition-colors"
            >
              <Instagram size={20} />
              INSTAGRAM
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
