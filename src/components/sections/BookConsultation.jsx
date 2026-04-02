import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Heart, Calendar, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare } from 'lucide-react';

const BookConsultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    goal: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < totalSteps) {
      handleNext();
    } else {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" name="name" placeholder="Full Name" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold"
                  value={formData.name} onChange={handleChange} required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="email" name="email" placeholder="Email Address" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold"
                  value={formData.email} onChange={handleChange} required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="tel" name="phone" placeholder="Phone Number" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold"
                  value={formData.phone} onChange={handleChange} required
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
               <select 
                 name="gender" 
                 className="w-full px-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold text-gray-600"
                 value={formData.gender} onChange={handleChange} required
               >
                 <option value="">Gender</option>
                 <option value="male">Male</option>
                 <option value="female">Female</option>
                 <option value="other">Other</option>
               </select>
               <input 
                 type="number" name="age" placeholder="Age" 
                 className="w-full px-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold"
                 value={formData.age} onChange={handleChange} required
               />
            </div>
            <select 
              name="goal" 
              className="w-full px-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold text-gray-600"
              value={formData.goal} onChange={handleChange} required
            >
              <option value="">Primary Health Goal</option>
              <option value="weight">Weight Management</option>
              <option value="hormonal">Hormonal Balance (PCOS/Thyroid)</option>
              <option value="gut">Gut Health</option>
              <option value="clinical">Clinical Condition (Diabetes/BP)</option>
              <option value="general">General Wellness</option>
            </select>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <textarea 
              name="message" 
              placeholder="Tell us a bit about your health concerns (optional)" 
              className="w-full px-4 py-4 bg-white border border-[var(--sp-border)] rounded-2xl outline-none focus:border-[var(--sp-primary)] transition-all font-semibold min-h-[150px]"
              value={formData.message} onChange={handleChange}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="bg-[var(--sp-bg-muted)] py-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl text-center">
            <div className="w-20 h-20 bg-[color:var(--sp-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-[var(--sp-primary)] w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif mb-4">Request Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. Our clinical team will review your details and get back to you within 24 hours to schedule your discovery call.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-[var(--sp-bg-muted)] py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[color:var(--sp-primary)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[color:var(--sp-primary)]/10 border border-[color:var(--sp-primary)]/20 mb-6">
              <span className="text-xs font-bold tracking-widest text-[var(--sp-primary)] uppercase">Begin Your Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight text-[#1A1A1A]">
              Your Health <br />
              <span className="italic font-normal text-[var(--sp-primary)]">Starts Here.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-xl leading-relaxed">
              Take the first step towards evidence-based metabolic health. Complete this short form to help us understand your needs.
            </p>
            
            <div className="space-y-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--sp-primary)] border border-gray-100">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">30-Min Discovery</h4>
                    <p className="text-sm text-gray-500">Free clinical baseline assessment</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--sp-primary)] border border-gray-100">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Clinically Guided</h4>
                    <p className="text-sm text-gray-500">Supervised by expert nutritionists</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--sp-primary)] border border-gray-100">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Holistic Lens</h4>
                    <p className="text-sm text-gray-500">Beyond just diet and calories</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-2xl relative">
            {/* Progress Bar */}
            <div className="mb-12">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--sp-primary)]">Step {step} of 3</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {step === 1 ? 'Personal Details' : step === 2 ? 'Health Profile' : 'Final Message'}
                  </span>
               </div>
               <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: '0%' }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    className="h-full bg-[var(--sp-primary)]"
                  />
               </div>
            </div>

            <form onSubmit={handleSubmit} className="min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>

              <div className="pt-12 flex items-center justify-between gap-4">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  className={`btn-primary flex items-center justify-center gap-2 group ${step === 1 ? 'w-full' : 'flex-1 ml-auto'}`}
                >
                  {step === totalSteps ? 'Complete Booking' : 'Next Step'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
