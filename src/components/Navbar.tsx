import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, PhoneCall } from 'lucide-react';
import { APARTMENT_DATA } from '../data/apartmentData';
import { InterestButton } from './InterestButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "O Imóvel", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Galeria", href: "#galeria" },
    { label: "Planta", href: "#planta" },
    { label: "Localização", href: "#localizacao" },
    { label: "Valores", href: "#valores" },
    { label: "Dúvidas", href: "#faq" }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="nav-brand-logo">
          <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-base sm:text-lg tracking-wider text-neutral-100 font-semibold group-hover:text-amber-400 transition-colors">
              JARDINS IMPERIAL
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase">
              Residencial de Alto Padrão
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <InterestButton
            id="nav-interest-button-desktop"
            variant="header"
            label="Tenho Interesse"
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <InterestButton
            id="nav-interest-button-mobile-quick"
            variant="header"
            label="Tenho Interesse"
            icon={false}
            className="text-xs px-3 py-1.5"
          />
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-neutral-950/98 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-amber-400 text-base py-2 font-medium border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-neutral-400 pb-1">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Plantão exclusivo de atendimento</span>
            </div>
            <InterestButton
              id="mobile-menu-cta"
              variant="gold"
              label="Tenho Interesse no Apartamento"
              sublabel="Agende uma visita privativa agora"
              className="w-full text-center"
            />
          </div>
        </div>
      )}
    </header>
  );
};
