import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, Bookmark } from 'lucide-react';

const articles = [
  {
    tag: 'Hormonal Health',
    title: 'Understanding PCOS: A Nutrition-First Approach',
    description:
      'Beyond medication — how targeted nutrition can transform PCOS management and restore hormonal harmony.',
    readTime: '8 min read',
    date: 'Dec 2024',
  },
  {
    tag: 'Medical Nutrition',
    title: 'Thyroid & Diet: The Missing Link',
    description:
      'Why your thyroid medication might not be enough — and what to eat for optimal function.',
    readTime: '5 min read',
    date: 'Nov 2024',
  },
  {
    tag: 'Lifestyle',
    title: 'The Art of Mindful Eating',
    description:
      'How slowing down transforms not just what you eat, but how your body responds.',
    readTime: '4 min read',
    date: 'Nov 2024',
  },
  {
    tag: 'Family Wellness',
    title: 'Raising Intuitive Eaters',
    description:
      'Building healthy relationships with food — lessons that last a lifetime.',
    readTime: '6 min read',
    date: 'Oct 2024',
  },
];

const InsightsArticles = () => {
  const navigate = useNavigate();
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Learn With Us
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            Insights &amp; Articles
          </h2>
          <p className="text-charcoal/55 text-sm max-w-lg mx-auto leading-relaxed">
            Evidence-based perspectives on nutrition, wellness, and mindful living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => navigate('/academia')}
            className="bg-white rounded-3xl p-10 border border-charcoal/5 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <div className="bg-[#587c6b] text-white text-[11px] font-medium px-4 py-1.5 rounded-full w-fit mb-8">
                Featured
              </div>
              <p className="text-primary text-xs font-semibold mb-3">{featured.tag}</p>
              <h3 className="text-[32px] font-serif text-charcoal mb-4 leading-snug">
                {featured.title}
              </h3>
              <p className="text-base text-charcoal/60 leading-relaxed mb-12">
                {featured.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-xs text-charcoal/50 pt-8 border-t border-charcoal/5">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-charcoal/40" />
                {featured.readTime}
                <span className="mx-1 text-charcoal/30">•</span>
                {featured.date}
              </div>
              <Bookmark size={18} className="text-charcoal/40 hover:text-charcoal transition-colors" />
            </div>
          </motion.div>

          {/* Stacked Articles */}
          <div className="flex flex-col gap-4">
            {others.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                onClick={() => navigate('/academia')}
                className="bg-white rounded-3xl p-7 border border-charcoal/5 shadow-sm flex flex-col justify-between flex-grow cursor-pointer hover:shadow-md transition-shadow duration-300 min-h-[160px]"
              >
                <div>
                  <p className="text-primary text-[10px] font-semibold mb-2">{article.tag}</p>
                  <h4 className="text-[20px] font-serif text-charcoal mb-2 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[13px] text-charcoal/60 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-[11px] text-charcoal/50 mt-6 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-charcoal/40" />
                    {article.readTime}
                    <span className="mx-1 text-charcoal/30">•</span>
                    {article.date}
                  </div>
                  <Bookmark size={15} className="text-charcoal/40 hover:text-charcoal transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsArticles;
