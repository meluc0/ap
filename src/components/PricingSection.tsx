import React from 'react';
import { Check, ShieldAlert, FileText, BadgePercent, Coins, HelpCircle } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const PricingSection: React.FC = () => {
  return (
    <section id="valores" className="py-20 bg-neutral-900/40 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Investimento & Condições
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Transparência e Segurança na Sua Negociação
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Excelente relação custo-benefício para a região dos Jardins com documentação pronta para transferência imediata.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto bg-neutral-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Main Price Block */}
            <div className="lg:col-span-6 space-y-5 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Valor Total de Venda
              </span>
              <div className="space-y-1">
                <span className="text-3xl sm:text-5xl font-bold font-serif-luxury text-white tracking-tight">
                  {APARTMENT_DATA.pricing.priceFormatted}
                </span>
                <span className="block text-sm text-amber-300 font-medium">
                  {APARTMENT_DATA.pricing.priceM2} • Valor abaixo da média do m² do bairro
                </span>
              </div>

              {/* Monthly Costs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-xs text-neutral-400 block">Condomínio Mensal</span>
                  <span className="text-base font-bold text-neutral-100">{APARTMENT_DATA.pricing.condoFee}</span>
                </div>
                <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-xs text-neutral-400 block">IPTU Mensal</span>
                  <span className="text-base font-bold text-neutral-100">{APARTMENT_DATA.pricing.iptu}</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                * Valores de condomínio contemplam gerador full, segurança 24h blindada e manutenção de todas as áreas de lazer.
              </p>
            </div>

            {/* Right Col: Conditions & Guarantees */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Condições de Pagamento Facilitadas:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-neutral-300">
                    <strong>Financiamento Bancário:</strong> Aceita entrada reduzida e saldo em até 420 meses no seu banco de preferência.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-neutral-300">
                    <strong>Uso do FGTS:</strong> Elegível conforme diretrizes das instituições financeiras.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-neutral-300">
                    <strong>Permuta / Propostas:</strong> Avalia propostas à vista, veículo premium ou imóvel de menor valor.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-neutral-300">
                    <strong>Documentação Limpa:</strong> Matrícula individualizada no Cartório de Registro de Imóveis, sem gravames.
                  </span>
                </div>
              </div>

              {/* Primary Form Link Button */}
              <div className="pt-2">
                <InterestButton
                  id="pricing-interest-cta"
                  variant="gold"
                  label="Tenho Interesse"
                  sublabel="Fazer proposta ou simulação de financiamento"
                  className="w-full text-center py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
