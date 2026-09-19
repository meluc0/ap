import React from 'react';
import { Home, Bed, Car, Compass, FileCheck } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const KeyStatsBar: React.FC = () => {
  const stats = [
    {
      icon: Home,
      title: "Área Privativa",
      value: "168 m²",
      detail: "Planta inteligente"
    },
    {
      icon: Bed,
      title: "Dormitórios",
      value: "3 Suítes",
      detail: "Master com closet"
    },
    {
      icon: Car,
      title: "Estacionamento",
      value: "3 Vagas",
      detail: "Demarcadas + depósito"
    },
    {
      icon: Compass,
      title: "Posição Solar",
      value: "18º Andar",
      detail: "Sol da manhã e vista livre"
    },
    {
      icon: FileCheck,
      title: "Status Jurídico",
      value: "Pronto",
      detail: "Escritura regularizada"
    }
  ];

  return (
    <section id="sobre" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-neutral-900/95 border border-amber-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex items-start gap-3.5 ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-medium uppercase tracking-wider">{item.title}</span>
                  <span className="text-lg font-bold text-neutral-100 block">{item.value}</span>
                  <span className="text-xs text-neutral-400 block font-light">{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip inside stats card */}
        <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">Condição Exclusiva de Venda</span>
            <p className="text-sm text-neutral-300">
              Valor promocional: <strong className="text-white text-base">{APARTMENT_DATA.pricing.priceFormatted}</strong> • Condomínio: {APARTMENT_DATA.pricing.condoFee}
            </p>
          </div>
          <InterestButton
            id="stats-bar-interest-button"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Solicitar atendimento com corretor"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
