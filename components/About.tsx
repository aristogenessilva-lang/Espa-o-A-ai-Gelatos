'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="sobre-nos" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://instagram.fthe9-1.fna.fbcdn.net/v/t51.82787-15/588956513_17846887944613454_7133766468304693980_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc3Njg1NDczNjIyNjk3MTMwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=zg7fcVrxBSgQ7kNvwENETsj&_nc_oc=Adl6ForcWUALWLrrwPy-rZICIcckpCsRoJ9503ogRbC_BnNhKVFX1TLMpOWhw0NPylE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fthe9-1.fna&_nc_gid=UTDWVKU7o7cDjLi7fkUhDA&_nc_ss=8&oh=00_AfyOP0-YaU8QcWVtyH7-FbrnFHrLCTH-m1uAB83nDpf4LQ&oe=69B3874D"
              alt="Espaço Açaí & Gelatos"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6b1471]/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#6b1471] mb-6">
              Nossa História
            </h2>
            <div className="w-20 h-1 bg-[#f26522] mb-10 rounded-full" />

            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                O Espaço Açaí & Gelatos nasceu da paixão por sabores autênticos e
                momentos de alegria. Acreditamos que um bom copo de açaí ou um
                gelato artesanal tem o poder de transformar o dia, conectar pessoas
                e inspirar novas ideias.
              </p>
              <p>
                Trabalhamos apenas com ingredientes selecionados, garantindo
                frescor e qualidade em cada pedido. Cada detalhe, desde a escolha
                dos acompanhamentos até a finalização dos nossos gelatos, é
                pensado para oferecer a melhor experiência para você e sua família.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
