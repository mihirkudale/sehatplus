import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, TrendingUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const steps = [
  {
    number: '01',
    title: 'Comprehensive Assessment',
    description: 'We start by deep-diving into your medical history, clinical markers, and lifestyle habits to identify root triggers.',
    icon: <ClipboardList size={32} />
  },
  {
    number: '02',
    title: 'Personalized Clinical Plan',
    description: 'A custom nutrition and lifestyle roadmap is designed specifically for your biochemical and medical unique needs.',
    icon: <BookOpen size={32} />
  },
  {
    number: '03',
    title: 'Sustainable Success',
    description: 'Continuous monitoring and adjustments ensure you achieve lasting health transformation and medical stability.',
    icon: <TrendingUp size={32} />
  }
];

const Method = () => {
  return (
    <section className="py-24 bg-muted/50" id="method">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader 
          subtitle="Our Proven Approach" 
          title="How We Transform Your Health"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Decorative Path Line - Desktop only */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full relative overflow-visible pt-16 flex flex-col items-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-background transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="space-y-4">
                  <span className="text-primary/10 text-6xl font-bold font-serif absolute -top-4 right-6 select-none opacity-50">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
