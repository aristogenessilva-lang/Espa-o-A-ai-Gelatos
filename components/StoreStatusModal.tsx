'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function StoreStatusModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState<'aberta' | 'fechada'>('fechada');
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    // Check if we already showed the modal in this session
    const hasSeen = sessionStorage.getItem('hasSeenStatusModal');
    if (!hasSeen) {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenStatusModal', 'true');
    }

    const checkStatus = () => {
      const now = new Date();
      // Convert to São Paulo timezone
      const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
      const day = spTime.getDay(); // 0 = Sunday, 1 = Monday, ...
      setCurrentDay(day);
      
      const hours = spTime.getHours();
      const minutes = spTime.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      // Terça (2) a Domingo (0): 16:30 (990) às 22:00 (1320)
      // Segunda (1): Fechado
      if (day === 1) {
        setStoreStatus('fechada');
      } else {
        if (timeInMinutes >= 990 && timeInMinutes < 1320) {
          setStoreStatus('aberta');
        } else {
          setStoreStatus('fechada');
        }
      }
    };

    checkStatus();
  }, []);

  if (!isOpen) return null;

  const days = [
    { id: 0, name: 'Domingo', hours: '16:30 - 22:00' },
    { id: 1, name: 'Segunda-feira', hours: 'Fechado' },
    { id: 2, name: 'Terça-feira', hours: '16:30 - 22:00' },
    { id: 3, name: 'Quarta-feira', hours: '16:30 - 22:00' },
    { id: 4, name: 'Quinta-feira', hours: '16:30 - 22:00' },
    { id: 5, name: 'Sexta-feira', hours: '16:30 - 22:00' },
    { id: 6, name: 'Sábado', hours: '16:30 - 22:00' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 relative flex flex-col items-center text-center shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Icon placeholder */}
        <div className="text-6xl mb-4">
          {storeStatus === 'aberta' ? '🏪' : '🏪'}
        </div>

        <h2 className={`text-3xl font-bold mb-6 ${storeStatus === 'aberta' ? 'text-[#00a859]' : 'text-[#f26522]'}`}>
          Loja {storeStatus === 'aberta' ? 'Aberta' : 'Fechada'}
        </h2>

        <h3 className="text-gray-700 font-bold text-lg mb-4">Horário de Funcionamento</h3>

        <div className="w-full text-sm mb-6">
          {days.map((d) => {
            const isToday = d.id === currentDay;
            return (
              <div 
                key={d.id} 
                className={`flex justify-between py-2 px-3 rounded-md ${
                  isToday 
                    ? 'bg-red-50 text-red-600 font-bold' 
                    : 'text-gray-600 font-medium'
                }`}
              >
                <span>{d.name} {isToday && '(Hoje)'}</span>
                <span className={d.hours === 'Fechado' && !isToday ? 'text-red-500' : ''}>
                  {d.hours}
                </span>
              </div>
            );
          })}
          <div className="text-left py-2 px-3 text-gray-500 mt-2 font-medium border-t border-gray-100">
            <span className="font-bold text-gray-700">Fuso Horário:</span> São Paulo
          </div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-[#f26522] hover:bg-[#d9531e] text-white font-bold py-3 rounded-lg transition-colors shadow-md"
        >
          OK
        </button>
      </div>
    </div>
  );
}
