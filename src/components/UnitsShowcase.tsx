import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Car, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { APARTMENT_UNITS, ApartmentUnit } from '../data/apartmentUnits';
import { useFormModal } from '../context/FormModalContext';

export const UnitsShowcase: React.FC = () => {
  const { openModal } = useFormModal();
  const [activeTab, setActiveTab] = useState<'all' | 'vila-ema' | 'tatuape' | 'mooca'>('all');

  const filteredUnits = activeTab === 'all' 
    ? APARTMENT_UNITS 
    : APARTMENT_UNITS.filter(u => u.id === activeTab);

  return (
    <section id="unidades" className="py-20 lg:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Escolha sua Unidade Ideal</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Apartamentos Exclusivos nos Melhores Bairros
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Selecione a região de sua preferência para ver detalhes completos, fotos, localização e enviar seu interesse para agendar visita.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Ver Todas (3 Unidades)
            </button>
            <button
              onClick={() => setActiveTab('vila-ema')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'vila-ema'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Vila Ema (84m² • R$ 790k)
            </button>
            <button
              onClick={() => setActiveTab('tatuape')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'tatuape'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Tatuapé (142m² • R$ 1.85M)
            </button>
            <button
              onClick={() => setActiveTab('mooca')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'mooca'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Mooca (115m² • R$ 1.29M)
            </button>
          </div>
        </div>

        {/* Units Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={unit.highlightCover}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 shadow-lg">
                      {unit.neighborhood}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-neutral-900/90 text-neutral-300 backdrop-blur-md border border-neutral-700">
                      {unit.floor}
                    </span>
                  </div>

                  {/* Bottom Price in Cover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-300 font-semibold block">
                        Valor de Venda
                      </span>
                      <span className="text-2xl font-bold text-white font-serif-luxury text-amber-300">
                        {unit.priceFormatted}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-300 bg-neutral-900/80 px-2 py-1 rounded border border-neutral-700">
                      Cond.: {unit.condoFee}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{unit.locationDetails}</span>
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                    {unit.tagline}
                  </p>

                  {/* Key Stats Pill Row */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-neutral-800/80 text-center">
                    <div className="bg-neutral-950/60 p-2 rounded-lg">
                      <span className="block text-amber-400 font-bold text-sm">{unit.area}</span>
                      <span className="text-[10px] text-neutral-400">Área Útil</span>
                    </div>
                    <div className="bg-neutral-950/60 p-2 rounded-lg">
                      <span className="block text-amber-400 font-bold text-sm">{unit.suites}</span>
                      <span className="text-[10px] text-neutral-400">Dormitórios</span>
                    </div>
                    <div className="bg-neutral-950/60 p-2 rounded-lg">
                      <span className="block text-amber-400 font-bold text-sm">{unit.parking}</span>
                      <span className="text-[10px] text-neutral-400">Garagem</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                      Diferenciais Principais:
                    </span>
                    {unit.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Proximity Pill */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">
                      Próximo de:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {unit.nearby.map((nb, j) => (
                        <span 
                          key={j}
                          className="text-[10px] px-2 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300"
                        >
                          {nb.title} ({nb.time})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                {/* Primary Action Button (Opens Modal filtered or opens direct link) */}
                <button
                  type="button"
                  onClick={() => openModal(unit.id)}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer group-hover:scale-[1.02]"
                >
                  <span>Tenho Interesse — {unit.neighborhood}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Direct Google Forms Link */}
                <a
                  href={unit.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-medium text-amber-400 hover:text-amber-300 flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Acessar Formulário Direto de {unit.neighborhood}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
