import React from 'react';
import { MapPin, Navigation, Clock, Building, Trees, GraduationCap, Utensils } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Nobre</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            No Coração dos Jardins
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Uma das regiões mais cobiçadas e valorizadas de São Paulo, cercada de verde, tranquilidade e as melhores opções de gastronomia e conveniência a poucos passos.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Proximities List */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white mb-2">
                Mobilidade e Facilidades Próximas:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {APARTMENT_DATA.locationHighlights.map((poi, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                        {poi.type}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-neutral-300 font-medium bg-neutral-800/80 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{poi.time}</span>
                      </div>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {poi.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Address Banner */}
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Endereço Privilegiado</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {APARTMENT_DATA.location}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    * O número exato do edifício é compartilhado no momento do agendamento de visita para resguardo da privacidade dos moradores.
                  </p>
                </div>
              </div>
              <InterestButton
                id="location-interest-button"
                variant="gold"
                label="Tenho Interesse"
                sublabel="Agendar visita ao local com especialista"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column: Visual Map Card with Points of Interest */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col relative min-h-[380px]">
            {/* Map visual background styling with streets pattern */}
            <div className="relative w-full h-full min-h-[360px] bg-neutral-950 flex items-center justify-center p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Decorative concentric circles to simulate radar/location */}
              <div className="absolute w-72 h-72 rounded-full border border-amber-500/20 animate-ping opacity-25" style={{ animationDuration: '6s' }} />
              <div className="absolute w-52 h-52 rounded-full border border-amber-500/30" />
              <div className="absolute w-32 h-32 rounded-full border border-amber-500/40" />

              {/* Central Pin */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 mb-2 transform hover:scale-110 transition-transform">
                  <Building className="w-7 h-7" />
                </div>
                <div className="bg-neutral-900/90 border border-amber-500/40 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl">
                  <span className="font-serif-luxury font-bold text-white text-sm block">Residencial Jardins Imperial</span>
                  <span className="text-xs text-amber-400 font-medium">18º Andar • Vista 180°</span>
                </div>
              </div>

              {/* Surrounding Nearby tags */}
              <div className="absolute top-8 left-8 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs text-neutral-300 flex items-center gap-1.5 shadow-lg">
                <Trees className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pq. Ibirapuera (6 min)</span>
              </div>

              <div className="absolute bottom-8 right-8 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs text-neutral-300 flex items-center gap-1.5 shadow-lg">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>Rua Oscar Freire (5 min)</span>
              </div>

              <div className="absolute bottom-8 left-8 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs text-neutral-300 flex items-center gap-1.5 shadow-lg">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>Dante Alighieri (4 min)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
