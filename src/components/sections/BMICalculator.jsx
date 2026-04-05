import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-500' };
  if (bmi < 25)   return { label: 'Normal weight', color: 'text-primary' };
  if (bmi < 30)   return { label: 'Overweight', color: 'text-amber-500' };
  return           { label: 'Obese', color: 'text-red-500' };
};

const BMICalculator = () => {
  const [unit, setUnit] = useState('cm');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let heightM;
    if (unit === 'cm') {
      heightM = parseFloat(heightCm) / 100;
    } else {
      const totalInches = parseFloat(heightFt || 0) * 12 + parseFloat(heightIn || 0);
      heightM = totalInches * 0.0254;
    }
    const w = parseFloat(weight);
    if (!heightM || !w || heightM <= 0 || w <= 0) return;
    const bmi = w / (heightM * heightM);
    setResult(Math.round(bmi * 10) / 10);
  };

  const category = result ? getBMICategory(result) : null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-charcoal/10 rounded-full px-4 py-1.5 text-xs font-medium text-charcoal/60 shadow-sm">
            <Activity size={12} className="text-primary" />
            Health Assessment
          </div>
          <h2 className="text-4xl font-serif text-charcoal leading-tight">
            Check Your BMI
          </h2>
          <p className="text-charcoal/50 text-sm">
            A simple starting point to understand where you stand today.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="bg-white rounded-2xl p-6 border border-charcoal/8 shadow-sm space-y-5"
        >
          {/* Height */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-charcoal/60">Height</label>
            {/* Unit toggle */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => { setUnit('cm'); setResult(null); }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  unit === 'cm'
                    ? 'bg-primary text-white'
                    : 'bg-charcoal/8 text-charcoal/50 hover:bg-charcoal/12'
                }`}
              >
                cm
              </button>
              <button
                onClick={() => { setUnit('ft'); setResult(null); }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  unit === 'ft'
                    ? 'bg-primary text-white'
                    : 'bg-charcoal/8 text-charcoal/50 hover:bg-charcoal/12'
                }`}
              >
                ft / in
              </button>
            </div>

            <AnimatePresence mode="wait">
              {unit === 'cm' ? (
                <motion.input
                  key="cm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  type="number"
                  placeholder="Enter height in cm"
                  value={heightCm}
                  onChange={(e) => { setHeightCm(e.target.value); setResult(null); }}
                  className="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-primary transition-colors"
                />
              ) : (
                <motion.div
                  key="ft"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-2"
                >
                  <input
                    type="number"
                    placeholder="ft"
                    value={heightFt}
                    onChange={(e) => { setHeightFt(e.target.value); setResult(null); }}
                    className="w-1/2 border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="in"
                    value={heightIn}
                    onChange={(e) => { setHeightIn(e.target.value); setResult(null); }}
                    className="w-1/2 border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-primary transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-charcoal/60">Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => { setWeight(e.target.value); setResult(null); }}
              className="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-background rounded-xl p-4 text-center border border-charcoal/8">
                  <p className="text-xs text-charcoal/50 mb-1">Your BMI</p>
                  <p className={`text-3xl font-serif font-medium ${category.color}`}>{result}</p>
                  <p className={`text-sm font-medium mt-1 ${category.color}`}>{category.label}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <button
            onClick={calculate}
            className="w-full py-3.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200"
          >
            Calculate BMI
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
