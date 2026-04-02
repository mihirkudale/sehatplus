import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const STATS = [
  { value: '5 Lakh+', label: 'Patients Healed' },
  { value: '800+', label: 'Publications' },
  { value: '5000+', label: 'Lectures Delivered' },
  { value: '25+', label: 'Hospitals Association' },
  { value: '30+', label: 'Nutritional Specialties' },
];

const CREDENTIALS = [
  {
    no: '01',
    title: 'All India Topper — RD Examination (2009)',
    desc: 'Topped the Registered Dietitian exam held by Indian Dietetic Association in June 2009 in the first attempt with distinction marks.',
  },
  {
    no: '02',
    title: 'First Rank — B.Sc. Nutrition & Dietetics',
    desc: 'First Rank while pursuing B.Sc. Nutrition and Dietetics from Anna Adarsh College for Women, Chennai.',
  },
  {
    no: '03',
    title: 'Panel Advisor',
    desc: 'Panel Advisor for Unilever (Horlicks Protein Plus), Nucgnex Pharmaceuticals, GeneClinicX, IDA and several renowned organisations.',
  },
  {
    no: '04',
    title: 'IDF Certified Diabetic Educator',
    desc: 'Internationally certified as a Diabetic Educator by the International Diabetes Federation (IDF), UK.',
  },
  {
    no: '05',
    title: 'Corporate Nutritionist',
    desc: 'Associated with leading corporates including Xoriant Solutions Pvt Ltd, SANDVIK and others as a corporate wellness consultant.',
  },
  {
    no: '06',
    title: 'Certified NLP Coach',
    desc: 'NLP and EFT Level-3 Matrix Practitioner, BFT, REBT and CBT Therapist. Also certified in Reiki and Crystal Healing.',
  },
  {
    no: '07',
    title: 'Co-Convener — IDA Pune Chapter',
    desc: 'Co-Convener of the Indian Dietetic Association, Pune Chapter and RD Board Representative of IDA Pune.',
  },
  {
    no: '08',
    title: 'Senior Consultant — Jupiter Hospital',
    desc: 'Currently serving as a Senior Clinical Nutritionist Consultant at Jupiter Hospital, Pune.',
  },
  {
    no: '09',
    title: 'COVID-19 Dietary Advisor',
    desc: 'Made valuable contributions by providing dietary advice and nutritional protocols for COVID-19 affected patients during the pandemic.',
  },
];

const MEDIA = [
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/1.jpg', label: 'Media Coverage' },
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/2.jpg', label: 'Award Ceremony' },
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/3.jpg', label: 'Conference' },
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/4.jpg', label: 'Recognition' },
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/5.jpg', label: 'Lecture Event' },
  { img: 'https://www.sehatplus.in/wp-content/uploads/2024/01/6.jpg', label: 'Media Feature' },
];

export default function AchievementsPage() {
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
              Awards & Recognition
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              Our Achievements
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">Achievements</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-[var(--sp-bronze-gradient)] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {STATS.map((s, i) => (
              <div key={i} className="border-r last:border-0 border-white/20 px-4">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-[10px] font-black text-white/60 uppercase tracking-[3px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials Grid */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
              <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">Credentials</span>
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] font-serif italic">
              Awards & Recognitions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CREDENTIALS.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.6 }}
                className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(140,110,99,0.15)] transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-5xl font-black text-gray-100 group-hover:text-[var(--sp-gold)] transition-colors duration-500 font-serif italic mb-5">
                  {c.no}
                </div>
                <h3 className="text-lg font-black text-[#2e2e2e] mb-4 group-hover:text-[var(--sp-brown)] transition-colors leading-tight">
                  {c.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{c.desc}</p>
                <div className="mt-8 w-10 h-[2px] bg-gray-100 group-hover:w-20 group-hover:bg-[var(--sp-gold)] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      <div className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
              <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">Gallery</span>
              <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2e2e2e] font-serif italic">
              Media & Press
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {MEDIA.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
              >
                <img
                  src={m.img}
                  alt={m.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-[11px] font-black uppercase tracking-widest">{m.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/media"
              className="inline-flex items-center gap-2 bg-[var(--sp-brown)] text-white px-10 py-4 rounded-xl text-[12px] font-black uppercase tracking-[4px] hover:bg-[var(--sp-gold)] transition-all shadow-xl"
            >
              View All Media <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
