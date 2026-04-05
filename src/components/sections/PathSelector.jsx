import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Activity, Scale, Stethoscope, Users } from 'lucide-react';

const paths = [
  {
    icon: Activity,
    title: 'Hormonal Balance',
    description: "PCOS, thyroid, menopause — nutritional strategies that support your body's natural rhythms.",
  },
  {
    icon: Scale,
    title: 'Weight Management',
    description: 'Sustainable, medically-guided approaches that prioritize health over quick fixes.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Nutrition',
    description: 'Diabetes, heart health, post-surgery recovery — nutrition as an integral part of your treatment.',
  },
  {
    icon: Users,
    title: 'Family & Kids Wellness',
    description: 'Building healthy habits for the whole family, from picky eaters to growing athletes.',
  },
];

const PathSelector = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px]">
            Your Path
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            What brings you here?
          </h2>
          <p className="text-charcoal/60 text-base">
            Select your primary concern to discover how we can help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                onClick={() => navigate('/services')}
                className="bg-white rounded-2xl p-8 cursor-pointer border border-charcoal/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif text-charcoal">{path.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{path.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathSelector;
