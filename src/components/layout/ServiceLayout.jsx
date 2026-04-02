import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SERVICES = [
  { name: 'Wellness Nutrition', to: '/wellness-nutrition' },
  { name: 'Medical Nutrition Therapy', to: '/medical-nutrition-therapy' },
  { name: 'Weight Management', to: '/weight-management' },
  { name: 'Nutrition for Skin & Hair', to: '/nutrition-for-skin-and-hair' },
  { name: 'Sports Nutrition Services', to: '/sports-nutrition-services' },
  { name: 'Corporate Nutrition Program', to: '/corporate-nutrition-program' },
  { name: 'School Nutrition Program', to: '/school-nutrition-program' },
  { name: 'Online Consultation', to: '/online-consultation' },
  { name: 'Hospital Dietetic Department Setup', to: '/hospital-dietetic-department-setup' },
  { name: 'Sehat+ Academia', to: '/academics' },
  { name: 'RD Examination', to: '/rd-examination-syllabus-revision' },
  { name: 'My Life Coach', to: '/my-life-coach' },
];

export default function ServiceLayout({ children, activeService }) {
  const location = useLocation();

  return (
    <div className="pt-24 pb-32 bg-[#faf9f6]">
      {/* Breadcrumb / Hero Area */}
      <div className="bg-white py-20 mb-20 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[11px] font-black uppercase tracking-[5px] text-[var(--sp-gold)] mb-4">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              {activeService || 'Medical Services'}
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">{activeService || 'Service'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
                <h3 className="text-xl font-black text-[#2e2e2e] mb-8 font-serif italic pb-4 border-b border-gray-100">
                  Our Services
                </h3>
                <nav className="space-y-2">
                  {SERVICES.map((s) => {
                    const isActive = location.pathname === s.to;
                    return (
                      <Link
                        key={s.to}
                        to={s.to}
                        className={`flex items-center justify-between group p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-[var(--sp-brown)] text-white shadow-lg translate-x-2' 
                            : 'text-gray-500 hover:bg-gray-50 hover:text-[var(--sp-brown)]'
                        }`}
                      >
                        <span className={`text-[13px] font-bold uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                          {s.name}
                        </span>
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'}`} 
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Mini-Card */}
              <div className="bg-[var(--sp-brown)] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-2xl font-black font-serif italic mb-4 relative z-10">Need Help?</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10">
                  Talk to our experts today for a personalized consultation.
                </p>
                <Link to="/contact" className="inline-block bg-[var(--sp-gold)] text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-[3px] hover:scale-105 transition-transform relative z-10">
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(139,115,103,0.1)] border border-gray-100"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
