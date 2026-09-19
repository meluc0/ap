import React from 'react';
import { Calendar, Clock, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden bg-neutral-950">
      {/* Visual background image with strong gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          alt="Varanda gourmet entardecer"
          className="w-full h-full object-cover object-center filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Atendimento Privativo & Personalizado</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Pronto para conhecer o seu futuro apartamento?
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Preencha o formulário rápido de interesse para receber atendimento imediato, tirar dúvidas de financiamento e agendar sua visita exclusiva.
        </p>

        {/* Big CTA Center Button */}
        <div className="flex flex-col items-center justify-center pt-2">
          <InterestButton
            id="banner-final-interest-cta"
            variant="gold"
            label="Tenho Interesse no Apartamento"
            sublabel="Clique aqui para abrir o formulário oficial"
            className="text-lg px-10 py-5 shadow-2xl shadow-amber-500/30"
          />

          <p className="text-xs text-neutral-400 mt-4">
            Link direto para o formulário oficial: <span className="text-amber-400/90 font-mono">forms.gle/gMAT4vTw55JhQfjX6</span>
          </p>
        </div>

        {/* 3 Pillars of trust */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Retorno em até 2 horas por consultor credenciado</span>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Visitas de segunda a domingo com horário exclusivo</span>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Privacidade total e dados protegidos pela LGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
