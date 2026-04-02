import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Info, ArrowRight, CheckCircle2 } from 'lucide-react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const hMetres = height / 100;
      const bmiVal = (weight / (hMetres * hMetres)).toFixed(1);
      setBmi(bmiVal);
      
      if (bmiVal < 18.5) setCategory('Underweight');
      else if (bmiVal < 25) setCategory('Normal');
      else if (bmiVal < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Normal': return 'text-[var(--sp-primary)]';
      case 'Underweight': return 'text-blue-500';
      case 'Overweight': return 'text-yellow-600';
      case 'Obese': return 'text-red-500';
      default: return 'text-[#1A1A1A]';
    }
  };

  const getCategoryBg = () => {
    switch (category) {
      case 'Normal': return 'bg-[color:var(--sp-primary)]/10 border-[color:var(--sp-primary)]/20';
      case 'Underweight': return 'bg-blue-50 border-blue-100';
      case 'Overweight': return 'bg-yellow-50 border-yellow-100';
      case 'Obese': return 'bg-red-50 border-red-100';
      default: return 'bg-[var(--sp-bg-muted)] border-[var(--sp-border)]';
    }
  };

  return (
    <section id="bmi-calculator" className="bg-[var(--sp-bg-muted)] py-24">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 mb-6 shadow-sm">
               <Calculator size={14} className="text-[var(--sp-primary)]" />
               <span className="text-xs font-bold tracking-widest text-[var(--sp-primary)] uppercase">Self Assessment</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#1A1A1A]">
              Understand Your <br />
              <span className="italic font-normal text-[var(--sp-primary)]">Metabolic Baseline.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Knowledge is the first step towards transformation. Use our clinical BMI 
              calculator to understand your current status and start your journey.
            </p>
            
            <div className="space-y-6">
                {[
                  "WHO Standard Classifications",
                  "Instant Clinical Categorization",
                  "Expert Consultation Follow-up"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <CheckCircle2 size={20} className="text-[var(--sp-primary)]" />
                    {item}
                  </div>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-white border border-gray-100 flex items-start gap-4">
               <div className="p-3 bg-[color:var(--sp-primary)]/10 rounded-2xl">
                  <Info size={20} className="text-[var(--sp-primary)]" />
               </div>
               <p className="text-sm text-gray-500 leading-relaxed">
                 BMI is a useful screening tool but doesn't measure body fat directly. For a comprehensive metabolic assessment, we recommend a clinical consultation.
               </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[color:var(--sp-primary)]/10 blur-[80px] rounded-full -z-10" />
            
            <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl relative z-10">
              <form onSubmit={calculateBMI} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--sp-primary)] font-bold">Weight (kg)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 70" 
                    className="w-full bg-white border border-[var(--sp-border)] rounded-2xl p-5 text-[#1A1A1A] focus:border-[var(--sp-primary)] focus:ring-1 focus:ring-[var(--sp-primary)] outline-none transition-all placeholder:text-gray-300 font-semibold"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--sp-primary)] font-bold">Height (cm)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 175" 
                    className="w-full bg-white border border-[var(--sp-border)] rounded-2xl p-5 text-[#1A1A1A] focus:border-[var(--sp-primary)] focus:ring-1 focus:ring-[var(--sp-primary)] outline-none transition-all placeholder:text-gray-300 font-semibold"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-[color:var(--sp-primary)]/20 flex items-center justify-center gap-2 group">
                  Calculate BMI
                  <Calculator size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
              </form>
              
              <AnimatePresence mode="wait">
                {bmi && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`mt-10 p-8 rounded-[2rem] border ${getCategoryBg()} text-center relative overflow-hidden`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4">Your Metabolic Result</p>
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <span className="text-6xl font-serif font-bold text-[#1A1A1A]">{bmi}</span>
                        <div className="h-12 w-[1px] bg-gray-200" />
                        <div className="text-left">
                            <span className={`text-xl font-bold uppercase tracking-wider block ${getCategoryColor()}`}>
                                {category}
                            </span>
                            <span className="text-xs text-gray-400 font-medium font-bold tracking-widest uppercase">Clinical Category</span>
                        </div>
                    </div>
                    <div className="relative z-10 pt-6 border-t border-gray-100">
                        <a href="#booking" className="inline-flex items-center gap-2 text-[var(--sp-primary)] font-bold text-sm hover:gap-3 transition-all duration-300">
                            Book a consult to discuss your results
                            <ArrowRight size={16} />
                        </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
