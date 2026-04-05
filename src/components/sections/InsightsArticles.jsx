import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, ChevronRight } from 'lucide-react';

const articles = [
  {
    tag: 'Hormonal Health',
    title: 'Understanding the Link Between Food and Hormonal Balance',
    description:
      'How dietary patterns influence insulin resistance, androgen levels, and cycle regularity in women with PCOS.',
    readTime: '8 min read',
  },
  {
    tag: 'Metabolic Health',
    title: 'A Nutrition-First Approach to Managing Blood Sugar',
    description:
      'Evidence-based strategies to address blood sugar dysregulation through targeted nutrition and lifestyle changes.',
    readTime: '10 min read',
  },
  {
    tag: 'Thyroid & Food',
    title: 'Nutrients That Support Thyroid Function',
    description:
      'A clinical overview of selenium, iodine, zinc, and the goitrogen question — what the evidence actually says.',
    readTime: '6 min read',
  },
  {
    tag: 'Cardiac Recovery',
    title: 'Cardiac Recovery Nutrition: Beyond the Low-Fat Myth',
    description:
      'Why anti-inflammatory eating, fibre quality, and omega-3 sources matter more than blanket fat restriction.',
    readTime: '12 min read',
  },
];

const InsightsArticles = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background border-t border-charcoal/8">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Knowledge Hub
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            Insights &amp; Articles
          </h2>
          <p className="text-charcoal/55 text-sm max-w-lg mx-auto leading-relaxed">
            Evidence-based reads on the conditions we treat most — written for patients, families, and professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-[11px] font-semibold px-3 py-1.5 rounded-full w-fit mb-5">
                <BookOpen size={11} />
                {article.tag}
              </div>
              <h3 className="text-base font-serif text-charcoal mb-3 leading-snug flex-grow">
                {article.title}
              </h3>
              <p className="text-xs text-charcoal/55 leading-relaxed mb-5">
                {article.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/8">
                <div className="flex items-center gap-1.5 text-[11px] text-charcoal/40">
                  <Clock size={11} />
                  {article.readTime}
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
                  Read
                  <ChevronRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-center mt-10"
        >
          <button
            onClick={() => navigate('/academia')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-charcoal/20 text-charcoal/70 text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200"
          >
            View All Articles
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsArticles;
