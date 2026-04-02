import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.sehatplus.in/wp-content/uploads/2022/12/my-life-coach-banner.png" 
          alt="About Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic font-serif">Our Mission</h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed opacity-90">
            To provide evidence-based nutritional guidance that transforms lives and promotes sustainable wellness across our community.
          </p>
        </motion.div>
      </div>

      <div className="bg-white relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-[#2e2e2e] mb-8 font-serif italic">About Sehat+ Wellness Nutrition Centre</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Sehatplus is an advanced wellness nutrition centre where you are provided with proper nutritional guidance by experienced nutritionists. solutions are provided accordingly.
                </p>
                <p>
                  In this age of the new normal and things moving faster up the ladder of life than imagined, taking care of our body’s dietary needs seems to be a challenging task for most. 
                </p>
                <p>
                  Nutrition forms the basis for any health parameters. Dietary patterns and lifestyle have a significant impact on health. This is where Sehat+ steps in to provide professional, scientific, and sustainable solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#faf9f6]"
            >
              <img 
                src="https://www.sehatplus.in/wp-content/uploads/2024/06/updated-team.jpg" 
                alt="Sehat Team" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
