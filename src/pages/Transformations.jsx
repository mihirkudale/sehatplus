import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Clock, Target, Leaf, Activity, TrendingDown, ArrowRight, Quote } from 'lucide-react';

const stats = [
  { icon: Heart, target: 2500, suffix: '+', label: 'Patients Guided' },
  { icon: Clock, target: 32, suffix: '+', label: 'Years Experience' },
  { icon: Target, target: 89, suffix: '%', label: 'Goal Achievement' },
  { icon: Leaf, target: 95, suffix: '%', label: 'Sustainable Results' },
];

const CountUp = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const journeys = [
  {
    name: 'Priya M., 42',
    tag: 'PCOS & Weight Management',
    duration: '8 months journey',
    story:
      'After years of struggling with irregular cycles and unexplained weight gain, I found clarity through personalised nutrition. The approach was never about restriction — it was about understanding my body\'s unique needs.',
    quote:
      'For the first time, I understood that my body wasn\'t working against me. It just needed the right support.',
    metrics: [
      { label: 'WEIGHT LOSS', before: '78 kg', after: '65 kg', change: '-13 kg' },
      { label: 'WAIST CIRCUMFERENCE', before: '38 in', after: '32 in', change: '-6 in' },
      { label: 'FASTING INSULIN', before: '18 μU/mL', after: '8 μU/mL', change: 'Normalised' },
    ],
    outcomes: [
      'Regular menstrual cycles restored',
      'Energy levels improved significantly',
      'Sustainable eating habits established',
    ],
  },
  {
    name: 'Rajesh K., 55',
    tag: 'Post-Cardiac Surgery Recovery',
    duration: '12 months journey',
    story:
      'Following my bypass surgery, I was overwhelmed with dietary restrictions. The guidance I received helped me not just recover, but thrive. My cardiologist was impressed with my progress.',
    quote:
      'I went from fearing food to enjoying meals again — knowing each bite supports my heart health.',
    metrics: [
      { label: 'LDL CHOLESTEROL', before: '168 mg/dL', after: '92 mg/dL', change: '-45%' },
      { label: 'TRIGLYCERIDES', before: '248 mg/dL', after: '138 mg/dL', change: '-44%' },
      { label: 'BLOOD PRESSURE', before: '148/95', after: '122/78', change: 'Optimal' },
    ],
    outcomes: [
      'Medication dosage reduced',
      'Walking 5 km daily without fatigue',
      'Enjoying Indian cuisine heart-healthy way',
    ],
  },
  {
    name: 'Sunita D., 38',
    tag: 'Thyroid & Fatigue',
    duration: '6 months journey',
    story:
      'Chronic fatigue had become my normal. I thought it was just part of being a working mother. Through targeted nutrition, I discovered how food could be my medicine.',
    quote:
      'I wake up with energy now. My children noticed the difference before I did.',
    metrics: [
      { label: 'TSH LEVELS', before: '7.8 mIU/L', after: '2.4 mIU/L', change: 'Optimal' },
      { label: 'VITAMIN D', before: '12 ng/mL', after: '48 ng/mL', change: '+300%' },
      { label: 'ENERGY SCORE', before: '3/10', after: '8/10', change: '+166%' },
    ],
    outcomes: [
      'Thyroid medication reduced by 50%',
      'Improved sleep quality',
      'Better stress management',
    ],
  },
  {
    name: 'Amit S., 48',
    tag: 'Type 2 Diabetes Management',
    duration: '10 months journey',
    story:
      'My HbA1c was climbing despite medication. I was told I might need insulin soon. Through metabolic nutrition correction, I reversed that trajectory completely.',
    quote:
      'My doctor asked what I was doing differently. The answer was simple — eating right for MY body.',
    metrics: [
      { label: 'HBA1C', before: '8.9%', after: '6.2%', change: '-30%' },
      { label: 'FASTING GLUCOSE', before: '186 mg/dL', after: '102 mg/dL', change: '-45%' },
      { label: 'BMI', before: '31.3', after: '26.8', change: '-14%' },
    ],
    outcomes: [
      'Avoided insulin therapy',
      'Off one oral medication',
      'Sustained weight loss without hunger',
    ],
  },
];

const trustQuotes = [
  {
    quote:
      'The collaborative approach with Sehat Plus has significantly improved outcomes for my patients with metabolic disorders. Evidence-based nutrition is the missing piece in chronic disease management.',
    name: 'Dr. Meera Joshi',
    role: 'Endocrinologist, Jupiter Hospital',
  },
  {
    quote:
      'This isn\'t just a diet programme. It\'s education that stays with you for life. I now understand why certain foods affect me the way they do.',
    name: 'Kavita R.',
    role: 'Patient, 3 years',
  },
  {
    quote:
      'Our entire family\'s health has transformed. The children now make better food choices naturally. It\'s become a lifestyle, not a temporary fix.',
    name: 'Vikram P.',
    role: 'Family of 4, 18 months',
  },
];

const Transformations = () => {
  const navigate = useNavigate();

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
            Real Results
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
            Stories of Transformation
          </h1>
          <p className="text-charcoal/60 text-sm max-w-xl mx-auto leading-relaxed">
            Not dramatic before-and-after photos — but meaningful, measurable shifts that change
            lives. Every journey is unique, guided by science, and built to last.
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
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="space-y-2">
                <Icon size={20} className="text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-3xl font-serif text-charcoal">
                  <CountUp target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-xs text-charcoal/50">{s.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Patient Journeys ─────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-5xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 space-y-2"
        >
          <h2 className="text-4xl font-serif text-charcoal">Patient Journeys</h2>
          <p className="text-charcoal/50 text-sm">
            Each story represents a partnership between patient commitment and clinical guidance.
          </p>
        </motion.div>

        <div className="space-y-6">
          {journeys.map((j, index) => (
            <motion.div
              key={j.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="bg-white rounded-2xl border border-charcoal/8 shadow-sm overflow-hidden"
            >
              {/* Card top */}
              <div className="p-8 pb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-serif text-charcoal">{j.name}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="bg-charcoal/8 text-charcoal/60 text-xs font-medium px-3 py-1 rounded-full">
                    {j.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-charcoal/40">
                    <Clock size={12} />
                    {j.duration}
                  </span>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-5">{j.story}</p>
                {/* Quote */}
                <div className="rounded-xl px-5 py-4 flex gap-3 items-start" style={{ backgroundColor: '#FAF8F5' }}>
                  <Quote size={28} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm italic text-charcoal/60 leading-relaxed">
                    "{j.quote}"
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="border-t border-charcoal/8 px-8 py-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={13} className="text-charcoal/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">
                    Health Metrics Improvement
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {j.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F5' }}>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal/40 mb-2">
                        {m.label}
                      </p>
                      <p className="text-xs text-charcoal/30 line-through mb-1">{m.before}</p>
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-xl font-serif text-charcoal">{m.after}</p>
                        <span className="flex items-center gap-0.5 text-xs font-medium text-primary whitespace-nowrap">
                          <TrendingDown size={11} />
                          {m.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-3">
                    Key Outcomes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4">
                    {j.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 flex-shrink-0" />
                        <p className="text-xs text-charcoal/60">{o}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Words of Trust ───────────────────────────────── */}
      <div className="bg-background border-t border-charcoal/8 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12 space-y-2"
          >
            <h2 className="text-4xl font-serif text-charcoal">Words of Trust</h2>
            <p className="text-charcoal/50 text-sm">
              From patients, families, and healthcare professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trustQuotes.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm flex flex-col"
              >
                <Quote size={24} className="text-charcoal/25 mb-4 flex-shrink-0" />
                <p className="text-sm text-charcoal/70 leading-relaxed flex-grow mb-5">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/40">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Disclaimer ───────────────────────────────────── */}
      <div className="py-10 border-t border-charcoal/8">
        <p className="text-center text-[11px] text-charcoal/35 max-w-2xl mx-auto px-6 leading-relaxed">
          Individual results vary based on starting health status, adherence to recommendations, and
          underlying medical conditions. All patient stories shared with consent. Names may be changed
          to protect privacy. Sehat Plus provides nutritional guidance as part of comprehensive
          healthcare — not as a replacement for medical treatment.
        </p>
      </div>

      {/* ── Begin Your Transformation CTA ────────────────── */}
      <div className="py-20 border-t border-charcoal/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-xl mx-auto px-6 space-y-4"
        >
          <h2 className="text-4xl font-serif text-charcoal">Begin Your Transformation</h2>
          <p className="text-charcoal/55 text-sm leading-relaxed">
            Every journey starts with a single step. Let us understand your unique health needs and
            create a plan that works for your life.
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

export default Transformations;
