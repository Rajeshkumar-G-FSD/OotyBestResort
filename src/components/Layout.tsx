import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const PageHero = ({ title, subtitle, image }: { title: string, subtitle?: string, image: string }) => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 glass-dark text-center p-8 md:p-12 rounded-[32px] max-w-2xl mx-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-brand-text-muted text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  </section>
);
