'use client';

import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Plus, Trash2, Edit2, ShoppingBag, Check } from 'lucide-react';

const SIZES = [
  { id: 'marmita', name: 'Marmita' },
  { id: 'copo', name: 'Copo' },
  { id: 'tigela', name: 'Tigela' },
  { id: 'barca', name: 'Barca' },
];

const ACAIS = [
  'Açaí Master', 'Açaí Fit', 'Creme de Maracujá', 'Creme de Morango', 'Creme de Cupuaçu', 'Creme de Bacuri'
];

const GELATOS = [
  { name: 'Flocos', type: 'Tradicionais' },
  { name: 'Creme com Passas', type: 'Tradicionais' },
  { name: 'Chocobelga', type: 'Tradicionais' },
  { name: 'Unicórnio', type: 'Tradicionais' },
  { name: 'Creme de Ovomaltine', type: 'Cremes Especiais' },
  { name: 'Creme de Oreo', type: 'Cremes Especiais' },
  { name: 'Creme de Ninho', type: 'Cremes Especiais' },
];

const FRUITS = ['Banana', 'Morango', 'Kiwi', 'Uva'];

const COMPLEMENTS = [
  'Cereja em Calda', 'Morango em Calda', 'Doce de Leite', 'Nutella', 'Marshmallow', 
  'Tapioca', 'Flocos', 'M&M', 'Fine Amora', 'Fine Banana', 'Fine Dentadura', 
  'Jujuba', 'Bala de Gelatina', 'Cookies Branco'
];

const SYRUPS = ['Pistache', 'Mágica', 'Mágica ao Leite'];

type AcaiItem = {
  id: string;
  size: string;
  acais: string[];
  gelatos: string[];
  fruits: string[];
  complements: string[];
  syrups: string[];
};

const STEPS = [
  { id: 1, title: 'Formato', required: true },
  { id: 2, title: 'Açaí e Cremes', required: true },
  { id: 3, title: 'Gelatos', required: false },
  { id: 4, title: 'Frutas', required: false },
  { id: 5, title: 'Complementos', required: false },
  { id: 6, title: 'Caldas', required: false },
];

export function AcaiBuilder() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'builder' | 'cart' | 'checkout'>('cart');
  const [currentStep, setCurrentStep] = useState(1);
  
  const [cart, setCart] = useState<AcaiItem[]>([]);
  const [currentItem, setCurrentItem] = useState<AcaiItem | null>(null);
  
  const [customerName, setCustomerName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'Delivery' | 'Retirada no local' | ''>('');

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      if (cart.length === 0 && !currentItem) {
        startNewItem();
      } else if (cart.length > 0 && !currentItem) {
        setView('cart');
      }
    };
    document.addEventListener('open-acai-builder', handleOpen);
    return () => document.removeEventListener('open-acai-builder', handleOpen);
  }, [cart.length, currentItem]);

  const startNewItem = () => {
    setCurrentItem({
      id: Math.random().toString(36).substr(2, 9),
      size: '',
      acais: [],
      gelatos: [],
      fruits: [],
      complements: [],
      syrups: [],
    });
    setCurrentStep(1);
    setView('builder');
  };

  const editItem = (item: AcaiItem) => {
    setCurrentItem({ ...item });
    setCurrentStep(1);
    setView('builder');
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    if (cart.length === 1) {
      startNewItem();
    }
  };

  const saveCurrentItem = () => {
    if (!currentItem) return;
    
    const existingIndex = cart.findIndex(item => item.id === currentItem.id);
    if (existingIndex >= 0) {
      const newCart = [...cart];
      newCart[existingIndex] = currentItem;
      setCart(newCart);
    } else {
      setCart([...cart, currentItem]);
    }
    setCurrentItem(null);
    setView('cart');
  };

  const toggleSelection = (field: keyof AcaiItem, value: string) => {
    if (!currentItem) return;
    
    const currentArray = currentItem[field] as string[];
    const isSelected = currentArray.includes(value);
    
    setCurrentItem({
      ...currentItem,
      [field]: isSelected 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
    });
  };

  const canProceed = () => {
    if (!currentItem) return false;
    if (currentStep === 1) return currentItem.size !== '';
    if (currentStep === 2) return currentItem.acais.length > 0;
    return true;
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      saveCurrentItem();
    }
  };

  const sendOrder = () => {
    if (!customerName.trim() || !deliveryMethod) {
      alert('Por favor, preencha seu nome e a forma de entrega.');
      return;
    }

    let message = `Olá! Gostaria de fazer este pedido:\n\n*Pedido - Espaço Açaí & Gelatos*\n\n*Nome:* ${customerName}\n\n`;

    cart.forEach((item, index) => {
      message += `*Açaí ${index + 1}*\n`;
      message += `Formato: ${item.size}\n`;
      message += `Açaí: ${item.acais.join(', ')}\n`;
      message += `Gelatos: ${item.gelatos.length > 0 ? item.gelatos.join(', ') : 'Nenhum'}\n`;
      message += `Frutas: ${item.fruits.length > 0 ? item.fruits.join(', ') : 'Nenhuma'}\n`;
      message += `Complementos: ${item.complements.length > 0 ? item.complements.join(', ') : 'Nenhum'}\n`;
      message += `Caldas: ${item.syrups.length > 0 ? item.syrups.join(', ') : 'Nenhuma'}\n\n`;
    });

    message += `*Forma de entrega:* ${deliveryMethod}\n\n`;
    message += `*Preço base:*\n1kg = R$ 70,00\n\n`;
    message += `_Aguardando pesagem para valor final._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5598985080705?text=${encodedMessage}`, '_blank');
    
    // Reset after sending
    setCart([]);
    setCustomerName('');
    setDeliveryMethod('');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-in slide-in-from-bottom-full duration-300">
      {/* Header */}
      <div className="bg-[#6b1471] text-white px-4 py-4 flex items-center justify-between shadow-md z-10">
        <h2 className="font-serif text-xl font-bold">
          {view === 'builder' ? 'Montar meu Açaí' : view === 'cart' ? 'Resumo do Pedido' : 'Finalizar Pedido'}
        </h2>
        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#faf8fb]">
        {view === 'builder' && currentItem && (
          <div className="max-w-3xl mx-auto p-4 pb-32">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {STEPS.map((s) => (
                  <div 
                    key={s.id} 
                    className={`flex-1 h-2 mx-1 rounded-full ${s.id <= currentStep ? 'bg-[#f26522]' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
              <div className="text-center font-bold text-[#6b1471]">
                Passo {currentStep} de 6: {STEPS[currentStep - 1].title}
                {!STEPS[currentStep - 1].required && <span className="text-gray-400 text-sm ml-2 font-normal">(Opcional)</span>}
              </div>
            </div>

            {/* Step 1: Size */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-2 italic">"Tudo começa com o formato da sua vontade. Escolha o recipiente ideal!"</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SIZES.map(size => (
                    <button
                      key={size.id}
                      onClick={() => setCurrentItem({ ...currentItem, size: size.name })}
                      className={`p-4 rounded-xl border-2 text-left transition-all active:scale-95 ${
                        currentItem.size === size.name 
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{size.name}</span>
                        {currentItem.size === size.name && <Check size={20} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Açaí */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-4 italic">"A base da felicidade! Escolha um ou mais sabores para montar o seu açaí."</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACAIS.map(acai => (
                    <button
                      key={acai}
                      onClick={() => toggleSelection('acais', acai)}
                      className={`p-4 rounded-xl border-2 text-left transition-all active:scale-95 ${
                        currentItem.acais.includes(acai)
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{acai}</span>
                        {currentItem.acais.includes(acai) && <Check size={20} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Gelatos */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-2 italic">"Porque açaí com gelato é a combinação perfeita para refrescar o seu dia!"</p>
                {['Tradicionais', 'Cremes Especiais'].map(type => (
                  <div key={type}>
                    <h3 className="font-bold text-gray-700 mb-3">{type}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {GELATOS.filter(g => g.type === type).map(gelato => (
                        <button
                          key={gelato.name}
                          onClick={() => toggleSelection('gelatos', gelato.name)}
                          className={`p-4 rounded-xl border-2 text-left transition-all active:scale-95 ${
                            currentItem.gelatos.includes(gelato.name)
                              ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                              : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{gelato.name}</span>
                            {currentItem.gelatos.includes(gelato.name) && <Check size={20} />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Fruits */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-4 italic">"Um toque de frescor e saúde! Adicione suas frutas preferidas."</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FRUITS.map(fruit => (
                    <button
                      key={fruit}
                      onClick={() => toggleSelection('fruits', fruit)}
                      className={`p-4 rounded-xl border-2 text-center transition-all active:scale-95 ${
                        currentItem.fruits.includes(fruit)
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                      }`}
                    >
                      <span className="font-bold">{fruit}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Complements */}
            {currentStep === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-4 italic">"A vida é como um açaí: fica ainda melhor com os complementos certos! Escolha os seus favoritos."</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {COMPLEMENTS.map(comp => (
                    <button
                      key={comp}
                      onClick={() => toggleSelection('complements', comp)}
                      className={`p-3 rounded-xl border-2 text-center transition-all active:scale-95 ${
                        currentItem.complements.includes(comp)
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                      }`}
                    >
                      <span className="font-bold text-sm">{comp}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Syrups */}
            {currentStep === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <p className="text-sm text-gray-500 mb-4 italic">"O toque final que faz toda a diferença. Qual calda vai coroar o seu açaí hoje?"</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SYRUPS.map(syrup => (
                    <button
                      key={syrup}
                      onClick={() => toggleSelection('syrups', syrup)}
                      className={`p-4 rounded-xl border-2 text-center transition-all active:scale-95 ${
                        currentItem.syrups.includes(syrup)
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50'
                      }`}
                    >
                      <span className="font-bold">{syrup}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {view === 'cart' && (
          <div className="max-w-3xl mx-auto p-4 pb-32 animate-in fade-in">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-6">Seu pedido está vazio.</p>
                <button
                  onClick={startNewItem}
                  className="bg-[#f26522] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d9531e] active:scale-95 transition-all shadow-md hover:shadow-lg"
                >
                  Montar meu Açaí
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl font-bold text-[#6b1471]">Açaí {index + 1}</h3>
                      <div className="flex gap-2">
                        <button onClick={() => editItem(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-full active:scale-95 transition-all">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full active:scale-95 transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-bold">Formato:</span> {item.size}</p>
                      <p><span className="font-bold">Açaí:</span> {item.acais.join(', ')}</p>
                      <p><span className="font-bold">Gelatos:</span> {item.gelatos.length > 0 ? item.gelatos.join(', ') : 'Nenhum'}</p>
                      <p><span className="font-bold">Frutas:</span> {item.fruits.length > 0 ? item.fruits.join(', ') : 'Nenhuma'}</p>
                      <p><span className="font-bold">Complementos:</span> {item.complements.length > 0 ? item.complements.join(', ') : 'Nenhum'}</p>
                      <p><span className="font-bold">Caldas:</span> {item.syrups.length > 0 ? item.syrups.join(', ') : 'Nenhuma'}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-[#fff0e6] rounded-2xl p-6 border border-[#f26522]/20">
                  <h4 className="font-bold text-[#f26522] mb-2">Preço base: 1kg = R$ 70,00</h4>
                  <p className="text-sm text-gray-600">Observação: O valor final será calculado após pesagem na loja.</p>
                </div>

                <button
                  onClick={startNewItem}
                  className="w-full py-4 rounded-xl border-2 border-[#6b1471] text-[#6b1471] font-bold flex items-center justify-center gap-2 hover:bg-[#6b1471] hover:text-white active:scale-95 transition-all"
                >
                  <Plus size={20} />
                  Adicionar outro Açaí
                </button>
              </div>
            )}
          </div>
        )}

        {view === 'checkout' && (
          <div className="max-w-3xl mx-auto p-4 pb-32 animate-in fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <div>
                <label className="block font-bold text-[#6b1471] mb-2">Seu Nome</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#6b1471] mb-3">Forma de Entrega</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Delivery', 'Retirada no local'].map(method => (
                    <button
                      key={method}
                      onClick={() => setDeliveryMethod(method as any)}
                      className={`p-4 rounded-xl border-2 text-center font-bold transition-all active:scale-95 ${
                        deliveryMethod === method
                          ? 'border-[#f26522] bg-[#fff0e6] text-[#f26522]' 
                          : 'border-gray-200 bg-white hover:border-[#f26522]/50 text-gray-600'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 p-4 absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-3xl mx-auto flex gap-3">
          {view === 'builder' && (
            <>
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-4 rounded-xl border border-gray-300 font-bold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
              ) : cart.length > 0 ? (
                <button
                  onClick={() => {
                    setCurrentItem(null);
                    setView('cart');
                  }}
                  className="px-6 py-4 rounded-xl border border-gray-300 font-bold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
                >
                  Voltar
                </button>
              ) : null}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 bg-[#f26522] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d9531e] active:scale-95 transition-all"
              >
                {currentStep === 6 ? 'Adicionar ao Pedido' : 'Próximo'}
                {currentStep < 6 && <ChevronRight size={20} />}
              </button>
            </>
          )}

          {view === 'cart' && cart.length > 0 && (
            <button
              onClick={() => setView('checkout')}
              className="w-full bg-[#f26522] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d9531e] active:scale-95 transition-all"
            >
              Avançar para Entrega
              <ChevronRight size={20} />
            </button>
          )}

          {view === 'checkout' && (
            <>
              <button
                onClick={() => setView('cart')}
                className="px-6 py-4 rounded-xl border border-gray-300 font-bold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={sendOrder}
                disabled={!customerName.trim() || !deliveryMethod}
                className="flex-1 bg-[#00a859] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#008f4c] active:scale-95 transition-all"
              >
                Enviar Pedido pelo WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
