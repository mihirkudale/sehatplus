import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, Palette, HeartHandshake } from 'lucide-react';

const steps = [
  {
    step: 'STEP 1',
    title: 'Understand',
    subtitle: 'Deep discovery',
    icon: FileSearch,
    side: 'left',
    description:
      "We review your medical reports, lifestyle patterns, daily routines, and personal goals. This isn't a generic questionnaire — it's a comprehensive understanding of you.",
    bullets: [
      'Medical history review',
      'Lifestyle & routine analysis',
      'Food preferences mapping',
      'Goal setting session',
    ],
  },
  {
    step: 'STEP 2',
    title: 'Design',
    subtitle: 'Your unique plan',
    icon: Palette,
    side: 'right',
    description:
      'Based on clinical insights and your real life, we craft a personalised nutrition plan that fits seamlessly into your world — not the other way around.',
    bullets: [
      'Custom meal frameworks',
      'Practical recipes',
      'Supplement guidance',
      'Flexible eating strategies',
    ],
  },
  {
    step: 'STEP 3',
    title: 'Support',
    subtitle: 'Ongoing care',
    icon: HeartHandshake,
    side: 'left',
    description:
      "Transformation takes time. Regular follow-ups, adjustments, and encouragement ensure you're never alone on this journey.",
    bullets: [
      'Weekly check-ins',
      'Plan adjustments',
      'Habit coaching',
      '24/7 WhatsApp support',
    ],
  },
];

const SehatMethod = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="method" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20 space-y-4"
        >
          <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px]">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-[64px] font-serif text-charcoal leading-tight tracking-tight">
            The Sehat Method
          </h2>
          <p className="text-charcoal/60 text-base">
            A three-step approach rooted in clinical expertise and real-life understanding
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line — left-aligned on mobile, centred on desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-charcoal/10" />

          <div className="flex flex-col">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.side === 'left';
              const isOpen = openIndex === index;

              const card = (
                <motion.div
                  layout
                  onClick={() => toggle(index)}
                  className="bg-white rounded-2xl p-5 md:p-8 border border-charcoal/8 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-[11px] font-semibold tracking-widest text-primary/70 uppercase">
                    {step.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-charcoal mt-2 mb-1">{step.title}</h3>
                  <p className="text-sm text-charcoal/50">{step.subtitle}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-charcoal/10 mt-4 pt-4 space-y-4">
                          <p className="text-sm text-charcoal/70 leading-relaxed">
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.bullets.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-charcoal/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                  /* Mobile: left-padded so card clears the left icon.
                     Desktop: no padding, alternating sides via children. */
                  className="relative flex items-start py-4 md:py-6 pl-16 md:pl-0"
                >
                  {/* Left card — desktop only */}
                  {isLeft && (
                    <div className="hidden md:block w-[calc(50%-48px)] mr-auto">{card}</div>
                  )}

                  {/* Icon circle */}
                  <div className={`
                    absolute z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300
                    left-0 top-4
                    md:left-1/2 md:-translate-x-1/2 md:top-8
                    ${isOpen ? 'bg-primary' : 'bg-background border border-charcoal/15'}
                  `}>
                    <Icon size={18} className={isOpen ? 'text-white' : 'text-primary'} />
                  </div>

                  {/* Right card — desktop only */}
                  {!isLeft && (
                    <div className="hidden md:block w-[calc(50%-48px)] ml-auto">{card}</div>
                  )}

                  {/* Mobile card — full width, always visible */}
                  <div className="md:hidden w-full">{card}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SehatMethod;
