import React from 'react';
import { PageHero } from '../components/Layout';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

export const DiningPage = () => (
  <>
    <PageHero 
      title="Coastal Dining" 
      subtitle="A culinary journey inspired by the tides and the earth."
      image={IMAGES.dining}
    />
    
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <span className="text-xs font-bold text-brand-primary tracking-[0.2em] uppercase">Farm to Table</span>
          <h2 className="text-headline-md">Organic & Organic Only</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            Our kitchen celebrates the bounty of the local region. From freshly caught seafood to sun-ripened produce from our organic garden, every dish is a testament to the purity of our ingredients.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-bold mb-2">Breakfast</h4>
              <p className="text-sm text-brand-text-muted">07:00 AM — 10:30 AM</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Dinner</h4>
              <p className="text-sm text-brand-text-muted">06:00 PM — 10:00 PM</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop" 
            alt="Dining Atmosphere" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  </>
);
