import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATS = [
  { value: '5 lakh+', label: 'Patients Healed' },
  { value: '800+', label: 'Publications' },
  { value: '5000+', label: 'Lectures Delivered' },
  { value: '25+', label: 'Hospitals Association' },
  { value: '30+', label: 'Nutritional Specialities' },
];

export default function AboutSehat() {
  const [activeTab, setActiveTab] = useState('sehat');

  return (
    <section id="about-us" className="relative bg-[#faf9f6] pt-32 pb-24 overflow-visible">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column: Image with Decorative Elements */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[var(--sp-gold)]/10 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  alt={activeTab === 'sehat' ? 'Sehat+ Team' : 'Ambika Nair'}
                  src={
                    activeTab === 'sehat'
                      ? 'https://www.sehatplus.in/wp-content/uploads/2022/12/sehat-plus-team.jpg'
                      : 'https://www.sehatplus.in/wp-content/uploads/2022/12/ambika-nair.png'
                  }
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Content with Tabs */}
          <div className="relative">
            <div className="flex gap-2 mb-10 p-1.5 bg-gray-100 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('sehat')}
                className={`px-10 py-3 rounded-lg text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'sehat' 
                    ? 'bg-[var(--sp-brown)] text-white shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-[var(--sp-brown)]'
                }`}
              >
                Sehat+
              </button>
              <button
                onClick={() => setActiveTab('ambika')}
                className={`px-10 py-3 rounded-lg text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'ambika' 
                    ? 'bg-[var(--sp-brown)] text-white shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-[var(--sp-brown)]'
                }`}
              >
                Ambika Nair
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {activeTab === 'sehat' ? (
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] leading-tight font-serif italic">
                      Welcome to Sehat+ a wellness nutrition centre.
                    </h2>
                    <div className="space-y-4 text-gray-500 leading-relaxed text-[17px] font-medium">
                      <p>Your one-stop destination for your dietary lifestyle change needs.</p>
                      <p>
                        In this age of the new normal and things moving faster up the ladder of life than imagined, 
                        taking care of our body’s dietary needs seems to be a challenging task for most. 
                      </p>
                      <p>
                        Sehatplus is an advanced wellness nutrition centre where you are provided with proper 
                        nutritional guidance by experienced nutritionists. solutions are provided accordingly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
                      <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">
                        Founder-Director
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] leading-tight font-serif italic">
                      Ambika Nair
                    </h2>
                    <div className="space-y-4 text-gray-500 leading-relaxed text-[17px] font-medium">
                      <p>
                        A renowned Clinical Nutritionist, IDF Certified Diabetic Educator and Registered Dietitian from Pune, brings over 28 years of practice experience.
                      </p>
                      <ul className="space-y-3 pt-4">
                        {[
                          'Co-Convener of Indian Dietetic Association, Pune Chapter',
                          'RD Board representative of IDA, Pune',
                          'Life member of Nutrition Society of India (NSI)',
                          'Expert in Corporate Wellness'
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 items-center group">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sp-gold)] group-hover:scale-150 transition-transform" />
                            <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Overlap Stats Strip (2026 Premium Design) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-6 z-30">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[var(--sp-bronze-gradient)] rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] p-10 md:p-14 overflow-hidden relative"
        >
          {/* Subtle noise/texture overlay for 2026 feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-4 items-center">
            {STATS.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group border-r last:border-0 border-white/10 px-4">
                <div className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                  {s.value}
                </div>
                <div className="text-[10px] md:text-[11px] font-black text-white/60 uppercase tracking-[3px] leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

