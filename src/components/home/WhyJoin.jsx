import React from 'react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';

const REASONS = [
  'An advanced medical nutrition therapy centre',
  '27+ years of nutrition and health services',
  '100+ results in health transformations',
  'Expert team of Clinical Nutritionists',
  'Sustainable lifestyle management',
  'Easy to follow diet plans',
];

const STATS = [
  { value: '5 Lakh+', label: 'Patients Healed' },
  { value: '800+', label: 'Publications' },
  { value: '5000+', label: 'Lectures Delivered' },
  { value: '25+', label: 'Hospitals Association' },
  { value: '30+', label: 'Nutritional Specialties' },
];


export default function WhyJoin() {
  return (
    <section id="why-join" className="relative bg-[#faf9f6] pt-48 pb-32 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-[url('https://www.sehatplus.in/wp-content/uploads/2022/11/fruit_bg.png')] bg-no-repeat bg-right-top bg-contain" />
      <div className="absolute top-0 left-0 w-1/4 h-full opacity-10 pointer-events-none bg-[url('https://www.sehatplus.in/wp-content/uploads/2022/11/vegetable.png')] bg-no-repeat bg-left-top bg-contain" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
              <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">
                Therapeutic | Corporate | Lifestyle
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#2e2e2e] leading-tight font-serif italic mb-10">
              Why Join Sehat+
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {REASONS.map((x, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 border-2 border-[#8a6d5c] flex items-center justify-center bg-white">
                    <svg className="w-3 h-3 text-[#8a6d5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-gray-500 font-bold leading-tight group-hover:text-[#2e2e2e] transition-colors">
                    {x}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" 
                alt="Healthy Diet" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2026 Floating Card Trend */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl glass border border-white/50 hidden md:block">
              <div className="text-4xl font-black text-[var(--sp-brown)] mb-1">28+</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Years of Practice</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto px-6 mt-32 relative z-20">
        <div className="bg-[#8a6d5c] shadow-2xl overflow-hidden rounded-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {STATS.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                  {s.value}
                </div>
                <div className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-[2px] leading-tight group-hover:text-white transition-colors">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

