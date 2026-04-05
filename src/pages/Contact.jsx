import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

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

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
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
                className="bg-white rounded-[2rem] p-8 border border-charcoal/5 shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                  <Icon size={20} className="text-primary" />
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
          <div className="relative rounded-[2rem] overflow-hidden border border-charcoal/5 shadow-sm h-full min-h-[450px] lg:min-h-[550px] bg-white group">
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
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-charcoal/70">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#fafafa] border border-charcoal/5 rounded-xl px-4 py-4 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-charcoal/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#fafafa] border border-charcoal/5 rounded-xl px-4 py-4 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-charcoal/70">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#fafafa] border border-charcoal/5 rounded-xl px-4 py-4 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-[13px] font-bold text-charcoal/70">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your health goals..."
                  className="w-full bg-[#fafafa] border border-charcoal/5 rounded-xl px-4 py-4 text-[14px] text-charcoal placeholder:text-charcoal/40 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm resize-none flex-grow min-h-[140px]"
                />
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
