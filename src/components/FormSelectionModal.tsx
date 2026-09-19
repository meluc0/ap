import React, { useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  MapPin, 
  MailCheck, 
  Database, 
  Building2,
  CheckCircle2, 
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { GENERAL_DATA, APARTMENT_UNITS } from '../data/apartmentUnits';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedUnitId?: string;
}

export const FormSelectionModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  selectedUnitId
}) => {
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-neutral-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <MailCheck className="w-3.5 h-3.5" />
              <span>Confirmação Individual por E-mail</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Selecione o Apartamento de Interesse
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Escolha a localização desejada para agendar visita, simular financiamento ou enviar proposta. A confirmação do seu interesse será enviada no seu e-mail:
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list of the 3 requested forms */}
        <div className="py-4 space-y-3.5 overflow-y-auto pr-1">
          {/* Option 1: Vila Ema */}
          <a
            id="modal-link-vila-ema"
            href="https://forms.gle/XQjvT1EoakjtAgkv9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`group block p-4 sm:p-5 rounded-xl border transition-all duration-200 relative shadow-lg ${
              selectedUnitId === 'vila-ema'
                ? 'bg-amber-950/20 border-amber-500 ring-1 ring-amber-500/50'
                : 'bg-neutral-950/80 border-neutral-800 hover:border-amber-500/60 hover:bg-neutral-950'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                      Apartamento Vila Ema — 84m²
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-neutral-950">
                      R$ 790.000
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    3 dormitórios (1 suíte), varanda gourmet envidraçada, 2 vagas cobertas e lazer clube completo ao lado do Monotrilho.
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-amber-400/90 font-medium">
                    <span className="flex items-center gap-1">
                      <MailCheck className="w-3.5 h-3.5 text-amber-400" />
                      Recebe confirmação por e-mail
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <Clock className="w-3 h-3" />
                      Visitas abertas
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Option 2: Tatuapé */}
          <a
            id="modal-link-tatuape"
            href="https://forms.gle/SaP9bCnnyDNghtaw6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`group block p-4 sm:p-5 rounded-xl border transition-all duration-200 relative shadow-lg ${
              selectedUnitId === 'tatuape'
                ? 'bg-amber-950/20 border-amber-500 ring-1 ring-amber-500/50'
                : 'bg-neutral-950/80 border-neutral-800 hover:border-amber-500/60 hover:bg-neutral-950'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                      Apartamento Tatuapé — 142m² (Alto Padrão)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-amber-400 border border-amber-500/30">
                      R$ 1.850.000
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    3 suítes plenas, 3 vagas demarcadas, terraço gourmet integrado, 16º andar com vista livre próximo ao CERET e Anália Franco.
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-amber-400/90 font-medium">
                    <span className="flex items-center gap-1">
                      <MailCheck className="w-3.5 h-3.5 text-amber-400" />
                      Recebe confirmação por e-mail
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <ShieldCheck className="w-3 h-3" />
                      Exclusividade
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Option 3: Mooca */}
          <a
            id="modal-link-mooca"
            href="https://forms.gle/tQ6Z5rDgkWtXQiyz9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`group block p-4 sm:p-5 rounded-xl border transition-all duration-200 relative shadow-lg ${
              selectedUnitId === 'mooca'
                ? 'bg-amber-950/20 border-amber-500 ring-1 ring-amber-500/50'
                : 'bg-neutral-950/80 border-neutral-800 hover:border-amber-500/60 hover:bg-neutral-950'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                      Apartamento Mooca — 115m²
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-amber-400 border border-amber-500/30">
                      R$ 1.290.000
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    2 suítes + home office, terraço gourmet amplo, cozinha com ilha, 2 vagas fixas e localização tradicional próximo ao Clube Juventus.
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-amber-400/90 font-medium">
                    <span className="flex items-center gap-1">
                      <MailCheck className="w-3.5 h-3.5 text-amber-400" />
                      Recebe confirmação por e-mail
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Pronto para morar
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Centralized Sheet & Confirmation Guide */}
          <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Centralização em Planilha Única & Confirmação Automática</span>
              </div>
              <button
                type="button"
                onClick={() => setShowConfigGuide(!showConfigGuide)}
                className="text-[11px] text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
              >
                {showConfigGuide ? "Ocultar instruções" : "Ver como configurar no Google"}
              </button>
            </div>
            
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Todos os formulários acima estão configurados para registrar os interessados organizadamente em uma única planilha no Google Sheets e enviar confirmação individual para cada e-mail cadastrado.
            </p>

            {showConfigGuide && (
              <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] text-neutral-300 space-y-2.5 animate-in fade-in">
                <p className="font-semibold text-amber-300">
                  Passo a passo rápido nos 3 formulários Google:
                </p>
                <div className="space-y-2 text-neutral-300">
                  <div className="bg-neutral-900/90 p-2.5 rounded border border-neutral-800">
                    <strong className="text-amber-400 block mb-0.5">1. Para enviar a confirmação individual para o e-mail:</strong>
                    No editor de cada formulário (Vila Ema, Tatuapé e Mooca), acesse <em>Configurações</em> &gt; <em>Respostas</em>:
                    <ul className="list-disc list-inside mt-1 text-neutral-400 space-y-0.5">
                      <li>Ative <strong>"Coletar endereços de e-mail"</strong></li>
                      <li>Marque <strong>"Enviar aos participantes uma cópia da resposta: Sempre"</strong></li>
                    </ul>
                  </div>
                  <div className="bg-neutral-900/90 p-2.5 rounded border border-neutral-800">
                    <strong className="text-amber-400 block mb-0.5">2. Para centralizar tudo em UMA ÚNICA planilha:</strong>
                    Na aba <em>Respostas</em> de cada formulário, clique no ícone verde do Google Sheets:
                    <ul className="list-disc list-inside mt-1 text-neutral-400 space-y-0.5">
                      <li>No 1º formulário: crie uma planilha chamada <strong>"Interessados - Apartamentos SP"</strong></li>
                      <li>No 2º e 3º formulários: escolha <strong>"Selecionar planilha existente"</strong> e aponte para essa mesma planilha</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 shrink-0">
          <span>{GENERAL_DATA.creci} • Atendimento Direto</span>
          <button
            onClick={onClose}
            className="text-neutral-300 hover:text-white font-medium text-xs underline cursor-pointer"
          >
            Fechar janela
          </button>
        </div>
      </div>
    </div>
  );
};
