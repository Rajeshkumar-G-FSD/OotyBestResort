import React, { createContext, useContext, useState } from 'react';
import { BookingModal } from './components/BookingModal';
import { ChatBot } from './components/ChatBot';

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);
  const closeBooking = () => setIsModalOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal isOpen={isModalOpen} onClose={closeBooking} />
      <ChatBot />
    </BookingContext.Provider>
  );
};
