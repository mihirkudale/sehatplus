import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Discovery',
    tag: null,
    price: '₹1,500',
    period: 'one-time',
    description: 'A single in-depth consultation to understand your health goals and get a clear roadmap.',
    features: [
      '60-minute consultation',
      'Personalised diet assessment',
      'Initial nutrition plan',
      'Written recommendations',
    ],
    cta: 'Book Now',
    highlight: false,
  },
  {
    name: 'Transform',
    tag: 'Most Popular',
    price: '₹8,500',
    period: '3 months',
    description: 'Our most chosen plan — structured, supported, and proven to deliver lasting results.',
    features: [
      'Initial 90-minute consultation',
      'Custom meal & nutrition plan',
      'Monthly follow-up sessions',
      'Weekly WhatsApp check-ins',
      'Lab report review',
      'Plan adjustments included',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Lifestyle',
    tag: null,
    price: '₹14,500',
    period: '6 months',
    description: 'Deep, sustained change for chronic conditions, complex goals, or long-term accountability.',
    features: [
      'Everything in Transform',
      'Bi-weekly follow-up sessions',
      'Priority WhatsApp support',
      'Grocery & meal prep guides',
      'Habit & lifestyle coaching',
      'Emergency consultations',
    ],
    cta: 'Get Started',
    highlight: false,
  },
];

const PricingPlans = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-primary/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-[48px] font-serif text-charcoal leading-tight">
            Plans & Packages
          </h2>
          <p className="text-charcoal/55 text-sm max-w-lg mx-auto leading-relaxed">
            Choose the level of support that fits your journey. All plans include personalised guidance — no generic diets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-primary text-white border-primary shadow-2xl lg:scale-[1.02]'
                  : 'bg-white border-charcoal/10 hover:shadow-lg hover:border-primary/20'
              }`}
            >
              {plan.tag && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-amber-400 text-charcoal text-[11px] font-bold px-3 py-1 rounded-full">
                  <Star size={10} fill="currentColor" /> {plan.tag}
                </span>
              )}

              <div className="mb-6">
                <p className={`text-[12px] font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? 'text-white/70' : 'text-charcoal/50'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5">
                  <span className={`text-4xl font-serif font-medium ${plan.highlight ? 'text-white' : 'text-charcoal'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/60' : 'text-charcoal/40'}`}>
                    / {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-3 leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-charcoal/60'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-white/80' : 'text-primary'}`}
                    />
                    <span className={plan.highlight ? 'text-white/85' : 'text-charcoal/70'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/contact')}
                className={`w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-white hover:bg-primary/90 hover:shadow-md'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[12px] text-charcoal/40 mt-8">
          All prices are indicative. Final pricing confirmed during your discovery call. GST applicable.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
