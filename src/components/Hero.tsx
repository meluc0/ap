import React from 'react';
import { Sparkles, MapPin, Check, Eye, Building2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { APARTMENT_UNITS } from '../data/apartmentUnits';
import { InterestButton } from './InterestButton';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Apartamentos à Venda na Vila Ema, Tatuapé e Mooca"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
        />
        {/* Multilayer dark vignette gradients */}
        <div className="absolute inset-0 bg-neutral-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 md:pt-16">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Oportunidades Exclusivas • Prontos para Morar</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Apartamentos à Venda na <span className="text-amber-400 italic">Vila Ema</span>, <span className="text-amber-400 italic">Tatuapé</span> e <span className="text-amber-400 italic">Mooca</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
            Plantas de 84m² a 142m², de 2 a 3 suítes com varanda gourmet, vagas demarcadas e lazer clube completo. Escolha a sua região preferida e agende sua visita privativa.
          </p>

          {/* Units Quick Cards Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {APARTMENT_UNITS.map((unit) => (
              <div 
                key={unit.id}
                className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 hover:border-amber-500/40 rounded-xl p-3.5 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {unit.neighborhood}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {unit.area}
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-0.5">
                  {unit.priceFormatted}
                </div>
                <div className="text-[11px] text-neutral-400">
                  {unit.bedrooms} • {unit.parking}
                </div>
              </div>
            ))}
          </div>

          {/* Action Call to Action */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <InterestButton
              id="hero-primary-cta"
              variant="gold"
              label="Tenho Interesse no Apartamento"
              sublabel="Escolha: Vila Ema, Tatuapé ou Mooca"
              className="text-base px-8 py-4"
            />

            <a
              href="#unidades"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/60 font-medium text-sm transition-colors group"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Comparar os 3 Imóveis</span>
            </a>
          </div>

          {/* Direct Links Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-neutral-400 text-[11px] mr-1">Formulário direto de cada bairro:</span>
            <a
              href="https://forms.gle/XQjvT1EoakjtAgkv9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>1. Vila Ema (84m²)</span>
            </a>
            <a
              href="https://forms.gle/SaP9bCnnyDNghtaw6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>2. Tatuapé (142m²)</span>
            </a>
            <a
              href="https://forms.gle/tQ6Z5rDgkWtXQiyz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>3. Mooca (115m²)</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Documentação 100% Pronta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Aceita Financiamento e FGTS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Confirmação enviada no seu e-mail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
