import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

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
    name: 'Mr. Ramesh Bhupathy',
    result: 'Cholesterol Managed, 7 Kg Lost',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te2.jpg',
    text: 'Lost 7 kg in 4 months (75 to 68 kg). My LDL dropped from 122 to 54 and total cholesterol came down from 180 to 112. A complete health turnaround.',
  },
  {
    name: 'Madhuri',
    result: '12 Kg Weight Loss',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te3.jpg',
    text: 'Lost 12 kg with remarkable improvement in skin texture. I now have sustained energy levels throughout the day — something I hadn\'t felt in years.',
  },
  {
    name: 'Kusum',
    result: 'Asthma Resolved in 3 Months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te4.jpg',
    text: 'My severe asthma resolved completely within 3 months through dietary modifications and exercise. Muscle mass improved from 32.8 to 34.5.',
  },
  {
    name: 'Raju',
    result: 'HbA1c Reduced to 5.2%',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te5.jpg',
    text: 'Lost 6–7 kg in 3 months and my HbA1c came down to 5.2%. My walking capacity improved from just 5 minutes to 45 minutes. Life-changing results.',
  },
  {
    name: 'Rahul',
    result: 'HbA1c 10.9% → 5.10% in 6 Months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te6.jpg',
    text: 'My HbA1c dropped from 10.9% to 5.10% in 6 months. Diabetes medications were discontinued and fat percentage reduced from 25.5% to 22.9%.',
  },
  {
    name: 'Smita Kate',
    result: '9 Kg Lost in 2 Months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Smita-Kate-Icon.png',
    text: 'Lost 9 kg in just 2 months. Acne reduced noticeably and hair growth improved significantly. I now maintain sustainable eating habits with ease.',
  },
  {
    name: 'Riya Bora',
    result: '3 Kg Lost in 3 Months',
    img: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Riya-Bora-Icon.png',
    text: 'At just 8 years old, I lost 3 kg in 3 months. I learned portion control and healthy eating principles that I now carry forward in my daily life.',
  },
];

const CAROUSEL_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  src: `https://www.sehatplus.in/wp-content/uploads/2024/06/te${i + 1}.jpg`,
  alt: `Testimonial ${i + 1}`,
}));

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const visible = 4;
  const max = CAROUSEL_IMAGES.length - visible;

  const next = () => setIdx(i => Math.min(i + 1, max));
  const prev = () => setIdx(i => Math.max(i - 1, 0));

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx(i => (i >= max ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [max]);

  return (
    <div className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-[11px] font-black uppercase tracking-[5px] text-[var(--sp-gold)] mb-6 text-center">Testimonials</p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: -(idx * (100 / visible)) + '%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <div key={i} className="shrink-0" style={{ width: `calc(${100 / visible}% - 12px)` }}>
                <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md" />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <button onClick={prev} disabled={idx === 0} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[var(--sp-gold)] hover:text-white hover:border-[var(--sp-gold)] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} disabled={idx >= max} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[var(--sp-gold)] hover:text-white hover:border-[var(--sp-gold)] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

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

      <TestimonialCarousel />

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
