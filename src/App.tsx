import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyStatsBar } from './components/KeyStatsBar';
import { DifferentialsSection } from './components/DifferentialsSection';
import { GallerySection } from './components/GallerySection';
import { FloorPlanSection } from './components/FloorPlanSection';
import { CondoAmenities } from './components/CondoAmenities';
import { LocationSection } from './components/LocationSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { FloatingInterestBar } from './components/FloatingInterestBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <KeyStatsBar />
        <DifferentialsSection />
        <GallerySection />
        <FloorPlanSection />
        <CondoAmenities />
        <LocationSection />
        <PricingSection />
        <FaqSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Conversion Bar */}
      <FloatingInterestBar />
    </div>
  );
}
