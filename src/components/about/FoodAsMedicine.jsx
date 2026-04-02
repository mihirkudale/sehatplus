import React from 'react';
import { motion } from 'framer-motion';

export default function FoodAsMedicine() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-50">
              <img 
                src="https://www.sehatplus.in/wp-content/uploads/2022/11/Mask-group.png" 
                alt="Food as Medicine" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2026 Accent element */}
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-48 h-48 bg-[var(--sp-gold)]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
              <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)] font-sans">
                Our Philosophy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#2e2e2e] leading-tight font-serif italic">
              “Food should be our medicine”
            </h2>
            
            <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-medium">
              <p>
                In the contemporary world, the fundamental role of nutrition in achieving and maintaining overall health is more critical than ever. At Sehat+, we believe that every nutrient you consume is a building block for your body's wellness.
              </p>
              <p>
                Our approach integrates natural, evidence-based dietary strategies tailored to your unique biological needs. We don't just provide a diet plan; we offer a transformation journey that aligns your nutritional habits with your long-term health goals.
              </p>
              <p>
                Whether it's managing chronic conditions or optimizing athletic performance, our team of clinical nutritionists works tirelessly to ensure your health is built on a foundation of scientific dietary excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
