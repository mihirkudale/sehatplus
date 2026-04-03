import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_DATA = {
  'wellness-nutrition': {
    title: 'Wellness Nutrition',
    tag: 'Holistic | Preventive',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Wellness-Nutrition-Banner.png',
    desc: 'Focuses on achieving optimal health through tailored nutritional plans that support overall well-being and energy levels. Proper nutritional guidance considering your body requirement which helps to improve lifestyle.',
    benefit: 'Better Immunity, Sustained Energy, Longevity'
  },
  'medical-nutrition-therapy': {
    title: 'Medical Nutrition Therapy',
    tag: 'Therapeutic | Clinical',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/medical-nutrition-therapy-banner-1.png',
    desc: "Medical nutrition therapy (MNT) is a type of nutrition counseling that is provided to people who have certain medical conditions. It involves a detailed assessment of the person's nutritional status.",
    benefit: 'Chronic Disease Management, Post-op Recovery'
  },
  'weight-management': {
    title: 'Weight Management',
    tag: 'Sustainable | Scientfic',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/weight-management-banner.png',
    desc: 'To lose weight, you need to have a balanced diet and a regular exercise routine. Weight management is the process of adopting long-term lifestyle modifications.',
    benefit: 'Fat Loss, Muscle Gain, Metabolic Health'
  },
  'my-life-coach': {
    title: 'My Life Coach',
    tag: 'Mindset | Vitality',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/my-life-coach-banner.png',
    desc: 'Trained in Neuro-Linguistic Programming, Reiki, and Crystal Healing, we help you align your mind and body for peak performance.',
    benefit: 'Clarity, Motivation, Peak Performance'
  },
  // Additional services can be added here
};

export default function ServiceContent({ id }) {
  const data = SERVICE_DATA[id || 'wellness-nutrition'];

  if (!data) return <div className="p-10 text-center font-black">Service section coming soon...</div>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-1"
      >
        <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl mb-12 border-8 border-white">
          <img 
             src={data.image} 
             alt={data.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 bg-[var(--sp-gold)] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
             {data.tag}
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] mb-8 font-serif italic">{data.title}</h2>
        <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-12 font-medium">
          <p>{data.desc}</p>
        </div>

        <div className="bg-[#faf9f6] p-10 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
           <div className="w-16 h-16 rounded-2xl bg-[var(--sp-gold)] shadow-lg flex items-center justify-center text-white text-2xl font-black">
              ✓
           </div>
           <div>
              <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[4px] mb-2">Primary Benefits</h4>
              <p className="text-xl font-bold text-[#2e2e2e]">{data.benefit}</p>
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
