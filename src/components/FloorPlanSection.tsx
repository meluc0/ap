import React, { useState } from 'react';
import { Layers, CheckCircle2, FileText, Download } from 'lucide-react';
import { APARTMENT_DATA, RoomSpec } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const FloorPlanSection: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const activeRoom = APARTMENT_DATA.rooms[activeRoomIndex];

  return (
    <section id="planta" className="py-20 lg:py-28 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Layout & Dimensões</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Planta Inteligente de 168m²
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Distribuição harmoniosa com separação total entre área social e área íntima, iluminação natural cruzada e aproveitamento total dos espaços.
          </p>
        </div>

        {/* Main Grid: Interactive Room Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Room Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Selecione o ambiente para ver detalhes:
            </h3>
            
            {APARTMENT_DATA.rooms.map((room, idx) => (
              <button
                key={room.name}
                onClick={() => setActiveRoomIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                  activeRoomIndex === idx
                    ? 'bg-amber-500/10 border-amber-500/50 text-white shadow-lg'
                    : 'bg-neutral-900/60 hover:bg-neutral-900 border-neutral-800 text-neutral-300'
                }`}
              >
                <div>
                  <h4 className="font-semibold text-base group-hover:text-amber-300 transition-colors">
                    {room.name}
                  </h4>
                  <span className="text-xs text-neutral-400">
                    Clique para detalhes técnicos
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  activeRoomIndex === idx
                    ? 'bg-amber-500 text-neutral-950'
                    : 'bg-neutral-800 text-amber-400 group-hover:bg-neutral-700'
                }`}>
                  {room.area}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Active Room Detail Card & Diagram */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Header of Active Room */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Ambiente Selecionado
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-white mt-1">
                  {activeRoom.name}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 bg-neutral-950 px-4 py-2 rounded-xl border border-neutral-800 self-start sm:self-auto">
                <span className="text-xs text-neutral-400">Metragem Útil:</span>
                <span className="text-lg font-bold text-amber-400">{activeRoom.area}</span>
              </div>
            </div>

            {/* Room Description */}
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {activeRoom.description}
            </p>

            {/* Highlights bullet points */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Especificações e Acabamentos:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeRoom.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2.5 bg-neutral-950/60 p-3 rounded-lg border border-neutral-800/80">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Cad Mockup Graphic Representation */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Caderno de especificações e planta humanizada completa disponíveis.</span>
              </div>
              <InterestButton
                id="floorplan-interest-cta"
                variant="gold"
                label="Tenho Interesse"
                sublabel="Receber planta completa em PDF"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
