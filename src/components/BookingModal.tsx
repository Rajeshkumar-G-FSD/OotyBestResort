import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, Phone, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputField = ({ label, icon: Icon, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted ml-1 flex items-center gap-2">
      <Icon size={12} className="text-brand-primary" />
      {label}
    </label>
    <input 
      className="w-full px-5 py-4 rounded-2xl bg-brand-bg/50 border border-transparent focus:border-brand-primary focus:bg-white transition-all outline-none text-brand-text placeholder:text-gray-300" 
      {...props} 
    />
  </div>
);

const SelectField = ({ label, icon: Icon, children, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted ml-1 flex items-center gap-2">
      <Icon size={12} className="text-brand-primary" />
      {label}
    </label>
    <div className="relative">
      <select 
        className="w-full px-5 py-4 rounded-2xl bg-brand-bg/50 border border-transparent focus:border-brand-primary focus:bg-white transition-all outline-none text-brand-text appearance-none cursor-pointer" 
        {...props}
      >
        {children}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-text-muted">
        <Clock size={16} />
      </div>
    </div>
  </div>
);

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] overflow-y-auto pointer-events-none flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto glass-dark w-full max-w-2xl rounded-[40px] shadow-2xl relative overflow-hidden bg-white/90"
            >
              {/* Header */}
              <div className="p-8 md:p-12 pb-0 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text mb-2">Reserve Your Stay</h2>
                  <p className="text-brand-text-muted">Fill in your details and we'll get back to you immediately.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 rounded-full hover:bg-brand-bg transition-colors text-brand-text-muted"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form className="p-8 md:p-12 pt-8 space-y-6" onSubmit={(e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                const message = `*Room Reservation Request - Aura Resort*%0A%0A` +
                  `*Name:* ${data.fullName}%0A` +
                  `*Phone:* ${data.phone}%0A` +
                  `*Secondary:* ${data.secondaryPhone || 'N/A'}%0A` +
                  `*Date:* ${data.date}%0A` +
                  `*Check-in:* ${data.checkin}%0A` +
                  `*Check-out:* ${data.checkout}%0A` +
                  `*Address:* ${data.address}`;
                
                const whatsappUrl = `https://wa.me/918072117912?text=${message}`;
                window.open(whatsappUrl, '_blank');
                
                onClose(); 
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name - Full width on desktop */}
                  <div className="md:col-span-2">
                    <InputField label="Full Name" icon={User} name="fullName" placeholder="Jane Doe" required />
                  </div>

                  {/* Phone Numbers */}
                  <InputField label="Phone Number" icon={Phone} name="phone" placeholder="+1 (555) 000-0000" type="tel" required />
                  <InputField label="Secondary Number" icon={Phone} name="secondaryPhone" placeholder="+1 (555) 111-1111" type="tel" />

                  {/* Booking Date & Address */}
                  <InputField label="Booking Date" icon={Calendar} name="date" type="date" required />
                  <InputField label="Address" icon={MapPin} name="address" placeholder="123 Ocean Drive, Coastal City" required />

                  {/* Check-in & Check-out Times */}
                  <SelectField label="Check-in Time" icon={Clock} name="checkin">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM (Default)</option>
                    <option>03:00 PM</option>
                  </SelectField>

                  <SelectField label="Check-out Time" icon={Clock} name="checkout">
                    <option>08:00 AM</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM (Default)</option>
                    <option>12:00 PM</option>
                  </SelectField>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-brand-primary text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary-light hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                  >
                    Confirm Booking Request
                  </button>
                </div>

                <p className="text-[10px] text-center text-brand-text-muted/60 uppercase tracking-widest font-bold">
                  Encryption secured • Aura Privacy Guaranteed
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
