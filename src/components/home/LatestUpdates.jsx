import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: "How to Read Food Labels: A Beginner's Guide",
    date: 'April 4, 2025',
    category: 'Nutrition',
    excerpt: "Understanding food labels can feel overwhelming at first, but it's a key step toward making informed, healthier choices.",
    href: 'https://www.sehatplus.in/how-to-read-food-labels-a-beginners-guide/',
  },
  {
    title: 'Why Hydration Matters in the Summer Months',
    date: 'April 4, 2025',
    category: 'Nutrition',
    excerpt: "As the temperature rises, staying hydrated becomes essential for your health and well-being. Hydration is crucial to maintain your body's…",
    href: 'https://www.sehatplus.in/why-hydration-matters-in-the-summer-months/',
  },
  {
    title: 'Why Nutritional Supplements',
    date: 'August 4, 2023',
    category: 'Blog',
    excerpt: 'I can do without them, do I really need to take them? This is the most common question asked by…',
    href: 'https://www.sehatplus.in/why-nutritional-supplements/',
    image: 'https://www.sehatplus.in/wp-content/uploads/2023/08/Supplements-featured-image-1536x1024.jpg'
  },
];

const FILTERS = ['All Post', 'Blog', 'Events', 'Nutrition', 'Uncategorized'];

export default function LatestUpdates() {
  const [activeFilter, setActiveFilter] = useState('All Post');
  const filtered = activeFilter === 'All Post' ? POSTS : POSTS.filter(p => p.category === activeFilter);
  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none bg-[url('https://www.sehatplus.in/wp-content/uploads/2022/11/fruit_bg.png')] bg-contain bg-no-repeat" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-5 pointer-events-none bg-[url('https://www.sehatplus.in/wp-content/uploads/2022/11/vegetable.png')] bg-contain bg-no-repeat" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="text-[14px] font-bold text-[#8c7161] uppercase tracking-[2px] mb-2">Our Latest Updates</div>
          <h2 className="text-3xl md:text-5xl font-bold text-black">Articles News About Sehat+</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#8c7161] text-white shadow-md'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              {p.image && (
                <div className="h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-8 flex-grow">
                <div className="text-[12px] font-bold text-gray-400 mb-4">{p.date} /</div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug">
                  <a href={p.href} target="_blank" rel="noreferrer" className="hover:text-[#8c7161] transition-colors">{p.title}</a>
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                  {p.excerpt}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#8c7161] font-bold text-sm uppercase tracking-wider"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.sehatplus.in/page/2/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#8c7161] hover:bg-[#7a6254] text-white px-10 py-4 rounded-lg text-[13px] font-bold uppercase tracking-widest transition-colors shadow-lg"
          >
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}
