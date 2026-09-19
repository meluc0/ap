import React from 'react';
import { 
  Waves, 
  Dumbbell, 
  ShieldCheck, 
  Flame, 
  Wine, 
  Compass, 
  Baby, 
  Zap,
  Check
} from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

const condoIcons = [
  Waves,
  Dumbbell,
  ShieldCheck,
  Flame,
  Wine,
  Compass,
  Baby,
  Zap
];

export const CondoAmenities: React.FC = () => {
  return (
    <section id="condominio" className="py-20 bg-neutral-900/40 relative border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Infraestrutura Completa
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Condomínio Clube com Conforto de Resort
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Áreas de convivência entregues totalmente equipadas e decoradas com mobiliário assinado por designers renomados.
          </p>
        </div>

        {/* 8 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APARTMENT_DATA.condoFeatures.map((item, idx) => {
            const Icon = condoIcons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/30 p-6 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-400/40 flex items-center justify-center text-amber-400 mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security and Administration Highlight */}
        <div className="mt-12 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Portaria Blindada & Monitoramento 24h</h4>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Acesso controlado por biometria facial, clausura para pedestres e veículos, e equipe de segurança especializada.
              </p>
            </div>
          </div>
          <InterestButton
            id="condo-interest-cta"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Quero saber mais sobre o condomínio"
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
