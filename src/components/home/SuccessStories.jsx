import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Decreasing paths — weight/metric goes DOWN over time (loss = good)
const LOSS_PATHS = [
  { line: 'M0,5 C25,10 45,20 70,32 C90,42 115,52 145,62 C165,69 185,73 200,76',  endCy: 76 },
  { line: 'M0,8 C20,14 40,22 65,34 C85,44 110,55 140,64 C162,71 183,75 200,78',  endCy: 78 },
  { line: 'M0,6 C22,12 42,21 68,33 C88,43 112,53 142,63 C163,70 184,74 200,77',  endCy: 77 },
];

// Increasing paths — health/energy goes UP over time (gain = good)
const GAIN_PATHS = [
  { line: 'M0,76 C25,68 45,58 70,46 C90,36 115,26 145,16 C165,9 185,5 200,3',   endCy: 3  },
  { line: 'M0,78 C20,70 40,60 65,48 C85,38 110,28 140,18 C162,10 183,5 200,2',  endCy: 2  },
  { line: 'M0,74 C22,66 42,56 68,44 C88,34 112,24 142,14 C163,7 184,3 200,1',   endCy: 1  },
];

const STORIES = [
  {
    name: 'Anirudha Kale',
    stat: '11 kg',
    statLabel: 'Weight Lost',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Anirudha-Kale-Icon.png',
    text: 'Simple and easy to follow diet charts made it very comfortable. Quick results motivated me to follow it further and improved my overall lifestyle.',
  },
  {
    name: 'Bhagyashree Deshpande',
    stat: '27 kg',
    statLabel: 'Reduced',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Bhagyashree-Deshpande-Icon.png',
    text: 'All managed naturally without any starvation or supplements. Reduced tablets from 3 twice a day to 2 a day. I gained my confidence back.',
  },
  {
    name: 'Rajesh Kumar',
    stat: '23 kg',
    statLabel: 'Weight Lost',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Rajesh-Kumar-Icon.png',
    text: 'BP and diabetic medicines reduced drastically after consulting Dr. Ambika Nair post bariatric surgery. I feel more energetic now.',
  },
  {
    name: 'Nihar Trivedi',
    stat: '14 kg',
    statLabel: 'Weight Lost',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te1.jpg',
    text: 'Diet changes were gradual and sustainable at Jupiter Hospital Pune. I never felt starved throughout the entire process.',
  },
  {
    name: 'Priya Sharma',
    stat: '9.2 → 6.8',
    statLabel: 'HbA1c Controlled',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te2.jpg',
    text: 'Medical Nutrition Therapy at Sehat+ helped me reduce my HbA1c from 9.2 to 6.8 in just 4 months.',
  },
  {
    name: 'Kavita Joshi',
    stat: 'PCOS',
    statLabel: 'Controlled Naturally',
    trend: 'gain',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te3.jpg',
    text: 'Personalized diet plan helped regulate my hormones naturally without medication. Symptoms became manageable within months.',
  },
  {
    name: 'Suresh Patil',
    stat: '18 kg',
    statLabel: 'Weight Lost',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te4.jpg',
    text: 'Easy to follow even with a hectic work schedule. Lost 18 kg in 6 months and feel more energetic than ever.',
  },
  {
    name: 'Anita Kulkarni',
    stat: 'BP & Cholesterol',
    statLabel: 'Normalised',
    trend: 'loss',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te5.jpg',
    text: 'Heart-healthy plan brought my cholesterol and BP to normal within 3 months post angioplasty.',
  },
  {
    name: 'Ravi Deshmukh',
    stat: '15 kg',
    statLabel: 'Lost + Asthma Improved',
    trend: 'gain',
    image: 'https://www.sehatplus.in/wp-content/uploads/2024/06/te6.jpg',
    text: 'Lost 15 kg in 5 months and asthma episodes reduced significantly. Energy levels are at an all-time high.',
  },
];

const GAP = 16;

function StoryCard({ story, cardW, pathIndex }) {
  const isLoss = story.trend === 'loss';
  const paths  = isLoss ? LOSS_PATHS : GAIN_PATHS;
  const { line, endCy } = paths[pathIndex % paths.length];
  const areaPath = `${line} L200,80 L0,80 Z`;
  const graphColor = isLoss ? '#c9a96e' : '#7ec97e';
  const gradId = `grad_${pathIndex}`;

  return (
    <motion.div
      style={{ width: cardW, flexShrink: 0 }}
      className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Photo — blurs on hover */}
      <motion.img
        src={story.image}
        alt={story.name}
        className="w-full h-full object-cover object-top"
        variants={{
          rest:  { scale: 1,    filter: 'blur(0px)' },
          hover: { scale: 1.06, filter: 'blur(5px)', transition: { duration: 0.5 } },
        }}
      />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0"
        variants={{
          rest:  { background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)' },
          hover: { background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.4) 100%)', transition: { duration: 0.4 } },
        }}
      />

      {/* ── GRAPH (visible only on hover) ── */}
      <motion.div
        className="absolute left-0 right-0 px-5"
        style={{ bottom: '28%' }}
        variants={{
          rest:  { opacity: 0, y: 16 },
          hover: { opacity: 1, y: 0,  transition: { duration: 0.35, delay: 0.1 } },
        }}
      >
        {/* Trend label */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-[9px] uppercase tracking-widest text-white/40">Start</span>
          <span
            className="text-[9px] uppercase tracking-widest font-black"
            style={{ color: graphColor }}
          >
            {isLoss ? 'Now ↓' : 'Now ↑'}
          </span>
        </div>

        <svg viewBox="0 0 200 80" className="w-full" preserveAspectRatio="none" style={{ height: 80 }}>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={graphColor} stopOpacity={isLoss ? '0' : '0.35'} />
              <stop offset="100%" stopColor={graphColor} stopOpacity={isLoss ? '0.35' : '0'} />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[20, 40, 60].map(y => (
            <line key={y} x1="0" y1={y} x2="200" y2={y}
              stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          ))}

          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill={`url(#${gradId})`}
            variants={{
              rest:  { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
            }}
          />

          {/* Animated line */}
          <motion.path
            d={line}
            fill="none"
            stroke={graphColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              rest:  { pathLength: 0, opacity: 0 },
              hover: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.15 } },
            }}
          />

          {/* End dot */}
          <motion.circle
            cx="200"
            cy={endCy}
            r="4"
            fill={graphColor}
            variants={{
              rest:  { opacity: 0, scale: 0 },
              hover: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 1.1 } },
            }}
          />
          {/* Pulse ring */}
          <motion.circle
            cx="200"
            cy={endCy}
            r="8"
            fill="none"
            stroke={graphColor}
            strokeWidth="1"
            variants={{
              rest:  { opacity: 0, scale: 0 },
              hover: { opacity: 0.4, scale: 1, transition: { duration: 0.4, delay: 1.2 } },
            }}
          />
        </svg>
      </motion.div>

      {/* ── TOP STAT ── */}
      <div className="absolute top-5 left-5 text-white">
        <motion.div
          className="font-black leading-none"
          variants={{
            rest:  { fontSize: '1.6rem' },
            hover: { fontSize: '2rem', transition: { duration: 0.3 } },
          }}
        >
          {story.stat}
        </motion.div>
        <motion.div
          className="text-[10px] font-medium mt-1 uppercase tracking-wider"
          style={{ color: graphColor }}
          variants={{
            rest:  { opacity: 0.7 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
        >
          {story.statLabel} {isLoss ? '↓' : '↑'}
        </motion.div>
      </div>

      {/* ── BOTTOM — text hides, name stays ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Testimonial text — hides on hover */}
        <motion.p
          className="text-white/75 text-[12px] leading-relaxed mb-3"
          variants={{
            rest:  { opacity: 1, y: 0,  height: 'auto', transition: { duration: 0.3 } },
            hover: { opacity: 0, y: 8,  transition: { duration: 0.25 } },
          }}
        >
          {story.text}
        </motion.p>

        {/* Name — always visible, moves up on hover */}
        <motion.div
          className="font-black text-white text-sm uppercase tracking-widest"
          variants={{
            rest:  { y: 0 },
            hover: { y: -4, transition: { duration: 0.3 } },
          }}
        >
          {story.name}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SuccessStories() {
  const [idx, setIdx]     = useState(0);
  const [cardW, setCardW] = useState(0);
  const [visible, setVisible] = useState(4);
  const containerRef = useRef(null);

  const computeSizes = () => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const v = w < 640 ? 1 : w < 1024 ? 2 : 4;
    setVisible(v);
    setCardW((w - (v - 1) * GAP) / v);
  };

  useEffect(() => {
    computeSizes();
    window.addEventListener('resize', computeSizes);
    return () => window.removeEventListener('resize', computeSizes);
  }, []);

  const maxIdx    = Math.max(0, STORIES.length - visible);
  const prev      = () => setIdx(i => Math.max(0, i - 1));
  const next      = () => setIdx(i => Math.min(maxIdx, i + 1));
  const translateX = -(idx * (cardW + GAP));

  return (
    <section id="success-stories" className="bg-[#faf9f6] py-20 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[4px] text-[var(--sp-gold)] mb-4">
              Weight Loss | Transformation
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#2e2e2e] leading-[1.05] font-serif italic">
              5 Lakh+<br />Lives<br />Transformed
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev} disabled={idx === 0}
              className="w-12 h-12 rounded-full border border-[#2e2e2e]/30 flex items-center justify-center text-[#2e2e2e] hover:bg-[#2e2e2e] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next} disabled={idx >= maxIdx}
              className="w-12 h-12 rounded-full border border-[#2e2e2e]/30 flex items-center justify-center text-[#2e2e2e] hover:bg-[#2e2e2e] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={containerRef}>
          {cardW > 0 && (
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: translateX }}
              transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.8 }}
            >
              {STORIES.map((story, i) => (
                <StoryCard key={i} story={story} cardW={cardW} pathIndex={i} />
              ))}
            </motion.div>
          )}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-8 justify-center">
          {Array.from({ length: maxIdx + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === idx ? 'w-8 bg-[#8C6E63]' : 'w-2 bg-[#2e2e2e]/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
