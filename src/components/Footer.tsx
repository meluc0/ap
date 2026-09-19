import React from 'react';
import { Building2, ArrowUpRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';

export const Footer: React.FC = () => {
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
                JARDINS IMPERIAL
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              Apartamento de altíssimo padrão à venda no bairro dos Jardins, São Paulo. 168m² privativos, 3 suítes, 3 vagas de garagem e condomínio com lazer completo e segurança 24h blindada.
            </p>
            <div className="flex items-center gap-2 text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-amber-500/80" />
              <span>CRECI SP: 198.442-J • Intermediação Imobiliária Credenciada</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-200 text-sm tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">O Imóvel</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Fotos</a>
              </li>
              <li>
                <a href="#planta" className="hover:text-amber-400 transition-colors">Planta Humanizada</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização</a>
              </li>
              <li>
                <a href="#valores" className="hover:text-amber-400 transition-colors">Condições & Valores</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Lead Link */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-200 text-sm tracking-wider uppercase">
              Atendimento Oficial
            </h4>
            <p className="leading-relaxed">
              Deseja receber a apresentação completa e agendar uma visita presencial?
            </p>
            <a
              id="footer-forms-link"
              href={APARTMENT_DATA.interestFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold py-1 border-b border-amber-500/40 hover:border-amber-400 transition-all"
            >
              <span>Formulário: Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-neutral-500 pt-2">
              Horário de visitas: Segunda a Sábado das 09h às 18h | Domingo sob consulta prévia.
            </p>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Residencial Jardins Imperial. Todos os direitos reservados. As imagens fotográficas retratam o imóvel real e suas áreas comuns.
          </p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-neutral-400">Política de Privacidade</a>
            <span>•</span>
            <a
              href={APARTMENT_DATA.interestFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400"
            >
              Formulário de Interesse (Google Forms)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
