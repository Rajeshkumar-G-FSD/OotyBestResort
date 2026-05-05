import React from 'react';
import { PageHero } from '../components/Layout';
import { IMAGES } from '../constants';

export const WellnessPage = () => (
  <>
    <PageHero 
      title="Wellness & Spa" 
      subtitle="Rejuvenate your soul in our sanctuary of silence."
      image={IMAGES.wellness}
    />
    
    <section className="py-24 px-6 md:px-12 bg-white text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-headline-md">Holistic Harmony</h2>
        <p className="text-brand-text-muted text-lg leading-relaxed">
          Inspired by the ancient rhythms of nature, our wellness programs are designed to restore balance to your body, mind, and spirit. From transcendental meditation to deep tissue seaflower oil massages, find your center at Aura.
        </p>
        <div className="grid sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-4xl">🧘</div>
            <h4 className="font-bold">Yoga</h4>
            <p className="text-xs text-brand-text-muted uppercase tracking-widest">Sunset & Sunrise</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🧖</div>
            <h4 className="font-bold">Spa</h4>
            <p className="text-xs text-brand-text-muted uppercase tracking-widest">Natural Elements</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🌊</div>
            <h4 className="font-bold">Hydro</h4>
            <p className="text-xs text-brand-text-muted uppercase tracking-widest">Mineral Pools</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
