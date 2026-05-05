import React from 'react';
import { motion } from 'motion/react';
import { Bed, UtensilsCrossed, Waves, Flame, ChevronDown } from 'lucide-react';
import { IMAGES, SUITES } from '../constants';

import { useBooking } from '../BookingContext';

const AMENITIES = [
  { id: 'acc', icon: Bed, title: 'Accommodation', desc: 'Spacious suites with panoramic views and premium linens.' },
  { id: 'din', icon: UtensilsCrossed, title: 'Dining', desc: 'World-class culinary experiences featuring local, organic ingredients.' },
  { id: 'pool', icon: Waves, title: 'Swimming Pool', desc: 'Infinity edges merging seamlessly with the horizon line.' },
  { id: 'camp', icon: Flame, title: 'Campfire', desc: 'Evening gatherings under the stars with curated ambient music.' },
];

export const Home = () => {
  const { openBooking } = useBooking();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Resort View" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 glass-dark text-center p-8 md:p-16 rounded-[40px] max-w-2xl mx-6"
        >
          <h1 className="text-display-lg text-brand-text mb-6">
            Experience Luxury & Nature Together
          </h1>
          <p className="text-brand-text-muted mb-10 text-lg md:text-xl leading-relaxed">
            Immerse yourself in tranquility where modern design meets the untamed beauty of the coastal landscape.
          </p>
          <button 
            onClick={openBooking}
            className="bg-brand-primary text-white px-10 py-5 rounded-xl font-medium text-lg shadow-xl shadow-brand-primary/20 hover:bg-brand-primary-light transition-all active:scale-95"
          >
            Book Now
          </button>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[12px] font-bold text-brand-primary tracking-[0.2em] uppercase mb-6 block">The Essence</span>
          <h2 className="text-headline-md mb-8">A Sanctuary of Comfort</h2>
          <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed">
            Aura Resort is designed to be a seamless extension of its natural surroundings. Every architectural line and interior detail is crafted to evoke a sense of calm. Our spaces utilize generous light, minimalist glass structures, and soft, natural textures to provide an unparalleled luxury experience that feels both grounded and ethereal.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 px-6 md:px-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold text-brand-primary tracking-[0.2em] uppercase mb-4 block">Amenities</span>
            <h2 className="text-headline-md">Curated Experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((item) => (
              <div key={item.id} className="glass rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Quick View or similar can go here if needed, but we have separate pages now */}
    </>
  );
};
