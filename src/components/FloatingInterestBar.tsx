import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { useFormModal } from '../context/FormModalContext';

export const FloatingInterestBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useFormModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="floating-conversion-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 py-3 px-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Info Left */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden md:flex w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white font-serif-luxury">
                Apartamentos Prontos: Vila Ema, Tatuapé e Mooca
              </span>
              <span className="hidden lg:inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                A partir de R$ 790 mil
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Escolha a unidade desejada para receber o book e agendar visita exclusiva.
            </p>
          </div>
        </div>

        {/* Action Right */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => openModal()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Tenho Interesse</span>
            <span className="text-xs font-normal opacity-85 hidden sm:inline">(Escolher Bairro)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
