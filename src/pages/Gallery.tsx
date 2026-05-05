import React from 'react';
import { PageHero } from '../components/Layout';

const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCxOtzDLAZ4RCYLthJiRE3UMpStKStqARD2w918Q2YahabuH84GwbT3u1qPmCYt8zQnSw7Zmz5hAS1C0-ILVi9cTjxTqmDLrNAfi46KngVBvm2rb_chtBZtyZVIzMgvJxTyV5STF5O9NJ8obr7Wyhk8Ixet6JGpcQaBiFPN6aB_3h19RuubclOq4YBxSrDzVlTeSImVZ5vY4xOSIMJYg56zaoO3Wkr6xvAwKIJezaobsgunuL9UTtngPKy6us-VIC2iTQAbgwyp-q4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBad2YkUYLKWT8dWMnTbDG5FDNPXynaHQxpRVFluoToyG72hoER_ZtDXgEXnI_jI-QHhMTYcOUNyjGHJcM-ziIe3Lj21FSIYFomwcpJZ_WYvcCXpD5FvROGh3Pr_XRE1akIUOgiA4opBFdbFAHiHFsXXBA1rbpWhvZQYjALT9g_hqy8m_eQ8byze2GXGqXjm594ApdJGBNXZQruM-ZePgrLtk7sGkJAlNMeo3nSck3vj82upnHXfuZiXhyl4eiwd2u6arqNYMCEoyM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-wmeCHC6ooMfJbRA09G50kJoFu44tOygXzVvtLFmSS9V3D5y56OisIOzkdblylWXh_SDMVSdW5QWVgcLUwvDob529SngDKF_YvnjI-FxnWGls5-G-l9iVmo07gM-ILTw-9td56hjJOrMIN5j5_q-HWMlro69jLjRvJwhaurfZR80sXPWKuJdxpXRRWa5R0S1fYHsyrQeNkepMcirjv4Gp51oRIVccb4V1bHArRAy6kxuiY9voi6m7QK3vq7aFOuR63IcV48gnFRQ",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
];

export const GalleryPage = () => (
  <>
    <PageHero 
      title="The Gallery" 
      subtitle="A visual journey through AURA Resort."
      image={GALLERY_IMAGES[3]}
    />
    
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {GALLERY_IMAGES.map((src, i) => (
          <div key={i} className="break-inside-avoid rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-zoom-in">
            <img src={src} alt={`Gallery item ${i}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  </>
);
