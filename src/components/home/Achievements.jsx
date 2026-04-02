import React from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  { 
    no: '01',
    title: 'All India topper in Registered Dietitian Exam', 
    desc: 'Topped the RD exam held by Indian Dietetic Association in June 2009 in the first attempt with distinction marks.',
  },
  { 
    no: '02',
    title: 'All India topper in Registered Dietitian Exam', 
    desc: 'First Rank while pursuing B.Sc. Nutrition and Dietetics from Anna Adarsh College for women; Chennai.',
  },
  { 
    no: '03',
    title: 'Panel Advisor with renowned international brands',
    desc: 'Panel advisor for Unilever (Horlicks Protein plus), Nucgnex pharmaceuticals, GeneClinicX, IDA etc.'
  },
  {
    no: '04',
    title: 'Certified Diabetic Educator',
    desc: 'UK Certified Diabetic Educator.'
  },
  {
    no: '05',
    title: 'Corporate Nutritionist',
    desc: 'Associated with many corporates like Xoriant Solutions Pvt Ltd.'
  },
  {
    no: '06',
    title: 'Certified NLP Coach',
    desc: 'Certified NLP Coach (NLP AND EFT LEVEL -3 MATRIX Practitioner, BFT, REBT and CBT Therapist) and Counselor.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
            Our Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative flex gap-8 group"
            >
              <div className="relative shrink-0 w-24 h-24 flex items-center justify-center">
                {/* Brush Stroke Placeholder / Stylized Background Number */}
                <div className="absolute inset-0 bg-gray-100/50 rounded-full scale-110 group-hover:bg-[#8c7161]/10 transition-colors" />
                <span className="text-5xl font-bold text-gray-200 group-hover:text-[#8c7161]/30 transition-colors relative z-10">
                  {ach.no}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#8c7161] transition-colors uppercase">
                  {ach.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#8c7161] hover:bg-[#7a6254] text-white px-10 py-4 rounded-lg text-[13px] font-bold uppercase tracking-widest transition-colors shadow-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
