'use client';

import { useState } from 'react';
import { Search, X, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

// Mock data for the menu
const categories = [
  'TODOS',
  'AÇAÍ TRADICIONAL',
  'AÇAÍ ZERO',
  'GELATOS',
  'ACOMPANHAMENTOS',
  'BEBIDAS',
  'COMBOS',
];

const menuItems = [
  {
    id: 1,
    name: 'Açaí no Copo',
    price: '15,00',
    description: 'Copo de açaí puro. Escolha até 3 acompanhamentos gratuitos.',
    category: 'AÇAÍ TRADICIONAL',
  },
  {
    id: 2,
    name: 'Açaí na Marmita',
    price: '22,00',
    description: 'Marmita de açaí puro. Escolha até 4 acompanhamentos gratuitos.',
    category: 'AÇAÍ TRADICIONAL',
  },
  {
    id: 4,
    name: 'Gelato de Morango',
    price: '12,00',
    description: 'Gelato artesanal sabor morango. 2 bolas.',
    category: 'GELATOS',
  },
  {
    id: 5,
    name: 'Gelato de Ninho com Nutella',
    price: '14,00',
    description: 'Gelato artesanal sabor leite ninho com creme de avelã. 2 bolas.',
    category: 'GELATOS',
  },
  {
    id: 6,
    name: 'Adicional de Leite Condensado',
    price: '3,00',
    description: 'Porção extra de leite condensado.',
    category: 'ACOMPANHAMENTOS',
  },
  {
    id: 7,
    name: 'Água Mineral',
    price: '4,00',
    description: 'Água mineral sem gás 500ml.',
    category: 'BEBIDAS',
  },
  {
    id: 8,
    name: 'Combo Casal',
    price: '35,00',
    description: '2 copos de açaí + 2 águas minerais.',
    category: 'COMBOS',
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('TODOS');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);
  const [observation, setObservation] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'TODOS' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = () => {
    if (!selectedItem) return;
    const obsText = observation.trim() ? `\n\n*Observações:* ${observation}` : '';
    const text = `Olá! Gostaria de pedir:\n\n1x *${selectedItem.name}*${obsText}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5598985080705?text=${encodedText}`, '_blank');
    setSelectedItem(null);
    setObservation('');
  };

  return (
    <section id="catalogo" className="pt-12 pb-8 bg-[#faf8fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-5xl font-bold text-[#6b1471] mb-4">
            Nosso Cardápio
          </h2>
          <div className="w-24 h-1 bg-[#f26522] mx-auto rounded-full" />
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8 relative"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar no cardápio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-[#6b1471] placeholder-gray-400 transition-all"
          />
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all transform hover:scale-105 active:scale-95 border ${
                activeCategory === category
                  ? 'bg-[#6b1471] text-white border-[#6b1471] shadow-md'
                  : 'bg-white text-[#6b1471] border-gray-300 hover:border-[#f26522] hover:text-[#f26522] hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="font-serif text-xl font-bold text-[#6b1471] leading-tight flex-1">
                  {item.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                {item.description}
              </p>
              <button 
                onClick={() => setSelectedItem(item)}
                className="w-full py-3 rounded-full border border-[#f26522] text-[#f26522] font-bold text-xs tracking-widest hover:bg-[#f26522] hover:text-white transition-all transform hover:scale-105 active:scale-95 mt-auto uppercase"
              >
                Ver Detalhes
              </button>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Nenhum item encontrado para a sua busca.
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => {
                setSelectedItem(null);
                setObservation('');
              }} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-[#6b1471] mb-2 pr-8">{selectedItem.name}</h3>
            <p className="text-gray-600 mb-6">{selectedItem.description}</p>

            <div className="mb-6">
              <label className="block text-sm font-bold text-[#6b1471] mb-2">
                Observações (Opcional)
              </label>
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Ex: Sem leite em pó, com extra de morango..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f26522] resize-none h-24 text-gray-700"
              />
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-[#f26522] hover:bg-[#d9531e] text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2 shadow-md"
            >
              <MessageCircle size={20} />
              Pedir pelo WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
