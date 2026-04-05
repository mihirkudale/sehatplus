import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles, Stethoscope, Dna, Scale, Users, Clock,
  X, ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Hormonal Wellness',
    subtitle: 'PCOS, Thyroid & Menopause',
    description:
      "Hormonal imbalances affect every aspect of life — from energy to mood to weight. Our evidence-based nutrition protocols support your body's natural balance.",
    included: [
      'Customised nutrition for PCOS management',
      'Thyroid-supportive meal planning',
      'Menopause symptom relief strategies',
      'Fertility nutrition guidance',
    ],
    duration: '3–6 months recommended',
  },
  {
    icon: Stethoscope,
    title: 'Medical Nutrition Therapy',
    subtitle: 'Chronic Conditions',
    description:
      'Where nutrition becomes medicine. We work alongside your physician to create therapeutic nutrition plans for complex chronic conditions.',
    included: [
      'Diabetes & blood sugar management',
      'Hypertension & cardiac diet planning',
      'Renal & liver nutrition support',
      'Post-surgical recovery nutrition',
    ],
    duration: '6–12 months recommended',
  },
  {
    icon: Dna,
    title: 'Genetic Precision Diet',
    subtitle: 'Bio-Based Nutrition',
    description:
      'Your genes hold the blueprint to your optimal diet. We use genetic insights to craft a nutrition plan that is uniquely yours.',
    included: [
      'Genetic report interpretation',
      'Personalised macro & micro targets',
      'Food sensitivity mapping',
      'Epigenetic lifestyle guidance',
    ],
    duration: '3–4 months recommended',
  },
  {
    icon: Scale,
    title: 'Sustainable Weight Management',
    subtitle: 'Beyond Dieting',
    description:
      'Forget crash diets. Our approach focuses on sustainable fat loss and body composition improvements without deprivation.',
    included: [
      'Metabolic rate assessment',
      'Anti-inflammatory eating plan',
      'Habit & behaviour coaching',
      'Regular body composition tracking',
    ],
    duration: '4–6 months recommended',
  },
  {
    icon: Users,
    title: 'Family & Kids Nutrition',
    subtitle: 'Growing Together',
    description:
      'Building healthy foundations for the whole family. From picky eaters to teenage athletes, nutrition that grows with your children.',
    included: [
      'Age-appropriate meal planning',
      'Picky eater strategies',
      'Allergy & intolerance management',
      'School lunch & snack guidance',
    ],
    duration: '3–6 months recommended',
  },
  {
    icon: Clock,
    title: 'Age Reversible Diet',
    subtitle: 'Skin, Hair & Full Body Rejuvenation',
    description:
      'Turn back the clock with nutrition science. Our anti-aging protocols target cellular health, collagen production, and oxidative stress for visible, full-body results.',
    included: [
      'Anti-aging nutrient protocol',
      'Collagen-supportive meal planning',
      'Oxidative stress reduction plan',
      'Skin & hair nutrition guidance',
    ],
    duration: '3–6 months recommended',
  },
];

const ServicesGrid = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="text-charcoal/55 text-sm max-w-lg mx-auto leading-relaxed">
            Specialised nutrition programs designed for your unique health journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                onClick={() => setSelected(service)}
                className="bg-white rounded-2xl p-7 border border-charcoal/8 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <ArrowRight size={18} className="text-charcoal/35 mt-1" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-primary mb-1 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-primary/70 mb-3 font-medium">{service.subtitle}</p>

                {/* Description — truncated */}
                <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Drawer Overlay ────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-40"
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-charcoal/8 flex items-center justify-center hover:bg-charcoal/15 transition-colors"
              >
                <X size={16} className="text-charcoal/60" />
              </button>

              <div className="p-8 pt-10 flex flex-col flex-grow">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  {selected && (() => {
                    const Icon = selected.icon;
                    return <Icon size={26} className="text-white" />;
                  })()}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-serif text-charcoal leading-tight mb-1">
                  {selected.title}
                </h2>
                <p className="text-sm text-primary font-medium mb-6">{selected.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-charcoal/70 leading-relaxed mb-8">
                  {selected.description}
                </p>

                {/* What's included */}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-4">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {selected.included.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-charcoal/70">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="rounded-xl p-4 mb-8" style={{ backgroundColor: '#FAF8F5' }}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
                    Recommended Duration
                  </p>
                  <p className="text-base font-serif text-charcoal">{selected.duration}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => { setSelected(null); navigate('/contact'); }}
                  className="w-full py-4 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;
