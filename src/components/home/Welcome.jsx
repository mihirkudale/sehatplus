import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Welcome() {
  const [activeTab, setActiveTab] = useState('sehat');

  return (
    <section id="about-us" className="relative bg-white pt-32 pb-24 overflow-visible">
      {/* Dot Pattern Decors */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8a6d5c 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8a6d5c 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column: Image with Decorative Elements */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[var(--sp-gold)]/10 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
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
                      ? 'https://www.sehatplus.in/wp-content/uploads/2024/06/updated-team.jpg'
                      : 'https://www.sehatplus.in/wp-content/uploads/2023/01/ambika-profile-home.jpg'
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
                      <p>
                        Your one-stop destination for your dietary lifestyle change needs. In this age of the new normal and things moving faster up the ladder of life than imagined, taking care of our body's dietary needs seems to be a challenging task for most.
                      </p>
                      <p>
                        Many of us find it difficult to understand the changing dietary needs of our bodies with our changing roles. This results in nutritional deficiencies and imbalances, leading to severe diseases. To stay fit, you need a customized diet chart from a wellness nutritionist.
                      </p>
                      <p>
                        Sehatplus is an advanced wellness nutrition centre where you are provided with proper nutritional guidance by experienced nutritionists. Your nutritional requirements are examined in this dietary clinic from a holistic viewpoint, and the dietary solutions are provided accordingly. With the help of Sehatplus, you can be sure that all your nutritional requirements are taken care of.
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
                        Ambika Nair, a renowned Clinical Nutritionist, IDF Certified Diabetic Educator and Registered Dietitian from Pune, brings over 28 years of practice experience. She has had an inspiring career as a Medical Nutritionist , Corporate Wellness coach, Lifestyle management expert and worked in Advisory Panel in several renowned organisations.
                      </p>
                      <p>
                        One of the most famous Dietitians in Pune, with thorough expertise and knowledge in Clinical Nutrition, Therapeutic Diets, Obesity management, Critical Care Nutrition to name a few, Ambika is currently working as a Senior Consultant at Jupiter Hospital Pune and has her own set up named Sehat plus, at Aundh, Pune.
                      </p>
                      <p>
                        She has treated over 2 lac patients since 1994 , and is a certified REBT, EFT Practitioner and NLP coach. She made valuable contributions while providing dietary advice to COVID-19 affected patients. She is also the Co-Convener of Indian Dietetic Association, Pune Chapter and RD Board representative of IDA, Pune.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}
