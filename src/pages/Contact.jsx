import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CalendarDays } from 'lucide-react';

// Replace with your actual Calendly link once set up at calendly.com
const CALENDLY_URL = 'https://calendly.com/sehatplus';

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Koregaon Park, Pune', 'Maharashtra, India 411001'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@sehatplus.in'],
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Mon - Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
];

const CONTACT_EMAIL = 'hello@sehatplus.in';

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  else if (form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.';

  if (form.phone && !/^[+\d][\d\s\-()]{7,14}$/.test(form.phone))
    errors.phone = 'Enter a valid phone number.';

  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
};

const inputClass = (error) =>
  `w-full bg-[#fafafa] border rounded-xl px-4 py-4 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:bg-white focus:ring-2 transition-all shadow-sm ${
    error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-charcoal/5 focus:border-primary focus:ring-primary/20'
  }`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate({ ...form }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const subject = encodeURIComponent(`Consultation Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <SEO
        title="Contact Us"
        path="/contact"
        description="Book a nutrition consultation with Ambika Nair at Sehat Plus, Pune. Reach us by phone, email, or visit our clinic in Koregaon Park. Mon–Sat, 9 AM–6 PM."
      />
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 space-y-4"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal/50">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
            Let's Start Your Journey
          </h1>
          <p className="text-charcoal/60 text-sm max-w-lg mx-auto leading-relaxed">
            Ready to transform your health? Reach out for a consultation or simply ask us anything.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-[14px] font-semibold hover:bg-primary/90 hover:shadow-lg transition-all mt-2"
          >
            <CalendarDays size={16} />
            Book a Free Discovery Call
          </a>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group bg-white rounded-[2rem] p-8 border border-charcoal/5 shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-1 transition-colors duration-300">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-bold text-charcoal">{card.title}</p>
                <div className="space-y-1">
                  {card.lines.map((line) => (
                    <p key={line} className="text-xs text-charcoal/60 leading-snug font-medium">{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Map + Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Google Map */}
          <div className="relative rounded-[2rem] overflow-hidden border border-charcoal/5 shadow-sm h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[550px] bg-white group">
            <iframe
              title="Sehat Plus Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.8930!3d18.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05b6b2a8d4b%3A0x9f3b76f0da3b8e1!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%', position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Absolute Overlay Card */}
            <div className="absolute bottom-6 left-6 max-w-[calc(100%-3rem)] bg-white/95 backdrop-blur-md rounded-2xl p-5 flex flex-row items-center gap-4 shadow-xl border border-charcoal/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-charcoal mb-0.5">Sehat Plus Clinic</h4>
                <p className="text-xs text-charcoal/60 font-medium">Koregaon Park, Pune</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-charcoal/5 shadow-md flex flex-col h-full">
            <h2 className="text-[28px] lg:text-[32px] font-serif text-charcoal mb-2">Send a Message</h2>
            <p className="text-sm text-charcoal/60 mb-8 font-medium">Fill out the form below and we'll get back to you shortly.</p>

            {sent && (
              <div className="mb-6 bg-primary/10 text-primary text-sm rounded-xl px-5 py-4 font-bold border border-primary/20">
                Message sent! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-charcoal/70">Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p className="text-[12px] text-red-500 font-medium">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-charcoal/70">Email <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="text-[12px] text-red-500 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-charcoal/70">Phone <span className="text-charcoal/30 font-normal">(optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 98765 43210"
                  className={inputClass(errors.phone)}
                />
                {errors.phone && <p className="text-[12px] text-red-500 font-medium">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5 flex-grow flex flex-col">
                <label className="text-[13px] font-bold text-charcoal/70">Message <span className="text-red-400">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your health goals..."
                  className={`${inputClass(errors.message)} resize-none flex-grow min-h-[140px]`}
                />
                {errors.message && <p className="text-[12px] text-red-500 font-medium">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full mt-auto py-4 rounded-xl bg-primary text-white text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-primary/95 hover:shadow-lg transition-all duration-300"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
