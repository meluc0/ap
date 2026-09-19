import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormModalContextType {
  isModalOpen: boolean;
  openModal: (unitId?: string) => void;
  closeModal: () => void;
  selectedUnitId?: string;
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export const FormModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnitId, setSelectedUnitId] = useState<string | undefined>(undefined);

  const openModal = (unitId?: string) => {
    setSelectedUnitId(unitId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FormModalContext.Provider value={{ isModalOpen, openModal, closeModal, selectedUnitId }}>
      {children}
    </FormModalContext.Provider>
  );
};

export const useFormModal = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
};
