import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
      <div className="max-w-sm">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter mb-6 block">AURA RESORT</Link>
        <p className="text-brand-text-muted mb-8 leading-relaxed">
          A sanctuary of minimalism and modern luxury, designed to harmonize with nature and elevate the spirit.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-3 bg-brand-bg rounded-lg text-brand-text-muted hover:text-brand-primary transition-colors"><Globe size={20} /></a>
          <a href="#" className="p-3 bg-brand-bg rounded-lg text-brand-text-muted hover:text-brand-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text mb-6">Explore</h4>
          <ul className="space-y-4 text-brand-text-muted text-sm font-medium">
            <li><Link to="/sustainability" className="hover:text-brand-primary transition-colors">Sustainability</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link></li>
            <li><Link to="/press" className="hover:text-brand-primary transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text mb-6">Location</h4>
          <address className="not-italic text-brand-text-muted text-sm font-medium space-y-4">
            <p>123 Tranquil Bay Road</p>
            <p>Coastal Province, 90210</p>
            <p className="mt-8 text-brand-text">+1 (555) 123-4567</p>
          </address>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-50 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted/50">
        © 2024 AURA LUXURY RESORTS. IMMERSIVE TRANQUILITY.
      </p>
    </div>
  </footer>
);
