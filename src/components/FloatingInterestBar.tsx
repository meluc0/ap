import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronUp } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const FloatingInterestBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 400px down
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <aside
      id="floating-interest-bar"
      aria-label="Acesso rápido ao formulário de interesse"
      className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-amber-500/30 py-3 px-4 sm:px-6 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Info Left */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden md:flex w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-serif-luxury font-bold text-sm text-white">
                {APARTMENT_DATA.name}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">
                18º Andar
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              168m² privativos • 3 suítes • 3 vagas • <strong className="text-neutral-200">{APARTMENT_DATA.pricing.priceFormatted}</strong>
            </p>
          </div>
        </div>

        {/* Action Right */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <InterestButton
            id="floating-interest-button"
            variant="floating"
            label="Tenho Interesse"
            className="w-full sm:w-auto"
          />

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-neutral-500 hover:text-neutral-300 rounded-lg hover:bg-neutral-900 transition-colors"
            title="Fechar barra flutuante"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
