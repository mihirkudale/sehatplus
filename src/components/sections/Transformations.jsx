import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Transformations = () => {
  const testimonials = [
    {
      name: "Shreya V.",
      role: "Software Engineer",
      condition: "12-Week PCOS Protocol",
      text: "After struggling with PCOS for 10 years, Ambika's scientific approach changed everything. It wasn't just about weight; my energy, skin, and cycles normalized. For the first time, I have a sustainable relationship with food.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      name: "Rahul M.",
      role: "Entrepreneur",
      condition: "Gut Health & Diabetes",
      text: "I came for weight loss but stayed for the life enhancement. My HbA1c dropped from 8.2 to 5.8 in 6 months without restrictive dieting. Deeply grateful for the medical expertise and consistent support.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { value: '12+', label: 'Food Groups', sub: 'Reintroduced' },
    { value: '85%', label: 'Retention', sub: 'Habit Stability' },
    { value: '2500+', label: 'Lives', sub: 'Transformed' },
    { value: '15+', label: 'Countries', sub: 'Global Reach' }
  ];

  return (
    <section id="transformations" className="bg-white py-24">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-[color:var(--sp-primary)]/10 border border-[color:var(--sp-primary)]/20 mb-6 font-bold tracking-widest text-[var(--sp-primary)] text-xs uppercase">
            Real Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#1A1A1A]">
            Measurable Success, <br />
            <span className="italic font-normal text-[var(--sp-primary)]">Beyond the Scale.</span>
          </h2>
          <p className="text-lg text-gray-600">
            We focus on clinical markers, metabolic health, and sustainable habit formation. Here is how our patients have transformed.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[var(--sp-bg-muted)] border border-[var(--sp-border)] text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--sp-primary)] mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-[var(--sp-bg-muted)] border border-[var(--sp-border)] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-[color:var(--sp-primary)]/10 pointer-events-none group-hover:text-[color:var(--sp-primary)]/20 transition-colors">
                <Quote size={80} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                   <div className="flex gap-1 mb-2 text-[var(--sp-primary)]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--sp-primary)" />)}
                   </div>
                   <div className="text-sm font-bold uppercase tracking-widest text-[var(--sp-primary)] mb-2">
                     {t.condition}
                   </div>
                   <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
                     "{t.text}"
                   </p>
                   <div>
                      <h4 className="font-bold text-[#1A1A1A]">{t.name}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
