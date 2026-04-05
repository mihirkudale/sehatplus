import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UtensilsCrossed, TrendingUp, Activity } from 'lucide-react';

const LINE_COUNT   = 14;
const VW           = 1440;
const VH           = 600;

// Fittr-style neck: 35%–65% of width (30% wide).
// Lines stay vertical for most of their length, then sharply pinch inward.
const NECK_L = VW * 0.35;   // 504
const NECK_R = VW * 0.65;   // 936

// Sequential laser: one line active at a time, sweeps L→R then repeats
const FLOW_DURATION  = 2.5;                          // seconds per line
const FLOW_REPEAT    = (LINE_COUNT - 1) * FLOW_DURATION; // wait before looping
const FLOW_SEGMENT   = 0.22;

// Fittr neon green — bright lime on the core, dark for the bloom base
const LASER_CORE  = '#a7f3d0';   // near-white bright green core
const LASER_MID   = '#22c55e';   // saturated green mid-ring
const LASER_OUTER = '#14532d';   // dark green for the bloom base

const AnimatedLines = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
    const t  = i / (LINE_COUNT - 1);
    const sx = t * VW;                            // 0 → 1440
    const nx = NECK_L + t * (NECK_R - NECK_L);    // 504 → 936

    // Fittr shape: lines stay at spread-x until ~40% height,
    // then curve sharply into the neck at 50%, mirror back out.
    const d = [
      `M ${sx} 0`,
      `C ${sx} ${VH * 0.40}, ${nx} ${VH * 0.46}, ${nx} ${VH * 0.50}`,
      `C ${nx} ${VH * 0.54}, ${sx} ${VH * 0.60}, ${sx} ${VH}`,
    ].join(' ');

    // Sequential: each line fires exactly after the previous finishes
    const flowDelay = 1.5 + i * FLOW_DURATION;

    return { d, drawDelay: i * 0.06, flowDelay };
  });

  const flowTransition = (delay) => ({
    duration: FLOW_DURATION,
    delay,
    repeat: Infinity,
    repeatDelay: FLOW_REPEAT,
    ease: 'linear',
  });

  const flowAnimate = {
    pathOffset: [0, 1 - FLOW_SEGMENT],
    opacity:    [0, 1, 1, 0],
  };

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="laser-bloom" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="laser-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base lines — draw in once on scroll */}
      {lines.map(({ d, drawDelay }, i) => (
        <motion.path
          key={`base-${i}`}
          d={d}
          stroke="#3A332B"
          strokeWidth="0.8"
          strokeOpacity="0.10"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, delay: drawDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      ))}

      {/* Laser outer bloom — wide soft halo */}
      {isInView && lines.map(({ d, flowDelay }, i) => (
        <motion.path
          key={`bloom-${i}`}
          d={d}
          stroke={LASER_OUTER}
          strokeWidth="2"
          strokeOpacity="0.2"
          fill="none"
          strokeLinecap="round"
          filter="url(#laser-bloom)"
          initial={{ pathLength: FLOW_SEGMENT, pathOffset: 0, opacity: 0 }}
          animate={flowAnimate}
          transition={flowTransition(flowDelay)}
        />
      ))}

      {/* Laser mid ring */}
      {isInView && lines.map(({ d, flowDelay }, i) => (
        <motion.path
          key={`mid-${i}`}
          d={d}
          stroke={LASER_MID}
          strokeWidth="0.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#laser-soft)"
          initial={{ pathLength: FLOW_SEGMENT, pathOffset: 0, opacity: 0 }}
          animate={flowAnimate}
          transition={flowTransition(flowDelay)}
        />
      ))}

      {/* Laser sharp core */}
      {isInView && lines.map(({ d, flowDelay }, i) => (
        <motion.path
          key={`core-${i}`}
          d={d}
          stroke={LASER_CORE}
          strokeWidth="0.25"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: FLOW_SEGMENT, pathOffset: 0, opacity: 0 }}
          animate={flowAnimate}
          transition={flowTransition(flowDelay)}
        />
      ))}
    </svg>
  );
};

const stories = [
  {
    badge: 'Plate Changes',
    badgeIcon: UtensilsCrossed,
    title: 'From restrictive to nourishing',
    description:
      'Moving away from fear-based eating to embracing a diverse, colourful plate that supports hormonal balance.',
    outcomeLabel: 'Average Outcome',
    outcome: '12+ food groups reintroduced',
    outcomeColor: 'text-primary',
  },
  {
    badge: 'Habit Shifts',
    badgeIcon: TrendingUp,
    title: 'From all-or-nothing to sustainable',
    description:
      'Building consistent, small habits that compound over time — not dramatic overhauls that fade.',
    outcomeLabel: 'Average Outcome',
    outcome: '85% habit retention at 6 months',
    outcomeColor: 'text-primary',
  },
  {
    badge: 'Report Improvements',
    badgeIcon: Activity,
    title: 'From concerning to optimal',
    description:
      'Watching lab values shift — HbA1c levels normalising, thyroid markers stabilising, cholesterol improving.',
    outcomeLabel: 'Average Outcome',
    outcome: 'Average 23% improvement in markers',
    outcomeColor: 'text-primary',
  },
];

const TransformationStories = () => {
  return (
    <section className="relative py-24 bg-background border-t border-charcoal/5 overflow-hidden">
      <AnimatedLines />
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px]">
            Real Results
          </span>
          <h2 className="text-4xl md:text-[52px] font-serif text-charcoal leading-tight tracking-tight">
            Stories of Transformation
          </h2>
          <p className="text-charcoal/60 text-sm font-medium">
            Not before and after photos — but meaningful shifts that change lives
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => {
            const BadgeIcon = story.badgeIcon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-[1.5rem] p-8 border border-charcoal/5 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                {/* Badge (Match Screenshot: rounded pill, beige-ish bg, small charcoal text) */}
                <div className="inline-flex items-center gap-2 bg-[#f4ebd9] text-charcoal text-[11px] font-medium px-3.5 py-1.5 rounded-full w-fit mb-8">
                  <BadgeIcon size={12} className="text-charcoal/70" />
                  {story.badge}
                </div>

                <h3 className="text-[22px] font-serif text-charcoal mb-4 leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-8 flex-grow">
                  {story.description}
                </p>

                {/* Divider + outcome */}
                <div className="border-t border-charcoal/10 pt-6">
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-semibold mb-2">
                    {story.outcomeLabel}
                  </p>
                  <p className={`text-base font-serif font-medium ${story.outcomeColor}`}>
                    {story.outcome}
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

export default TransformationStories;
