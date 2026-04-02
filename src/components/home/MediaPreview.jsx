import React from 'react';
import { motion } from 'framer-motion';

const MEDIA_ITEMS = [
  {
    title: 'Media Coverage 1',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/01/1.jpg',
    source: 'Press'
  },
  {
    title: 'Media Coverage 2',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/01/2.jpg',
    source: 'Event'
  },
  {
    title: 'Media Coverage 3',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/01/3.jpg',
    source: 'Award'
  }
];


export default function MediaPreview() {
  return (
    <section id="media" className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
            <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">
              Media Presence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] leading-tight font-serif italic">
            Media Coverage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEDIA_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-square shadow-xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[var(--sp-gold)] text-[10px] font-black uppercase tracking-widest mb-2">{item.source}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
