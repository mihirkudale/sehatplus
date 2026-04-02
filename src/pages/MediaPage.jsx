import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, X, ZoomIn, Calendar } from 'lucide-react';

const MEDIA_ITEMS = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  img: `https://www.sehatplus.in/wp-content/uploads/2024/01/${i + 1}.jpg`
}));

export default function MediaPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-[#faf9f6]">
      {/* Breadcrumb Header */}
      <div className="bg-white py-20 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[11px] font-black uppercase tracking-[5px] text-[var(--sp-gold)] mb-4">
              Our Journey
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              Media & Press
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">Media</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_ITEMS.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                onClick={() => setSelectedImg(m.img)}
                className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group cursor-zoom-in"
              >
                <img 
                  src={m.img} 
                  alt={`Media ${m.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                     <ZoomIn size={32} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-[var(--sp-brown)] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="max-w-md">
                <h3 className="text-3xl md:text-5xl font-black font-serif italic mb-4">Start Your Journey</h3>
                <p className="text-white/80 text-lg leading-relaxed font-medium">
                  Experience the life-changing transformations at Sehat+. Book your personalized consultation today.
                </p>
              </div>
              <Link to="/contact" className="bg-[var(--sp-gold)] text-white px-10 py-5 rounded-xl text-[12px] font-black uppercase tracking-[4px] hover:scale-105 transition-all shadow-xl flex items-center gap-4">
                Book Appointment <Calendar size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={48} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-full aspect-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <img src={selectedImg} alt="Enlarged view" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
