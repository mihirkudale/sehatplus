import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, TrendingUp, Activity } from 'lucide-react';

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
          <p className="text-primary text-sm font-medium">
            Not before and after photos — but meaningful shifts that change lives
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((story, index) => {
            const BadgeIcon = story.badgeIcon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-7 border border-charcoal/8 shadow-sm flex flex-col"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-[11px] font-semibold px-3 py-1.5 rounded-full w-fit mb-6">
                  <BadgeIcon size={11} />
                  {story.badge}
                </div>

                <h3 className="text-xl font-serif text-charcoal mb-3 leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed flex-grow">
                  {story.description}
                </p>

                {/* Divider + outcome */}
                <div className="border-t border-charcoal/8 mt-6 pt-5">
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-semibold mb-1">
                    {story.outcomeLabel}
                  </p>
                  <p className={`text-sm font-semibold ${story.outcomeColor}`}>
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
