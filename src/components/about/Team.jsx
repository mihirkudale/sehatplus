import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Ambika Nair',
    role: 'Founder - Director',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/02/prof1.jpg',
  },
  {
    name: 'Shruti Sonawane',
    role: 'Clinical Nutritionist',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/05/shruti_photo.jpg',
  },
  {
    name: 'Sheena Ignatius',
    role: 'Clinical Nutritionist',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/05/sheena_photo.jpg',
  },
  {
    name: 'Miloni Bhandari',
    role: 'Senior Consulting Nutritionist',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/bhandari.jpg',
  },
  {
    name: 'Dhanashri',
    role: 'Experienced Nutritionist',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/dhanashri.jpg',
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic"
          >
            Our Expert Team
          </motion.h2>
          <div className="h-1 w-20 bg-[var(--sp-gold)] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TEAM.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-[#faf9f6] shadow-xl group-hover:border-[var(--sp-gold)] transition-colors duration-500">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-black text-[#2e2e2e] italic font-serif">{p.name}</h3>
              <p className="text-[14px] text-gray-500 font-black uppercase tracking-[3px] mt-2 group-hover:text-[var(--sp-brown)] transition-colors">
                {p.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
