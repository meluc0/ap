import React from 'react';
import { ArrowUpRight, CalendarCheck } from 'lucide-react';
import { useFormModal } from '../context/FormModalContext';

interface InterestButtonProps {
  variant?: 'primary' | 'gold' | 'outline' | 'header' | 'floating' | 'card';
  label?: string;
  sublabel?: string;
  icon?: boolean;
  className?: string;
  id?: string;
  targetUnitId?: string;
}

export const InterestButton: React.FC<InterestButtonProps> = ({
  variant = 'primary',
  label = 'Tenho Interesse',
  sublabel,
  icon = true,
  className = '',
  id,
  targetUnitId
}) => {
  const { openModal } = useFormModal();

  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-950";

  let variantClasses = "";
  switch (variant) {
    case 'gold':
      variantClasses = "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 font-semibold";
      break;
    case 'outline':
      variantClasses = "border border-amber-500/60 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400";
      break;
    case 'header':
      variantClasses = "bg-amber-500 hover:bg-amber-400 text-neutral-950 px-4 py-2 text-sm font-semibold shadow-md shadow-amber-500/20";
      break;
    case 'floating':
      variantClasses = "bg-amber-500 hover:bg-amber-400 text-neutral-950 px-5 py-2.5 text-sm font-bold shadow-xl shadow-amber-500/30";
      break;
    case 'card':
      variantClasses = "bg-amber-500 hover:bg-amber-400 text-neutral-950 px-4 py-2.5 text-sm font-bold shadow-md shadow-amber-500/20 w-full";
      break;
    case 'primary':
    default:
      variantClasses = "bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-xl shadow-amber-500/25 font-semibold text-base";
      break;
  }

  const defaultPadding = (variant === 'header' || variant === 'floating' || variant === 'card') ? '' : 'px-6 py-3.5';

  return (
    <button
      type="button"
      id={id}
      onClick={() => openModal(targetUnitId)}
      className={`${baseClasses} ${variantClasses} ${defaultPadding} ${className}`}
      title="Escolha o apartamento: Vila Ema, Tatuapé ou Mooca"
    >
      <div className="flex items-center gap-2">
        {variant === 'primary' && <CalendarCheck className="w-4 h-4 text-neutral-900 transition-transform group-hover:scale-110" />}
        <div className="flex flex-col text-left leading-tight">
          <span className="whitespace-nowrap">{label}</span>
          {sublabel && (
            <span className="text-[11px] font-normal opacity-80 whitespace-nowrap">
              {sublabel}
            </span>
          )}
        </div>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
    </button>
  );
};
