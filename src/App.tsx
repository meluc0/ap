import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UnitsShowcase } from './components/UnitsShowcase';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { FloatingInterestBar } from './components/FloatingInterestBar';
import { Footer } from './components/Footer';
import { FormSelectionModal } from './components/FormSelectionModal';
import { FormModalProvider, useFormModal } from './context/FormModalContext';

function MainAppContent() {
  const { isModalOpen, closeModal, selectedUnitId } = useFormModal();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <UnitsShowcase />
        <DifferentialsSection />
        <FaqSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Conversion Bar */}
      <FloatingInterestBar />

      {/* Form Selection Modal with the 3 Google Forms */}
      <FormSelectionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedUnitId={selectedUnitId} 
      />
    </div>
  );
}

export default function App() {
  return (
    <FormModalProvider>
      <MainAppContent />
    </FormModalProvider>
  );
}
