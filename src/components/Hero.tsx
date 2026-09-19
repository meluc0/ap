import React from 'react';
import { MapPin, ShieldCheck, Sparkles, ChevronDown, Check, Eye } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Living e varanda do Apartamento Jardins Imperial"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
        />
        {/* Multilayer dark vignette gradients */}
        <div className="absolute inset-0 bg-neutral-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-16">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{APARTMENT_DATA.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Seu novo refúgio de luxo com <span className="text-amber-400 italic">168m² privativos</span> nos Jardins.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
            {APARTMENT_DATA.tagline} 3 suítes plenas, varanda gourmet integrada, 3 vagas demarcadas e vista panorâmica permanente no 18º andar.
          </p>

          {/* Quick specs chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-2xl">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg p-2.5 text-center">
              <span className="block text-amber-400 font-bold text-lg">168 m²</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Área Útil</span>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg p-2.5 text-center">
              <span className="block text-amber-400 font-bold text-lg">3 Suítes</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Com Closet</span>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg p-2.5 text-center">
              <span className="block text-amber-400 font-bold text-lg">3 Vagas</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Demarcadas</span>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg p-2.5 text-center">
              <span className="block text-amber-400 font-bold text-lg">18º Andar</span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Sol da Manhã</span>
            </div>
          </div>

          {/* Location & Pricing Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300 pt-1">
            <div className="flex items-center gap-1.5 bg-neutral-900/70 border border-neutral-800/80 px-3 py-1.5 rounded-md">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{APARTMENT_DATA.location}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/70 border border-neutral-800/80 px-3 py-1.5 rounded-md">
              <span className="text-neutral-400">Valor de Venda:</span>
              <span className="font-bold text-amber-300">{APARTMENT_DATA.pricing.priceFormatted}</span>
            </div>
          </div>

          {/* Action Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <InterestButton
              id="hero-primary-cta"
              variant="gold"
              label="Tenho Interesse"
              sublabel="Clique para preencher o formulário e agendar visita"
              className="text-base px-8 py-4"
            />

            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/60 font-medium text-sm transition-colors group"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Ver Fotos & Vídeo</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Documentação 100% Aprovada</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Aceita Financiamento e FGTS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento Direto & Exclusivo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-neutral-400 text-xs opacity-75 hover:opacity-100 transition-opacity">
        <span>Conheça os detalhes</span>
        <a href="#sobre" aria-label="Rolar para detalhes">
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
};
