import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const stats = [
    { value: '32+', label: 'Years Experience', icon: '🏆' },
    { value: 'Jupiter', label: 'Hospital Affiliated', icon: '🏥' },
    { value: 'Evidence', label: 'Based Nutrition', icon: '📝' },
    { value: 'Lifestyle', label: 'Led Care', icon: '🌱' },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0A0A0F] py-12">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-2xl mb-2 grayscale opacity-50">{stat.icon}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--sp-primary)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
