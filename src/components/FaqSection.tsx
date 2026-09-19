import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Esclarecimentos rápidos para garantir tranquilidade em cada etapa da sua decisão.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {APARTMENT_DATA.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900/70 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-white font-semibold hover:text-amber-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="mt-10 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Tem outra pergunta específica?</h4>
              <p className="text-xs text-neutral-400">Preencha o formulário e receba retorno direto da nossa assessoria.</p>
            </div>
          </div>
          <InterestButton
            id="faq-interest-cta"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Falar com consultor"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
