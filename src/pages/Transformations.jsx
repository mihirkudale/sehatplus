import { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Heart, Clock, Target, Leaf, TrendingDown, ArrowRight, Quote,
} from 'lucide-react';

/* ── CountUp ─────────────────────────────────────────────────── */
const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Data ────────────────────────────────────────────────────── */
const stats = [
  { icon: Heart,  end: 2500, suffix: '+', label: 'Patients Guided' },
  { icon: Clock,  end: 32,   suffix: '+', label: 'Years Experience' },
  { icon: Target, end: 89,   suffix: '%', label: 'Goal Achievement' },
  { icon: Leaf,   end: 95,   suffix: '%', label: 'Sustainable Results' },
];

const journeys = [
  {
    id: 1,
    name: 'Priya M.', age: 42,
    condition: 'PCOS & Weight Management',
    duration: '8 months',
    story: "After years of struggling with irregular cycles and unexplained weight gain, I found clarity through personalised nutrition. The approach was never about restriction — it was about understanding my body's unique needs.",
    quote: "For the first time, I understood that my body wasn't working against me. It just needed the right support.",
    metrics: [
      { label: 'Weight',         before: '78 kg',    after: '65 kg',   change: '−13 kg' },
      { label: 'Waist',          before: '38 in',    after: '32 in',   change: '−6 in' },
      { label: 'Fasting Insulin',before: '18 μU/mL', after: '8 μU/mL', change: 'Normalised' },
    ],
    highlights: [
      'Regular menstrual cycles restored',
      'Energy levels improved significantly',
      'Sustainable eating habits established',
    ],
  },
  {
    id: 2,
    name: 'Rajesh K.', age: 55,
    condition: 'Post-Cardiac Surgery Recovery',
    duration: '12 months',
    story: 'Following my bypass surgery, I was overwhelmed with dietary restrictions. The guidance I received helped me not just recover, but thrive. My cardiologist was impressed with my progress.',
    quote: 'I went from fearing food to enjoying meals again — knowing each bite supports my heart health.',
    metrics: [
      { label: 'LDL Cholesterol', before: '168 mg/dL', after: '92 mg/dL',  change: '−45%' },
      { label: 'Triglycerides',   before: '248 mg/dL', after: '138 mg/dL', change: '−44%' },
      { label: 'Blood Pressure',  before: '148/95',    after: '122/78',    change: 'Optimal' },
    ],
    highlights: [
      'Medication dosage reduced',
      'Walking 5 km daily without fatigue',
      'Enjoying Indian cuisine the heart-healthy way',
    ],
  },
  {
    id: 3,
    name: 'Sunita D.', age: 38,
    condition: 'Thyroid & Fatigue',
    duration: '6 months',
    story: 'Chronic fatigue had become my normal. I thought it was just part of being a working mother. Through targeted nutrition, I discovered how food could be my medicine.',
    quote: 'I wake up with energy now. My children noticed the difference before I did.',
    metrics: [
      { label: 'TSH Levels',   before: '7.8 mIU/L', after: '2.4 mIU/L', change: 'Optimal' },
      { label: 'Vitamin D',    before: '12 ng/mL',  after: '48 ng/mL',  change: '+300%' },
      { label: 'Energy Score', before: '3/10',      after: '8/10',      change: '+166%' },
    ],
    highlights: [
      'Thyroid medication reduced by 50%',
      'Improved sleep quality',
      'Better stress management',
    ],
  },
  {
    id: 4,
    name: 'Amit S.', age: 48,
    condition: 'Type 2 Diabetes Management',
    duration: '10 months',
    story: 'My HbA1c was climbing despite medication. I was told I might need insulin soon. Through metabolic nutrition correction, I reversed that trajectory completely.',
    quote: "My doctor asked what I was doing differently. The answer was simple — eating right for MY body.",
    metrics: [
      { label: 'HbA1c',          before: '8.9%',      after: '6.2%',      change: '−30%' },
      { label: 'Fasting Glucose', before: '186 mg/dL', after: '102 mg/dL', change: '−45%' },
      { label: 'BMI',            before: '31.2',      after: '26.8',      change: '−14%' },
    ],
    highlights: [
      'Avoided insulin therapy',
      'Off one oral medication',
      'Sustained weight loss without hunger',
    ],
  },
];

const trustQuotes = [
  {
    name: 'Dr. Meera Joshi',
    role: 'Endocrinologist, Jupiter Hospital',
    quote: 'The collaborative approach with Sehat Plus has significantly improved outcomes for my patients with metabolic disorders. Evidence-based nutrition is the missing piece in chronic disease management.',
  },
  {
    name: 'Kavita R.',
    role: 'Patient, 3 years',
    quote: "This isn't just a diet programme. It's education that stays with you for life. I now understand why certain foods affect me the way they do.",
  },
  {
    name: 'Vikram P.',
    role: 'Family of 4, 18 months',
    quote: "Our entire family's health has transformed. The children now make better food choices naturally. It's become a lifestyle, not a temporary fix.",
  },
];

/* ── Stats bar sub-component ─────────────────────────────────── */
const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-12 border-y border-charcoal/10 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                className="text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <p className="font-serif text-3xl md:text-4xl text-charcoal mb-1">
                  {inView && <CountUp end={s.end} suffix={s.suffix} />}
                </p>
                <p className="text-sm text-charcoal/60">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Page ────────────────────────────────────────────────────── */
const Transformations = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Patient Transformations"
        path="/transformations"
        description="Real patient transformation stories from Sehat Plus — weight loss, diabetes reversal, hormonal balance, and more. See how clinical nutrition changes lives."
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Heart className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-wide">Real Results</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6"
            >
              Stories of Transformation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal/60 leading-relaxed"
            >
              Not dramatic before-and-after photos — but meaningful, measurable shifts that change
              lives. Every journey is unique, guided by science, and built to last.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <StatsBar />

      {/* ── Patient Journeys ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Patient Journeys
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Each story represents a partnership between patient commitment and clinical guidance.
            </p>
          </motion.div>

          <div className="space-y-16">
            {journeys.map((j, i) => (
              <motion.div
                key={j.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                className="bg-background border border-charcoal/10 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500"
              >
                {/* Card top */}
                <div className="p-8 md:p-10 border-b border-charcoal/10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
                        {j.name}, {j.age}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/60">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                          {j.condition}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" strokeWidth={1.5} />
                          {j.duration} journey
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-charcoal/70 leading-relaxed mb-6 max-w-3xl">{j.story}</p>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl"
                  >
                    <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="font-serif text-charcoal/80 italic">"{j.quote}"</p>
                  </motion.div>
                </div>

                {/* Card bottom */}
                <div className="p-8 md:p-10 bg-muted/20">
                  <h4 className="text-sm font-medium text-charcoal/50 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" />
                    Health Metrics Improvement
                  </h4>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {j.metrics.map((m, mi) => (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + mi * 0.1 }}
                        className="bg-background rounded-xl p-5 border border-charcoal/8 hover:border-primary/20 transition-colors duration-300"
                      >
                        <p className="text-xs font-medium text-charcoal/50 uppercase tracking-wider mb-3">
                          {m.label}
                        </p>
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-sm text-charcoal/40 line-through">{m.before}</p>
                            <p className="font-serif text-2xl text-charcoal">{m.after}</p>
                          </div>
                          <div className="flex items-center gap-1 text-primary font-medium">
                            <TrendingDown className="w-4 h-4" strokeWidth={2} />
                            <span className="text-sm">{m.change}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-medium text-charcoal/50 uppercase tracking-wider mb-4">
                      Key Outcomes
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {j.highlights.map((h, hi) => (
                        <motion.li
                          key={h}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 + hi * 0.05 }}
                          className="flex items-center gap-2 text-sm text-charcoal/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Words of Trust ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Words of Trust</h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              From patients, families, and healthcare professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustQuotes.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                className="bg-background border border-charcoal/10 rounded-xl p-8 hover:border-primary/20 transition-all duration-500 group"
              >
                <Quote
                  className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-500"
                  strokeWidth={1}
                />
                <p className="text-charcoal/70 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-medium text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────── */}
      <div className="py-12 border-t border-charcoal/10">
        <p className="text-xs text-center text-charcoal/40 max-w-2xl mx-auto px-6 leading-relaxed">
          Individual results vary based on starting health status, adherence to recommendations, and
          underlying medical conditions. All patient stories shared with consent. Names may be
          changed to protect privacy. Sehat Plus provides nutritional guidance as part of
          comprehensive healthcare — not as a replacement for medical treatment.
        </p>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Begin Your Transformation
            </h2>
            <p className="text-charcoal/60 mb-8 max-w-xl mx-auto">
              Every journey starts with a single step. Let us understand your unique health needs
              and create a plan that works for your life.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl shadow-lg transition-all duration-500"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Transformations;
