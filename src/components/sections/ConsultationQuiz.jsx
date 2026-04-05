import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: 'What brings you here?',
    subtitle: 'Select your primary health concern',
    options: [
      'Hormonal Balance',
      'Weight Management',
      'Medical Nutrition',
      'Family Wellness',
      'General Consultation',
    ],
  },
  {
    title: 'Preferred Time',
    subtitle: 'When would you like to be contacted?',
    options: [
      'Morning (9 AM - 12 PM)',
      'Afternoon (12 PM - 4 PM)',
      'Evening (4 PM - 7 PM)',
    ],
  },
  {
    title: 'Confirm Your Booking',
    subtitle: 'Please review your selections',
    options: [],
  },
];

const ConsultationQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState([null, null, null]);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    const updated = [...selected];
    updated[currentStep] = option;
    setSelected(updated);
  };

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/contact');
    }
  };

  const step = steps[currentStep];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-md">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 space-y-3"
        >
          <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px]">
            Begin Today
          </span>
          <h2 className="text-4xl font-serif text-charcoal leading-tight tracking-tight">
            Book Your Consultation
          </h2>
          <p className="text-charcoal/60 text-sm">
            Take the first step toward better health. We'll connect via WhatsApp for a personalised conversation.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                animate={{
                  backgroundColor: index <= currentStep ? 'var(--primary)' : '#e5e0d8',
                  color: index <= currentStep ? '#fff' : '#a09a8f',
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
              >
                {index + 1}
              </motion.div>
              {index < steps.length - 1 && (
                <div className="w-16 h-px bg-charcoal/15 mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-10 border border-charcoal/8 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Heading */}
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-serif text-charcoal">{step.title}</h2>
                <p className="text-charcoal/50 text-sm">{step.subtitle}</p>
              </div>

              {currentStep < 2 ? (
                <>
                  {/* Options */}
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {step.options.map((option) => {
                      const isSelected = selected[currentStep] === option;
                      return (
                        <motion.button
                          key={option}
                          onClick={() => handleSelect(option)}
                          whileTap={{ scale: 0.98 }}
                          className={`text-left px-5 py-4 rounded-2xl border text-sm font-medium transition-all duration-200 ${
                            isSelected
                              ? 'border-primary bg-primary/8 text-primary'
                              : 'border-charcoal/15 bg-transparent text-charcoal hover:border-charcoal/30'
                          }`}
                        >
                          {option}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Continue button */}
                  <div className="flex gap-3">
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="w-1/3 py-4 rounded-2xl border border-charcoal/15 text-charcoal text-sm font-medium hover:border-charcoal/30 transition-all duration-200"
                      >
                        Back
                      </button>
                    )}
                    <button
                      onClick={handleContinue}
                      disabled={!selected[currentStep]}
                      className={`${currentStep > 0 ? 'w-2/3' : 'w-full'} py-4 rounded-2xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Confirmation Step */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-charcoal/5 p-4 rounded-2xl">
                      <p className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold mb-1">Concern</p>
                      <p className="text-charcoal font-medium">{selected[0]}</p>
                    </div>
                    <div className="bg-charcoal/5 p-4 rounded-2xl">
                      <p className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold mb-1">Preferred Time</p>
                      <p className="text-charcoal font-medium">{selected[1]}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 py-4 rounded-2xl border border-charcoal/15 text-charcoal text-sm font-medium hover:border-charcoal/30 transition-all duration-200"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-2/3 py-4 rounded-2xl bg-[#25D366] text-white text-sm font-medium hover:opacity-90 transition-all duration-200"
                    >
                      Book via WhatsApp
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ConsultationQuiz;
