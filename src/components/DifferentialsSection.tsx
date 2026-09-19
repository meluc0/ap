import React from 'react';
import { 
  Sparkles, 
  Maximize2, 
  BedDouble, 
  ChefHat, 
  Cpu, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Maximize2,
  BedDouble,
  ChefHat,
  Cpu,
  ShieldCheck
};

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Diferenciais de Alto Padrão
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Projetado para quem não abre mão da máxima sofisticação
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Cada detalhe foi pensado para proporcionar conforto acústico, integração fluida de ambientes e acabamentos que valorizam o seu patrimônio.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APARTMENT_DATA.differentials.map((diff, index) => {
            const Icon = iconMap[diff.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-7 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/80 group-hover:border-amber-400/50 flex items-center justify-center text-amber-400 mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center text-xs text-amber-400/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-amber-400" />
                  <span>Item entregue e concluído</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-14 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-lg font-bold text-white">
              Gostou dos acabamentos e da proposta do imóvel?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Agende uma visita guiada presencial para sentir a amplitude dos cômodos, a vista no 18º andar e a iluminação natural.
            </p>
          </div>
          <InterestButton
            id="differentials-interest-cta"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Agendar visita privativa exclusiva"
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
