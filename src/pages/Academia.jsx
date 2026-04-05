import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, FlaskConical, Microscope, GraduationCap, Clock, ArrowRight,
  Play, Download, Users, FileText, Star, ChevronRight,
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────── */

const stats = [
  { value: '50+', label: 'Articles Published' },
  { value: '32+', label: 'Years of Research' },
  { value: '12', label: 'Webinars Conducted' },
  { value: '5000+', label: 'Readers Educated' },
];

const categories = ['All', 'Hormonal Health', 'Metabolic', 'Cardiac', 'Thyroid', 'Gut Health'];

const articles = [
  {
    category: 'Hormonal Health',
    tag: 'PCOS & Nutrition',
    title: 'Understanding the Link Between Food and Hormonal Balance',
    description:
      'How dietary patterns influence insulin resistance, androgen levels, and cycle regularity in women with PCOS.',
    readTime: '8 min read',
    type: 'Article',
    icon: BookOpen,
    featured: true,
  },
  {
    category: 'Metabolic',
    tag: 'Diabetes Management',
    title: 'A Nutrition-First Approach to Metabolic Syndrome',
    description:
      'Evidence-based strategies to address blood sugar dysregulation, central obesity, and dyslipidaemia through targeted nutrition.',
    readTime: '10 min read',
    type: 'Article',
    icon: FlaskConical,
  },
  {
    category: 'Thyroid',
    tag: 'Thyroid & Food',
    title: 'Nutrients That Support Thyroid Function',
    description:
      'A clinical overview of selenium, iodine, zinc, and the goitrogen question — what the evidence actually says.',
    readTime: '6 min read',
    type: 'Article',
    icon: Microscope,
  },
  {
    category: 'Cardiac',
    tag: 'Post-Cardiac Recovery',
    title: 'Cardiac Recovery Nutrition: Beyond the Low-Fat Myth',
    description:
      'Why anti-inflammatory eating, fibre quality, and omega-3 sources matter more than blanket fat restriction after surgery.',
    readTime: '12 min read',
    type: 'Article',
    icon: BookOpen,
  },
  {
    category: 'Gut Health',
    tag: 'Microbiome',
    title: 'The Gut–Brain–Hormone Axis in Clinical Practice',
    description:
      'How microbiome diversity influences oestrogen recycling, cortisol clearance, and systemic inflammation.',
    readTime: '9 min read',
    type: 'Article',
    icon: FlaskConical,
  },
  {
    category: 'Metabolic',
    tag: 'Weight Management',
    title: 'Set-Point Theory and Why Diets Fail Long-Term',
    description:
      'A clinical explanation of adaptive thermogenesis and how a sustainable nutrition approach works with your biology, not against it.',
    readTime: '7 min read',
    type: 'Article',
    icon: Microscope,
  },
];

const programs = [
  {
    icon: Play,
    type: 'Webinar',
    title: 'Nutrition for Hormonal Health',
    description:
      'A 90-minute live session covering PCOS, thyroid, and perimenopause nutrition strategies backed by current clinical evidence.',
    badge: 'Recorded',
    badgeColor: 'bg-primary/10 text-primary',
  },
  {
    icon: Download,
    type: 'Guide',
    title: 'The Clinical Plate Framework',
    description:
      'A downloadable reference guide for building nutritionally complete meals that support metabolic health and hormonal balance.',
    badge: 'Free Download',
    badgeColor: 'bg-charcoal/8 text-charcoal/60',
  },
  {
    icon: Users,
    type: 'Workshop',
    title: 'Family Nutrition Masterclass',
    description:
      'A practical workshop for families wanting to build healthy food habits that work for every age and health goal in the household.',
    badge: 'Upcoming',
    badgeColor: 'bg-amber-50 text-amber-700',
  },
];

const pillars = [
  {
    icon: FlaskConical,
    title: 'Evidence-Based',
    description:
      'Every recommendation is grounded in peer-reviewed clinical research, not trends or generalisations.',
  },
  {
    icon: Microscope,
    title: 'Clinically Validated',
    description:
      'Protocols tested and refined through 32+ years of direct patient care across complex chronic conditions.',
  },
  {
    icon: GraduationCap,
    title: 'Education-First',
    description:
      'Empowering patients with knowledge so they can make informed decisions about their own health for life.',
  },
  {
    icon: FileText,
    title: 'Continuously Updated',
    description:
      'Our content is regularly reviewed against the latest guidelines from leading nutrition and medical bodies.',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Academia = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-32 pb-0 bg-background min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5 mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
            <span className="text-primary">✦</span>
            Education &amp; Evidence
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
            The Clinical Learning Hub
          </h1>
          <p className="text-charcoal/60 text-sm max-w-xl mx-auto leading-relaxed">
            Evidence-based nutrition education for patients, caregivers, and health professionals.
            Knowledge that empowers real, lasting change.
          </p>
        </motion.div>
      </div>

      {/* ── Stats bar ────────────────────────────────────── */}
      <div className="border-t border-b border-charcoal/8 py-10 mb-20 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="container mx-auto px-6 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="space-y-1">
              <p className="text-3xl font-serif text-charcoal">{s.value}</p>
              <p className="text-xs text-charcoal/50">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Research Pillars ─────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-5xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 space-y-2"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Our Foundation
          </span>
          <h2 className="text-4xl font-serif text-charcoal">Built on Rigorous Science</h2>
          <p className="text-charcoal/50 text-sm max-w-lg mx-auto">
            Every article, guide, and program originates from the same clinical standards that inform our patient care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-charcoal mb-2">{p.title}</h3>
                <p className="text-xs text-charcoal/55 leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Articles ─────────────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-5xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 space-y-2"
        >
          <h2 className="text-4xl font-serif text-charcoal">Clinical Articles</h2>
          <p className="text-charcoal/50 text-sm">
            Deeply researched reads on the conditions we treat most.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border border-charcoal/15 text-charcoal/60 hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                {article.featured && (
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={10} className="text-amber-500 fill-amber-500" />
                    <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider">Featured</span>
                  </div>
                )}
                <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-[11px] font-semibold px-3 py-1.5 rounded-full w-fit mb-5">
                  <Icon size={11} />
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
            );
          })}
        </div>
      </div>

      {/* ── Educational Programs ──────────────────────────── */}
      <div className="bg-background border-t border-charcoal/8 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12 space-y-2"
          >
            <h2 className="text-4xl font-serif text-charcoal">Programs &amp; Resources</h2>
            <p className="text-charcoal/50 text-sm">
              Structured learning formats for deeper understanding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programs.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-2">
                    {prog.type}
                  </span>
                  <h3 className="text-base font-serif text-charcoal mb-3 leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-charcoal/55 leading-relaxed flex-grow">
                    {prog.description}
                  </p>
                  <button className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2.5 transition-all duration-200">
                    Learn More <ChevronRight size={13} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Newsletter CTA ───────────────────────────────── */}
      <div className="py-20 border-t border-charcoal/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="container mx-auto px-6 max-w-xl text-center space-y-5"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <BookOpen size={20} className="text-primary" />
          </div>
          <h2 className="text-4xl font-serif text-charcoal">Stay Informed</h2>
          <p className="text-charcoal/55 text-sm leading-relaxed">
            New clinical articles, webinar announcements, and nutrition insights — delivered when it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-primary transition-colors"
            />
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">
              Subscribe
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-[11px] text-charcoal/35">
            No spam. Unsubscribe anytime. Clinical content only.
          </p>
        </motion.div>
      </div>

      {/* ── Consultation CTA ─────────────────────────────── */}
      <div className="py-20 border-t border-charcoal/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-xl mx-auto px-6 space-y-4"
        >
          <h2 className="text-4xl font-serif text-charcoal">Ready to Apply This to Your Health?</h2>
          <p className="text-charcoal/55 text-sm leading-relaxed">
            Education is the first step. The next is a personalised plan built around your unique biology and goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200"
          >
            Book a Consultation
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>

    </div>
  );
};

export default Academia;
