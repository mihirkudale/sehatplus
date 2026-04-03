import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Breadcrumb Header */}
      <div className="bg-white py-20 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[11px] font-black uppercase tracking-[5px] text-[var(--sp-gold)] mb-4">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-24 pb-32">
        <div className="container mx-auto px-6">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              {
                icon: Phone,
                title: 'Phone Number',
                details: ['+91 9011256500', '+91 7666729164'],
                color: 'bg-[#f8f5f2]'
              },
              {
                icon: MapPin,
                title: 'Office Address',
                details: ['305, Seasons Business Square,', 'Opposite Kothari Hundai Showroom,', 'Aundh, Pune-411007'],
                color: 'bg-white shadow-xl scale-105'
              },
              {
                icon: Mail,
                title: 'Email Address',
                details: ['info@sehatplus.in'],
                color: 'bg-[#f8f5f2]'
              },
              {
                icon: Clock,
                title: 'Work Hours',
                details: ['Mon – Fri: 10:00 AM – 6:00 PM', 'Saturday: Closed', 'Sunday: Closed'],
                color: 'bg-[#f8f5f2]'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all duration-500`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--sp-gold)]/10 flex items-center justify-center text-[var(--sp-gold)] mb-6 group-hover:bg-[var(--sp-gold)] group-hover:text-white transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h4 className="text-[13px] font-black uppercase tracking-[3px] text-gray-400 mb-4">{item.title}</h4>
                {item.details.map((d, idx) => (
                  <p key={idx} className="text-lg font-bold text-[#2e2e2e] leading-relaxed">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Reach Us Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-4xl font-black text-[#2e2e2e] font-serif italic mb-10">Reach <span className="text-[var(--sp-brown)]">Us</span></h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-[var(--sp-gold)] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border-2 border-transparent focus:border-[var(--sp-gold)] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Email Id</label>
                    <input type="email" className="w-full bg-gray-50 border-2 border-transparent focus:border-[var(--sp-gold)] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                    <input type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-[var(--sp-gold)] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border-2 border-transparent focus:border-[var(--sp-gold)] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                </div>
                <button className="bg-[var(--sp-brown)] text-white px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[4px] shadow-xl hover:bg-[var(--sp-gold)] hover:translate-y-[-3px] transition-all duration-300 flex items-center gap-4">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Our Location Section */}
            <div className="space-y-12">
              <div className="bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-xl">
                <div className="p-10 border-b border-gray-50">
                  <h3 className="text-3xl font-black text-[#2e2e2e] font-serif italic">Our <span className="text-[var(--sp-brown)]">Location</span></h3>
                </div>
                <div className="h-[300px] overflow-hidden">
                  <img 
                    src="https://www.sehatplus.in/wp-content/uploads/2023/02/Seasons-Business-Square.jpg" 
                    alt="Seasons Business Square" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="h-[350px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.35532560867!2d73.80526031542158!3d18.558057987386854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec70c0c6609%3A0x6b3a241cb0f45214!2sSeasons%20Business%20Square!5e0!3m2!1sen!2sin!4v1676643209867!5m2!1sen!2sin" 
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Sehat+ Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
