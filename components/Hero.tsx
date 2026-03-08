'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://snowfruit.com.br/wp-content/uploads/2021/08/Quais_s%C3%A3o_os_melhores_acompanhamentos_para_a%C3%A7ai.png"
          alt="Açaí e Gelatos"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#6b1471]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-8 md:mt-0">
        {/* Top badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-6 md:mb-8"
        >
          <Leaf size={14} className="text-[#00a859]" />
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#faf8fb] uppercase">
            Espaço Açaí & Gelatos
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-6 drop-shadow-lg"
        >
          O seu açaí <br className="hidden sm:block" />
          <span className="italic text-[#00a859] font-medium">perfeito</span> do dia.
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-[#faf8fb]/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed drop-shadow-md px-2"
        >
          Explore nosso catálogo, escolha seus favoritos e faça seu pedido de
          forma rápida e prática diretamente pelo WhatsApp.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto justify-center"
        >
          <button
            onClick={() => document.dispatchEvent(new CustomEvent('open-acai-builder'))}
            className="inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#d9531e] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold tracking-wide transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#f26522]/30 active:scale-95 text-sm md:text-base w-full sm:w-auto"
          >
            Montar meu Açaí
          </button>
          <Link
            href="#catalogo"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold tracking-wide transition-all transform hover:scale-105 hover:shadow-xl active:scale-95 text-sm md:text-base w-full sm:w-auto"
          >
            Ver Cardápio
          </Link>
          <a
            href="https://wa.me/5598985080705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold tracking-wide transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#00a859]/30 active:scale-95 text-sm md:text-base w-full sm:w-auto"
          >
            WhatsApp Direto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
