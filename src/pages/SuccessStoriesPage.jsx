import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const STORIES = [
  {
    name: 'Anirudha Kale',
    result: '11 Kg Weight Loss in 3 months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Anirudha-Kale-Icon.png',
    text: 'Simple and easy to follow diet charts provided by Sehat+ made it very comfortable. Yielding quick results motivated me to follow it further and improved my overall lifestyle.',
  },
  {
    name: 'Bhagyashree Deshpande',
    result: 'Reduced 27 Kg',
    img: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Bhagyashree-Deshpande-Icon.png',
    text: 'I managed to reduce the number of tablets from 3 tablets twice a day to 2 tablets a day. The best part is all this was managed in a natural way without any starvation or supplements.',
  },
  {
    name: 'Rajesh Kumar',
    result: '23 Kg Weight Loss in 10 months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Rajesh-Kumar-Icon.png',
    text: 'Facing multiple health problems after bariatric surgery, I consulted Dr. Ambika Nair. Within a few months, I started seeing positive results and my BP and diabetic medicines reduced drastically.',
  },
  {
    name: 'Nihar Trivedi',
    result: 'Lost 14 Kg',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te1.jpg',
    text: 'Dr. Ambika Nair was my consultant dietician when I was admitted to Jupiter Hospital Pune. The diet changes were gradual and sustainable, and I never felt starved throughout the process.',
  },
  {
    name: 'Priya Sharma',
    result: 'Diabetes & Weight Managed',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te2.jpg',
    text: 'After years of struggling with Type 2 diabetes, the Medical Nutrition Therapy program at Sehat+ helped me reduce my HbA1c from 9.2 to 6.8 in just 4 months.',
  },
  {
    name: 'Kavita Joshi',
    result: 'PCOS Controlled',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te3.jpg',
    text: 'My PCOS symptoms were unmanageable until I joined Sehat+. Mrs. Ambika\'s personalized diet plan helped regulate my hormones naturally without medication.',
  },
  {
    name: 'Suresh Patil',
    result: '18 Kg Weight Loss',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te4.jpg',
    text: 'The structured diet plan from Sehat+ was easy to follow even with my hectic work schedule. I lost 18 kg in 6 months and feel more energetic than ever.',
  },
  {
    name: 'Anita Kulkarni',
    result: 'Cholesterol & BP Normalised',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te5.jpg',
    text: 'Post my angioplasty, the doctors recommended a strict diet. Sehat+ helped me design a heart-healthy plan that brought my cholesterol and BP to normal within 3 months.',
  },
  {
    name: 'Ravi Deshmukh',
    result: '15 Kg Lost, Asthma Improved',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te6.jpg',
    text: 'I was suffering from obesity-induced asthma. After following the Sehat+ weight management program for 5 months, I lost 15 kg and my asthma episodes reduced significantly.',
  },
];

export default function SuccessStoriesPage() {
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
              Real Transformations
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              Success Stories
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">Success Stories</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-center max-w-2xl mx-auto text-lg text-gray-500 font-medium mb-20">
            Hear from our clients who have transformed their lives through scientific and sustainable nutrition guided by Mrs. Ambika Nair.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {STORIES.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-[var(--sp-gold)] text-[10px] font-black uppercase tracking-[4px] mb-2">{s.result}</span>
                    <h3 className="text-xl font-black text-white italic font-serif">{s.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-8 bg-[var(--sp-gold)]" />
                    <span className="text-[10px] font-black text-[var(--sp-gold)] uppercase tracking-[3px]">{s.result}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#2e2e2e] mb-3 group-hover:text-[var(--sp-brown)] transition-colors font-serif italic">{s.name}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium line-clamp-3">"{s.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-[var(--sp-brown)] rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black font-serif italic mb-4">Start Your Transformation</h3>
              <p className="text-white/80 text-lg font-medium mb-10 max-w-xl mx-auto">
                Join 5 lakh+ patients who have transformed their health with evidence-based nutrition at Sehat+.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-[var(--sp-brown)] px-10 py-5 rounded-xl text-[12px] font-black uppercase tracking-[4px] hover:bg-[var(--sp-gold)] hover:text-white transition-all shadow-xl"
              >
                Book Appointment <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
