import React from 'react';
import { PageHero } from '../components/Layout';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

const LISTED_EXPERIENCES = [
  { title: "Coastal Trekking", desc: "Explore the hidden coves and rugged cliffs with our expert guides.", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop" },
  { title: "Private Sailing", desc: "A luxury yacht excursion as the sun dips below the horizon.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop" },
  { title: "Art & Pottery", desc: "Discover local crafts and unleash your own creative energy.", img: "https://images.unsplash.com/photo-1565191993202-0969562723c3?q=80&w=1000&auto=format&fit=crop" }
];

export const ExperiencesPage = () => (
  <>
    <PageHero 
      title="Curated Experiences" 
      subtitle="Moments that linger long after you return home."
      image={IMAGES.experience}
    />
    
    <section className="py-24 px-6 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {LISTED_EXPERIENCES.map((exp, i) => (
          <motion.div 
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-[32px] overflow-hidden group hover:shadow-2xl transition-shadow"
          >
            <div className="h-64 overflow-hidden">
              <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);
