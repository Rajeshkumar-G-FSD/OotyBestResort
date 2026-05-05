import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { useBooking } from '../BookingContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Suites', path: '/suites' },
    { name: 'Dining', path: '/dining' },
    { name: 'Wellness', path: '/wellness' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-brand-text">
            AURA RESORT
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-brand-text-muted">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => 
                  `hover:text-brand-primary transition-colors relative group ${
                    isActive ? 'text-brand-primary' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <button 
              onClick={openBooking}
              className="hidden md:block bg-brand-primary text-white hover:bg-brand-primary-light px-5 py-2.5 rounded-xl font-medium transition-all active:scale-95 text-sm"
            >
              Book Now
            </button>
            <button 
              className="md:hidden text-brand-text"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-tighter">AURA</Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-2xl font-semibold">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => isActive ? 'text-brand-primary' : ''}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <button 
              onClick={() => { setMobileMenuOpen(false); openBooking(); }}
              className="mt-auto w-full bg-brand-primary text-white py-4 rounded-xl text-lg font-medium"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
