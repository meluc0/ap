import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, MapPin } from 'lucide-react';
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
    { label: "Apartamentos", href: "#unidades" },
    { label: "Vila Ema", href: "#unidades" },
    { label: "Tatuapé", href: "#unidades" },
    { label: "Mooca", href: "#unidades" },
    { label: "Diferenciais", href: "#diferenciais" },
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
              APARTAMENTOS SP
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase">
              Vila Ema • Tatuapé • Mooca
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <InterestButton
            id="nav-cta-button"
            variant="header"
            label="Tenho Interesse"
          />
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-amber-400 font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <InterestButton
              variant="gold"
              label="Tenho Interesse"
              sublabel="Escolha: Vila Ema, Tatuapé ou Mooca"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};
