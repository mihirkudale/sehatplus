import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do you offer online consultations?',
    a: 'Yes — all consultations are available both in-clinic (Koregaon Park, Pune) and online via video call. You get the same personalised experience regardless of format.',
  },
  {
    q: 'How is Sehat Plus different from a generic diet plan?',
    a: "Every plan is built around your medical history, lifestyle, food preferences, and goals — not a template. We work alongside your physician when needed, especially for chronic conditions like diabetes or thyroid disorders.",
  },
  {
    q: 'Will I have to give up my favourite foods?',
    a: "Almost never. Our philosophy is about addition, not restriction — adding the right nutrients, not removing joy from eating. We adapt plans to your cuisine, culture, and taste.",
  },
  {
    q: 'How many sessions will I need?',
    a: 'It depends on your goals. A focused concern like pre-wedding weight loss may need 2–3 months. Managing a chronic condition like PCOS or diabetes is typically 6+ months for lasting impact. We assess this together in your first session.',
  },
  {
    q: 'Do you work with children and teenagers?',
    a: 'Yes. We have specific programs for children from age 5 upward — including picky eaters, growth-related concerns, and sports nutrition for teenage athletes.',
  },
  {
    q: 'What happens after my plan ends?',
    a: "We don't believe in dependency. Our goal is to equip you with the knowledge and habits to eat well independently. Maintenance check-ins are available quarterly if you'd like ongoing support.",
  },
  {
    q: 'Are the prices negotiable or are there EMI options?',
    a: 'Prices are fixed but we do offer flexible payment scheduling for longer programs. Reach out during your discovery call and we will find what works for you.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-charcoal/8 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      aria-expanded={isOpen}
    >
      <span className={`text-[15px] font-medium leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-charcoal group-hover:text-primary'}`}>
        {faq.q}
      </span>
      <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-charcoal/8 text-charcoal/50 group-hover:bg-primary/10 group-hover:text-primary'}`}>
        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-sm text-charcoal/65 leading-relaxed pb-5 pr-10">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50 block mb-3">
              Common Questions
            </span>
            <h2 className="font-serif text-4xl md:text-[44px] text-charcoal leading-tight mb-5">
              Everything you need to know
            </h2>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
              Can't find your answer here? We're happy to chat before you commit to anything.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20question%20about%20Sehat%20Plus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal text-[13px] font-medium px-5 py-3 rounded-xl hover:bg-charcoal/5 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
