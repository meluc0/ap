import React, { useState } from 'react';
import { 
  Maximize, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles,
  Camera
} from 'lucide-react';
import { APARTMENT_DATA, ApartmentPhoto } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'living', label: 'Living & Estar' },
    { id: 'varanda', label: 'Varanda Gourmet' },
    { id: 'suite', label: 'Suítes & Banheiros' },
    { id: 'cozinha', label: 'Cozinha' },
    { id: 'lazer', label: 'Lazer & Condomínio' }
  ];

  const filteredPhotos = selectedCategory === 'todos' 
    ? APARTMENT_DATA.photos 
    : APARTMENT_DATA.photos.filter(p => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-neutral-900/40 relative border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>Tour Visual</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Galeria de Ambientes
            </h2>
            <p className="text-neutral-400 text-base max-w-xl">
              Confira as fotos reais do imóvel e das áreas de lazer exclusivas do edifício.
            </p>
          </div>

          <InterestButton
            id="gallery-top-cta"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Agendar visita presencial"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Action Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-950/70 border border-neutral-700/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                  {photo.category.toUpperCase()}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery bottom action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-neutral-400 text-sm">
            Deseja ver o apartamento pessoalmente? Agende uma visita guiada sem compromisso.
          </p>
          <InterestButton
            id="gallery-bottom-interest"
            variant="gold"
            label="Tenho Interesse"
            sublabel="Quero conhecer o apartamento"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-black">
              <img
                src={filteredPhotos[activePhotoIndex].url}
                alt={filteredPhotos[activePhotoIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption & Quick CTA inside Lightbox */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-neutral-900/80 border border-neutral-800 p-4 rounded-xl">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {filteredPhotos[activePhotoIndex].title}
                </h4>
                <p className="text-sm text-neutral-400">
                  {filteredPhotos[activePhotoIndex].description}
                </p>
                <span className="text-xs text-neutral-500 mt-1 block">
                  Foto {activePhotoIndex + 1} de {filteredPhotos.length}
                </span>
              </div>
              <InterestButton
                id="lightbox-interest-cta"
                variant="gold"
                label="Tenho Interesse"
                sublabel="Agendar visita"
                className="shrink-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
