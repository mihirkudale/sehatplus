import React from 'react';
import { motion } from 'framer-motion';

const POSTS = [
  {
    title: "How to Read Food Labels: A Beginner’s Guide",
    date: 'April 4, 2025',
    excerpt: 'Understanding food labels can feel overwhelming at first, but it’s a key step toward making informed, healthier choices.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    category: 'Nutrition'
  },
  {
    title: 'Why Hydration Matters in the Summer Months',
    date: 'April 4, 2025',
    excerpt: "As the temperature rises, staying hydrated becomes essential for your health and well-being. Hydration is crucial to maintain your body's...",
    image: 'https://images.unsplash.com/photo-1548919973-5dea585f3968?auto=format&fit=crop&q=80&w=800',
    category: 'Nutrition'
  },
  {
    title: 'Functional Foods for Longevity',
    date: 'Feb 12, 2024',
    excerpt: 'Functional foods are those that have a potentially positive effect on health beyond basic nutrition.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'Health'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#2e2e2e] font-serif italic"
          >
            Sehat+ Insights
          </motion.h1>
          <div className="h-1.5 w-24 bg-[var(--sp-gold)] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:row gap-16 lg:flex-row">
          <div className="flex-1 space-y-16">
            {POSTS.map((p, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-xl mb-8 border-4 border-[#faf9f6] transition-transform duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-[var(--sp-gold)] text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {p.category}
                  </div>
                </div>
                <div className="px-4">
                  <div className="text-[12px] font-black text-gray-400 uppercase tracking-[3px] mb-4">{p.date}</div>
                  <h2 className="text-3xl font-black text-[#2e2e2e] mb-6 font-serif italic group-hover:text-[var(--sp-brown)] transition-colors">{p.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">{p.excerpt}</p>
                  <button className="text-[12px] font-black text-[var(--sp-brown)] uppercase tracking-widest border-b-2 border-[var(--sp-gold)] pb-1 hover:gap-3 transition-all flex items-center gap-2">
                    Read Post <span>→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="w-full lg:w-96 space-y-12">
            <div className="bg-[#faf9f6] p-10 rounded-[3rem] border border-gray-100">
              <h3 className="text-xl font-black text-[#2e2e2e] mb-8 italic font-serif">Categories</h3>
              <ul className="space-y-4">
                {['Nutrition', 'Events', 'Lifestyle', 'Clinical', 'Recipes'].map((c) => (
                  <li key={c} className="flex items-center justify-between group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <span className="text-gray-500 font-bold group-hover:text-[var(--sp-brown)]">{c}</span>
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-gray-400 group-hover:bg-[var(--sp-gold)] group-hover:text-white shadow-sm transition-all">•</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
