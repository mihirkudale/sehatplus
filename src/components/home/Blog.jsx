import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: 'How to Read Food Labels: A Beginner’s Guide',
    date: 'April 4, 2025',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
    excerpt: 'Understanding nutritional labels is the first step towards making informed food choices...'
  },
  {
    title: 'Why Hydration Matters in the Summer Months',
    date: 'April 4, 2025',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80',
    excerpt: 'Water is essential for every cell in your body. Learn why staying hydrated is critical...'
  },
  {
    title: 'Why Nutritional Supplements',
    date: 'August 4, 2023',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80',
    excerpt: 'Are supplements necessary for a healthy diet? We explore the science behind supplementation...'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
            <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">
              Our Latest Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2e2e2e] leading-tight font-serif italic max-w-4xl">
            Articles News About Sehat+
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.map((post, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-[0_40px_80px_-20px_rgba(139,115,103,0.3)] transition-all duration-700">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Floating Date Badge (2026 style) */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl border border-white/50">
                  <Calendar size={14} className="text-[var(--sp-gold)]" />
                  <span className="text-[10px] font-black text-[#2e2e2e] uppercase tracking-[2px]">{post.date}</span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl font-black text-[#2e2e2e] mb-5 group-hover:text-[var(--sp-brown)] transition-colors leading-tight font-serif italic">
                  {post.title}
                </h3>
                <p className="text-[15px] text-gray-500 mb-8 leading-relaxed line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[3px] text-[var(--sp-brown)] group-hover:text-[var(--sp-gold)] transition-all transform active:scale-95 group-hover:gap-5">
                  Read More <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--sp-brown)] hover:bg-[var(--sp-gold)] text-white px-12 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[4px] transition-all shadow-2xl shadow-stone-200"
          >
            Explore More Updates
          </motion.button>
        </div>
      </div>
    </section>
  );
}
