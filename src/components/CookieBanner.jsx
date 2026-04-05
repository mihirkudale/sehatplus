import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'sehatplus_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100%-3rem)] sm:w-auto bg-white rounded-2xl shadow-2xl border border-charcoal/10 p-5"
        >
          <p className="text-[13px] font-semibold text-charcoal mb-1">We use cookies</p>
          <p className="text-[12px] text-charcoal/60 leading-relaxed mb-4">
            We use cookies to improve your browsing experience and analyse site traffic.
            By continuing, you agree to our use of cookies.
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 bg-primary text-white text-[12px] font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="flex-1 border border-charcoal/20 text-charcoal text-[12px] font-bold py-3 rounded-xl hover:bg-charcoal/5 transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
