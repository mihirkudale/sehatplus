import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  'https://www.sehatplus.in/wp-content/uploads/2022/12/logos_gallery_RHC-150x150.jpg',
  'https://www.sehatplus.in/wp-content/uploads/2022/12/logos_gallery_KDAH-150x150.jpg',
  'https://www.sehatplus.in/wp-content/uploads/2022/12/logos_gallery_Harkisondas-150x150.jpg',
  'https://www.sehatplus.in/wp-content/uploads/2022/12/logos_gallery_Jupiter-150x150.jpg',
  'https://www.sehatplus.in/wp-content/uploads/2022/12/logos_gallery_Inamdar-150x150.jpg',
];

export default function Association() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-black text-[#2e2e2e] mb-2 font-serif italic">Our Associations</h2>
          <p className="text-gray-500 mb-16 text-lg">Partnering with leading medical institutions for clinical excellence.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 items-center">
          {LOGOS.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-40 h-40 bg-white rounded-full flex items-center justify-center p-6 shadow-xl grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
            >
              <img src={src} alt="Association Logo" className="max-w-full h-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
