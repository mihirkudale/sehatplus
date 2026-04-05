import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [touched, setTouched] = useState(false);

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;

    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please subscribe me to the Sehat Plus newsletter.\n\nEmail: ${email}`);
    window.location.href = `mailto:hello@sehatplus.in?subject=${subject}&body=${body}`;

    setStatus('success');
    setEmail('');
    setTouched(false);
  };

  const showError = touched && !isValidEmail(email);

  return (
    <section className="py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles size={13} />
            Free Wellness Tips
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Get weekly nutrition insights
          </h2>
          <p className="text-charcoal/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Science-backed tips, seasonal recipes, and simple habit shifts — delivered to your inbox every week. No spam, unsubscribe anytime.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-6 py-4 rounded-2xl border border-primary/20"
            >
              You're in! Check your email to confirm.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (touched) setTouched(true); }}
                  onBlur={() => setTouched(true)}
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className={`w-full bg-white border rounded-xl px-5 py-3.5 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:ring-2 transition-all shadow-sm ${
                    showError
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-charcoal/10 focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {showError && (
                  <p className="text-[12px] text-red-500 font-medium mt-1.5 text-left">Enter a valid email address.</p>
                )}
              </div>
              <button
                type="submit"
                className="flex-shrink-0 h-[52px] px-6 rounded-xl bg-primary text-white text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                Subscribe
                <Send size={14} />
              </button>
            </form>
          )}

          <p className="text-[11px] text-charcoal/35 mt-5">
            Join 2,000+ readers. No spam — ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
