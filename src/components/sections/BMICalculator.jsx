import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────── */

const CATEGORIES = [
  {
    label: 'Underweight',
    range: '< 18.5',
    min: 0,
    max: 18.5,
    color: '#60a5fa',
    bar: 'bg-blue-400',
    text: 'text-blue-500',
    ring: 'ring-blue-200',
    bg: 'bg-blue-50',
    tip: "Your BMI suggests you may be underweight. A personalised plan focused on nutrient-dense foods and healthy weight gain can make a significant difference to your energy and overall health.",
  },
  {
    label: 'Healthy',
    range: '18.5 – 24.9',
    min: 18.5,
    max: 25,
    color: '#587c6b',
    bar: 'bg-primary',
    text: 'text-primary',
    ring: 'ring-primary/30',
    bg: 'bg-primary/8',
    tip: "You're in the healthy range — well done. A balanced nutrition plan helps you sustain this, maintain energy levels, and prevent lifestyle-related conditions down the line.",
  },
  {
    label: 'Overweight',
    range: '25 – 29.9',
    min: 25,
    max: 30,
    color: '#f59e0b',
    bar: 'bg-amber-400',
    text: 'text-amber-500',
    ring: 'ring-amber-200',
    bg: 'bg-amber-50',
    tip: "Small, sustainable changes to your diet and daily habits can bring significant results over time. A personalised plan removes the guesswork — and makes it far easier to stay consistent.",
  },
  {
    label: 'Obese',
    range: '≥ 30',
    min: 30,
    max: Infinity,
    color: '#f87171',
    bar: 'bg-red-400',
    text: 'text-red-500',
    ring: 'ring-red-200',
    bg: 'bg-red-50',
    tip: "Medical nutrition therapy addresses the underlying factors that make weight management difficult. A clinical dietitian provides safe, medically sound guidance tailored specifically to you.",
  },
];

const DISPLAY_MIN = 10;
const DISPLAY_MAX = 42;
const RANGE = DISPLAY_MAX - DISPLAY_MIN;

// Segment widths as % of the bar
const SEGMENTS = [
  { cat: CATEGORIES[0], from: DISPLAY_MIN, to: 18.5 },
  { cat: CATEGORIES[1], from: 18.5,        to: 25   },
  { cat: CATEGORIES[2], from: 25,           to: 30   },
  { cat: CATEGORIES[3], from: 30,           to: DISPLAY_MAX },
].map(s => ({ ...s, pct: ((s.to - s.from) / RANGE) * 100 }));

const getCategory = (bmi) =>
  CATEGORIES.find(c => bmi >= c.min && bmi < c.max) ?? CATEGORIES[3];

const clampedPct = (bmi) =>
  ((Math.min(Math.max(bmi, DISPLAY_MIN), DISPLAY_MAX) - DISPLAY_MIN) / RANGE) * 100;

/* ── Animated counter ─────────────────────────────────────── */
const AnimatedNumber = ({ value }) => {
  const motionVal = useMotionValue(0);
  const displayed = useTransform(motionVal, v => v.toFixed(1));
  const [text, setText] = useState('0.0');

  useEffect(() => {
    const unsub = displayed.on('change', v => setText(v));
    const ctrl = animate(motionVal, value, { duration: 0.8, ease: 'easeOut' });
    return () => { ctrl.stop(); unsub(); };
  }, [value]);

  return <span>{text}</span>;
};

/* ── Scale bar ────────────────────────────────────────────── */
const ScaleBar = ({ bmi }) => {
  const pct = bmi ? clampedPct(bmi) : null;

  return (
    <div className="w-full">
      {/* Bar */}
      <div className="relative h-3 rounded-full overflow-hidden flex">
        {SEGMENTS.map(s => (
          <div
            key={s.cat.label}
            className={`h-full ${s.cat.bar} opacity-80`}
            style={{ width: `${s.pct}%` }}
          />
        ))}
        {/* Indicator */}
        <AnimatePresence>
          {pct !== null && (
            <motion.div
              initial={{ left: `${pct}%`, opacity: 0, scale: 0 }}
              animate={{ left: `${pct}%`, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white shadow-lg border-2 z-10"
              style={{ borderColor: getCategory(bmi).color }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2">
        {CATEGORIES.map(c => (
          <span key={c.label} className={`text-[10px] font-medium ${bmi && getCategory(bmi).label === c.label ? c.text : 'text-charcoal/35'}`}>
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Main component ───────────────────────────────────────── */
const BMICalculator = () => {
  const navigate = useNavigate();
  const [unit, setUnit] = useState('cm');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [errors, setErrors] = useState({});

  const category = bmi ? getCategory(bmi) : null;

  const validate = () => {
    const e = {};
    if (unit === 'cm') {
      const h = parseFloat(heightCm);
      if (!heightCm || isNaN(h) || h < 50 || h > 250) e.height = 'Enter a valid height (50–250 cm).';
    } else {
      const ft = parseFloat(heightFt || 0);
      const inches = parseFloat(heightIn || 0);
      const total = ft * 12 + inches;
      if (total < 20 || total > 100) e.height = 'Enter a valid height.';
    }
    const w = parseFloat(weight);
    if (!weight || isNaN(w) || w < 10 || w > 300) e.weight = 'Enter a valid weight (10–300 kg).';
    return e;
  };

  const calculate = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    let heightM;
    if (unit === 'cm') {
      heightM = parseFloat(heightCm) / 100;
    } else {
      const totalIn = parseFloat(heightFt || 0) * 12 + parseFloat(heightIn || 0);
      heightM = totalIn * 0.0254;
    }
    const w = parseFloat(weight);
    setBmi(Math.round((w / (heightM * heightM)) * 10) / 10);
  };

  const reset = () => {
    setBmi(null);
    setHeightCm(''); setHeightFt(''); setHeightIn(''); setWeight('');
    setErrors({});
  };

  const inputCls = (err) =>
    `w-full bg-background border rounded-xl px-4 py-3.5 text-[14px] text-charcoal placeholder:text-charcoal/30 outline-none focus:bg-white focus:ring-2 transition-all ${
      err ? 'border-red-400 focus:ring-red-100 focus:border-red-400' : 'border-charcoal/10 focus:border-primary focus:ring-primary/15'
    }`;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Health Assessment
          </span>
          <h2 className="font-serif text-4xl md:text-[48px] text-charcoal leading-tight">
            Check Your BMI
          </h2>
          <p className="text-charcoal/55 text-sm max-w-md mx-auto leading-relaxed">
            A quick starting point to understand where you stand today.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl border border-charcoal/8 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: Inputs ─────────────────────────────── */}
            <div className="p-8 lg:p-10 flex flex-col gap-6">

              {/* Height */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[13px] font-semibold text-charcoal/70">Height</label>
                  {/* Unit toggle */}
                  <div className="flex bg-background rounded-lg p-0.5 border border-charcoal/8">
                    {['cm', 'ft'].map(u => (
                      <button
                        key={u}
                        onClick={() => { setUnit(u); setBmi(null); setErrors({}); }}
                        className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all ${
                          unit === u ? 'bg-primary text-white shadow-sm' : 'text-charcoal/50 hover:text-charcoal'
                        }`}
                      >
                        {u === 'cm' ? 'cm' : 'ft / in'}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {unit === 'cm' ? (
                    <motion.div key="cm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                      <input
                        type="number"
                        placeholder="e.g. 165"
                        value={heightCm}
                        onChange={e => { setHeightCm(e.target.value); setBmi(null); }}
                        className={inputCls(errors.height)}
                      />
                    </motion.div>
                  ) : (
                    <motion.div key="ft" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="flex gap-3">
                      <input
                        type="number"
                        placeholder="ft"
                        value={heightFt}
                        onChange={e => { setHeightFt(e.target.value); setBmi(null); }}
                        className={inputCls(errors.height)}
                      />
                      <input
                        type="number"
                        placeholder="in"
                        value={heightIn}
                        onChange={e => { setHeightIn(e.target.value); setBmi(null); }}
                        className={inputCls(errors.height)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                {errors.height && <p className="text-[12px] text-red-500 font-medium">{errors.height}</p>}
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-charcoal/70">Weight (kg)</label>
                <input
                  type="number"
                  placeholder="e.g. 68"
                  value={weight}
                  onChange={e => { setWeight(e.target.value); setBmi(null); }}
                  className={inputCls(errors.weight)}
                />
                {errors.weight && <p className="text-[12px] text-red-500 font-medium">{errors.weight}</p>}
              </div>

              {/* BMI reference */}
              <div className="rounded-2xl border border-charcoal/8 bg-background p-4 space-y-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-charcoal/40">BMI Reference</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {CATEGORIES.map(c => (
                    <div key={c.label} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${c.bar}`} />
                      <span className="text-[12px] text-charcoal/60">{c.label} <span className="text-charcoal/40">{c.range}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <button
                  onClick={calculate}
                  className="flex-1 py-3.5 rounded-xl bg-primary text-white text-[14px] font-semibold hover:bg-primary/90 hover:shadow-md transition-all duration-200"
                >
                  Calculate BMI
                </button>
                {bmi && (
                  <button
                    onClick={reset}
                    aria-label="Reset"
                    className="w-12 h-12 rounded-xl border border-charcoal/12 flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:bg-charcoal/5 transition-all"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* ── Right: Result ─────────────────────────────── */}
            <div className={`p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-charcoal/8 transition-colors duration-500 ${bmi ? category.bg : 'bg-background/50'}`}>

              <AnimatePresence mode="wait">
                {!bmi ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center gap-6 py-4"
                  >
                    {/* Decorative gauge placeholder */}
                    <div className="w-32 h-32 rounded-full border-4 border-dashed border-charcoal/10 flex items-center justify-center">
                      <p className="font-serif text-4xl text-charcoal/15">?</p>
                    </div>
                    <div>
                      <p className="text-charcoal/40 text-sm font-medium">Your result will appear here</p>
                      <p className="text-charcoal/30 text-xs mt-1">Enter your height and weight to begin</p>
                    </div>
                    <ScaleBar bmi={null} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    {/* BMI score */}
                    <div className="flex items-end gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-charcoal/40 mb-1">Your BMI</p>
                        <p className={`font-serif text-7xl font-medium leading-none ${category.text}`}>
                          <AnimatedNumber value={bmi} />
                        </p>
                      </div>
                      <span className={`mb-2 px-3 py-1 rounded-full text-[12px] font-bold ring-2 ${category.text} ${category.bg} ${category.ring}`}>
                        {category.label}
                      </span>
                    </div>

                    {/* Scale bar */}
                    <ScaleBar bmi={bmi} />

                    {/* Insight */}
                    <p className="text-sm text-charcoal/65 leading-relaxed">
                      {category.tip}
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => navigate('/contact')}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white text-[14px] font-semibold hover:bg-primary/90 hover:shadow-md transition-all duration-200"
                    >
                      Get a Personalised Plan
                      <ArrowRight size={15} />
                    </button>

                    <p className="text-[11px] text-charcoal/35 text-center">
                      BMI is a screening tool, not a clinical diagnosis. Consult a qualified nutritionist for a complete assessment.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
