import React from 'react';
import { motion } from 'motion/react';
import { PageHero } from '../components/Layout';
import { IMAGES, SUITES } from '../constants';

import { useBooking } from '../BookingContext';

export const SuitesPage = () => {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero 
        title="Signature Suites" 
        subtitle="Experience the perfect blend of coastal elegance and modern minimalist design."
        image={IMAGES.luxurySuite}
      />
      
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {SUITES.map((suite, index) => (
              <motion.div 
                key={suite.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="h-[400px] rounded-[40px] overflow-hidden mb-8 shadow-2xl relative">
                  <img 
                    src={suite.image} 
                    alt={suite.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    {suite.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-brand-text">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{suite.title}</h3>
                    <p className="text-brand-text-muted max-w-sm">{suite.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-brand-primary">${suite.price}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">Per Night</p>
                  </div>
                </div>

                <button 
                  onClick={openBooking}
                  className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold hover:bg-brand-primary-light transition-all active:scale-[0.98]"
                >
                  Check Availability
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section for details per suite can be added here */}
    </>
  );
};
