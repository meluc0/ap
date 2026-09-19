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
import { GENERAL_DATA } from '../data/apartmentUnits';
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
            Diferenciais das Unidades
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Padrão de Construção e Conforto para a Sua Família
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            As três opções foram selecionadas rigorosamente pela qualidade estrutural, acabamento moderno, ventilação natural e alta valorização imobiliária.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GENERAL_DATA.differentials.map((diff, index) => {
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-medium text-amber-400/90">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Disponível nas 3 unidades</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA in differentials */}
        <div className="mt-14 text-center">
          <InterestButton
            variant="gold"
            label="Tenho Interesse em Conhecer os Apartamentos"
            sublabel="Agendamento rápido com confirmação individual por e-mail"
            className="text-base px-8 py-4"
          />
        </div>
      </div>
    </section>
  );
};
