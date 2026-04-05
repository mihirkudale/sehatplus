import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Stethoscope, Dna, Scale, Users, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Hormonal Wellness',
    tag: 'PCOS, Thyroid & Menopause',
    description:
      'Hormonal imbalances affect every aspect of life — from energy to mood to weight. Our evidence-based nutrition protocols support your body\'s natural balance.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Nutrition Therapy',
    tag: 'Clinical Conditions',
    description:
      'When nutrition becomes medicine. We work alongside your medical team to create therapeutic nutrition plans for complex health conditions.',
  },
  {
    icon: Dna,
    title: 'Genetic Precision Diet',
    tag: 'DNA-Based Nutrition',
    description:
      'Your genes hold the blueprint to your optimal diet. We use genetic insights to create nutrition plans tailored to your unique genetic makeup.',
  },
  {
    icon: Scale,
    title: 'Sustainable Weight Management',
    tag: 'Beyond Dieting',
    description:
      'Forget crash diets. Our approach focuses on metabolic health, sustainable habits, and a positive relationship with food.',
  },
  {
    icon: Users,
    title: 'Family & Kids Nutrition',
    tag: 'Growing Together',
    description:
      'Building healthy foundations for the whole family. From picky eaters to teenage athletes, nutrition that grows with your children.',
  },
  {
    icon: Clock,
    title: 'Age Reversible Diet',
    tag: 'Skin, Hair & Full Body Rejuvenation',
    description:
      'Turn back the clock with nutrition science. Our anti-aging protocols target cellular health, collagen production, and oxidative stress for visible, full-body rejuvenation.',
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px]">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="text-charcoal/60 text-sm font-medium">
            Specialised nutrition programs designed for your unique health journey
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
                onClick={() => navigate('/services')}
                className="bg-white rounded-2xl p-7 border border-charcoal/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                    <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <ArrowRight size={16} className="text-charcoal/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-serif text-charcoal mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-primary mb-3">{service.tag}</p>
                <p className="text-sm text-charcoal/60 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
