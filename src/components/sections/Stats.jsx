import { motion } from 'framer-motion';
import { Award, Building2, FlaskConical, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    value: '32+',
    label: 'Years Experience',
  },
  {
    icon: Building2,
    value: 'Jupiter Hospital',
    label: 'Affiliated',
  },
  {
    icon: FlaskConical,
    value: 'Evidence-Based',
    label: 'Nutrition',
  },
  {
    icon: Heart,
    value: 'Lifestyle-Led',
    label: 'Care',
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Why Trust Us
          </span>
          <h2 className="text-3xl md:text-[48px] font-serif text-charcoal leading-tight">
            Built on decades of care
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white p-10 rounded-3xl shadow-sm flex flex-col items-center space-y-6 group hover:shadow-md transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_18px_4px_rgba(88,124,107,0.35)]">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-serif text-charcoal leading-snug italic">
                    {item.value}
                  </h3>
                  <p className="text-[13px] text-charcoal/50 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
