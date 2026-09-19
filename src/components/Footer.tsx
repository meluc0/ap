import React from 'react';
import { 
  Building2, 
  ArrowUpRight, 
  ShieldCheck, 
  MapPin, 
  MailCheck, 
  Phone,
  FileSpreadsheet
} from 'lucide-react';
import { GENERAL_DATA, APARTMENT_UNITS } from '../data/apartmentUnits';
import { useFormModal } from '../context/FormModalContext';

export const Footer: React.FC = () => {
  const { openModal } = useFormModal();

  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-24 lg:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-serif-luxury text-base tracking-wider text-neutral-100 font-semibold">
                OPORTUNIDADES DE APARTAMENTOS SP
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Seleção exclusiva de apartamentos prontos para morar em três dos bairros mais cobiçados da Zona Leste e Tradicional de São Paulo: Vila Ema, Tatuapé e Mooca. Todos com documentação regularizada, aceitam financiamento bancário e FGTS.
            </p>
            <div className="flex items-center gap-2 text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-amber-500/80" />
              <span>{GENERAL_DATA.creci} • Intermediação Imobiliária Credenciada</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-200 text-sm tracking-wider uppercase">
              Apartamentos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => openModal('vila-ema')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Vila Ema (84m² • R$ 790k)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModal('tatuape')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tatuapé (142m² • R$ 1.85M)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModal('mooca')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Mooca (115m² • R$ 1.29M)</span>
                </button>
              </li>
              <li className="pt-2 border-t border-neutral-900">
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais dos Imóveis</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Forms */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-200 text-sm tracking-wider uppercase">
              Formulários Oficiais
            </h4>
            <p className="leading-relaxed">
              Canais oficiais para envio de interesse e agendamento:
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                id="footer-forms-link-vila-ema"
                href="https://forms.gle/XQjvT1EoakjtAgkv9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold py-1 border-b border-amber-500/40 hover:border-amber-400 transition-all text-left"
              >
                <span>1. Formulário Vila Ema</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </a>

              <a
                id="footer-forms-link-tatuape"
                href="https://forms.gle/SaP9bCnnyDNghtaw6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold py-1 border-b border-amber-500/40 hover:border-amber-400 transition-all text-left"
              >
                <span>2. Formulário Tatuapé</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </a>

              <a
                id="footer-forms-link-mooca"
                href="https://forms.gle/tQ6Z5rDgkWtXQiyz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold py-1 border-b border-amber-500/40 hover:border-amber-400 transition-all text-left"
              >
                <span>3. Formulário Mooca</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-neutral-400">
              <MailCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Confirmação automática no e-mail do interessado</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Apartamentos à Venda SP. Todos os direitos reservados. Fotos das unidades e áreas comuns reais.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#faq" className="hover:text-neutral-400">Política de Privacidade & LGPD</a>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => openModal()}
              className="text-amber-400 hover:text-amber-300 cursor-pointer underline"
            >
              Abrir Janela de Seleção de Formulário
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
