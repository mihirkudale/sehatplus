import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, BarChart3 } from 'lucide-react';

const Method = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Discovery',
      subtitle: 'Understanding Your Foundation',
      description: 'We begin with a deep clinical consultation to understand your medical history, current lifestyle, and future health goals. This phase is about identifying the unique physiological markers that define your biology.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Personalization',
      subtitle: 'Crafting Your Protocol',
      description: 'Our clinical nutritionists design a bespoke nutrition and lifestyle strategy tailored carefully to your medical needs. We integrate scientific markers with practical daily habits to create a pathway for healing.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Sustenance',
      subtitle: 'Lifelong Transformation',
      description: 'True health is built over time. We provide continuous monitoring, periodic reassessments, and dedicated support to help you navigate your journey and build habits that last a lifetime.'
    }
  ];

  return (
    <section id="method" className="bg-[var(--sp-bg-muted)] py-24 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[color:var(--sp-primary)]/30 to-transparent hidden lg:block" />

      <div className="container px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-[color:var(--sp-primary)]/10 border border-[color:var(--sp-primary)]/20 mb-6">
            <span className="text-xs font-bold tracking-widest text-[var(--sp-primary)] uppercase">The Sehat Method</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-[#1A1A1A]">
            A Scientific Pathway to <br />
            <span className="italic font-normal text-[var(--sp-primary)]">Lasting Wellness.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our approach is built on three clinical pillars designed to take you from discovery to long-term health sustenance.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Graphic */}
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="relative group">
                   <div className="absolute inset-0 bg-[var(--sp-primary)] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                   <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center p-12 relative z-10">
                      <div className="text-[var(--sp-primary)] transform scale-150 transition-transform duration-500 group-hover:scale-[1.8]">
                        {step.icon}
                      </div>
                   </div>
                   {/* Step Number Badge */}
                   <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[var(--sp-primary)] text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-20">
                      {idx + 1}
                   </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-[var(--sp-primary)]">
                  Step {idx + 1}: {step.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {step.description}
                </p>
                <div className="mt-8">
                  <a href="#booking" className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[var(--sp-primary)] transition-colors group">
                    Learn about this step
                    <div className="w-6 h-[1px] bg-[#1A1A1A] group-hover:bg-[var(--sp-primary)] group-hover:w-10 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
