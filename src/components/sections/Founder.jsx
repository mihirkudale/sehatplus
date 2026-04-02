import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Stethoscope } from 'lucide-react';

const Founder = () => {
  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
                <div className="aspect-[4/5] rounded-[3rem] bg-[var(--sp-bg-muted)] relative overflow-hidden group border border-[var(--sp-border)] shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                      alt="Ambika Nair" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <h3 className="text-3xl font-serif text-white mb-2">Ambika Nair</h3>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sp-primary)]">Chief Nutritionist & Founder</p>
                    </div>
                </div>
                
                {/* Decorative background blur */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[color:var(--sp-primary)]/10 blur-[80px] rounded-full -z-10"></div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-[2px] w-8 bg-[var(--sp-primary)]"></div>
                  <span className="text-xs uppercase tracking-[.3em] text-[var(--sp-primary)] font-bold">The Visionary Mind</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#1A1A1A]">
                  Decades of <br />
                  <span className="italic font-normal text-[var(--sp-primary)]">Clinical Expertise.</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   With over 32 years of clinical experience and an affiliation with Jupiter Hospital, 
                   Ambika Nair has pioneered evidence-based nutrition in India. Her approach 
                   integrates deep metabolic science with practical lifestyle wisdom.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                   "Nutrition isn't a temporary fix; it's a lifelong medical pathway that respects your body's unique blueprint. My mission is to empower you with the science to heal."
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="flex items-start gap-4 p-6 rounded-3xl bg-[var(--sp-bg-muted)] border border-[var(--sp-border)]">
                      <div className="p-3 bg-white rounded-2xl shadow-sm">
                         <Award className="w-6 h-6 text-[var(--sp-primary)]" />
                      </div>
                      <div>
                         <h4 className="font-bold text-[#1A1A1A] mb-1">32+ Years</h4>
                         <p className="text-sm text-gray-500 font-medium">Clinical Experience</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4 p-6 rounded-3xl bg-[var(--sp-bg-muted)] border border-[var(--sp-border)]">
                      <div className="p-3 bg-white rounded-2xl shadow-sm">
                         <Building2 className="w-6 h-6 text-[var(--sp-primary)]" />
                      </div>
                      <div>
                         <h4 className="font-bold text-[#1A1A1A] mb-1">Jupiter Hospital</h4>
                         <p className="text-sm text-gray-500 font-medium">Clinically Verified</p>
                      </div>
                   </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
