import React from 'react';
import { Sparkles, MapPin, ArrowUpRight, MailCheck, ShieldCheck, Database, Calendar } from 'lucide-react';
import { InterestButton } from './InterestButton';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden bg-neutral-950 border-t border-neutral-900">
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
          <span>Atendimento Direto & Personalizado</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Pronto para dar o próximo passo no seu novo imóvel?
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Preencha o formulário rápido da unidade que você tem interesse (Vila Ema, Tatuapé ou Mooca). Você receberá a confirmação individual no seu e-mail e nossa equipe agendará sua visita privativa.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center justify-center pt-2 space-y-4">
          <InterestButton
            id="banner-final-interest-cta"
            variant="gold"
            label="Tenho Interesse no Apartamento"
            sublabel="Clique para escolher: Vila Ema, Tatuapé ou Mooca"
            className="text-lg px-10 py-5 shadow-2xl shadow-amber-500/30"
          />

          {/* Quick Direct Links for the 3 forms */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
            <a
              href="https://forms.gle/XQjvT1EoakjtAgkv9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-amber-300 border border-neutral-800 hover:border-amber-500/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Vila Ema (84m²)</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href="https://forms.gle/SaP9bCnnyDNghtaw6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-amber-300 border border-neutral-800 hover:border-amber-500/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Tatuapé (142m²)</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href="https://forms.gle/tQ6Z5rDgkWtXQiyz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-amber-300 border border-neutral-800 hover:border-amber-500/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Mooca (115m²)</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* 3 Pillars of trust */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <MailCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Confirmação de interesse enviada individualmente ao seu e-mail</span>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Visitas exclusivas agendadas de acordo com a sua conveniência</span>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-neutral-300">Assessoria completa na simulação de financiamento e FGTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
