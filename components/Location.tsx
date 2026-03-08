'use client';

import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-[#6b1471] text-[#faf8fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Venha nos visitar
            </h2>
            <div className="w-20 h-1 bg-[#f26522] mb-10 rounded-full" />

            <p className="text-lg text-[#faf8fb]/90 font-light leading-relaxed mb-12">
              Um ambiente acolhedor, perfeito para saborear um açaí, ler um livro ou
              encontrar amigos.
            </p>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#faf8fb]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f26522] transition-colors duration-300">
                  <MapPin className="text-[#f26522] group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Endereço</h3>
                  <p className="text-[#faf8fb]/80 font-light leading-relaxed">
                    Avenida Sabino Câmara, S/N - Santo Antônio<br />
                    Brejo - MA
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#faf8fb]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f26522] transition-colors duration-300">
                  <Clock className="text-[#f26522] group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[#faf8fb]/80 font-light leading-relaxed">
                    Terça a Domingo: 16:30 às 22:00<br />
                    Segunda-feira: Fechado
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#faf8fb]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f26522] transition-colors duration-300">
                  <Phone className="text-[#f26522] group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Contato</h3>
                  <p className="text-[#faf8fb]/80 font-light leading-relaxed">
                    (98) 98508-0705
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
          >
            {/* Replace with actual Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.792470659632!2d-42.73030262402127!3d-3.684116096289456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ed670000000001%3A0x0!2sAvenida%20Sabino%20C%C3%A2mara%2C%20Brejo%20-%20MA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
