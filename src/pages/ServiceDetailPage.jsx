import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Calculator } from 'lucide-react';
import ServiceLayout from '../components/layout/ServiceLayout';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="pt-32 pb-48 text-center bg-[#faf9f6]">
        <h2 className="text-4xl font-black text-gray-300">Service Not Found</h2>
        <Link to="/" className="mt-8 inline-block text-[var(--sp-brown)] font-black uppercase tracking-widest">Back to Home</Link>
      </div>
    );
  }

  return (
    <ServiceLayout activeService={data.title}>
      <div className="space-y-12">
        {/* Main Banner Image */}
        <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-50">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        </div>

        {/* Long Description */}
        <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-medium">
          {data.description.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {/* Layout Render: Accordion (Wellness) */}
        {data.layoutType === 'accordion' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-[#2e2e2e] font-serif italic pb-4 border-b border-gray-100">
              {data.featuresTitle}
            </h3>
            <div className="space-y-4">
              {data.features.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-black text-[#2e2e2e] uppercase tracking-wider">{f.title}</span>
                    <ChevronDown className={`transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-500 font-medium border-t border-gray-100 bg-white">
                          {f.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Layout Render: Grid (MNT) */}
        {data.layoutType === 'grid' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-[#2e2e2e] font-serif italic pb-4 border-b border-gray-100">
              {data.featuresTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#faf9f6] p-5 rounded-2xl border border-gray-100 hover:border-[var(--sp-gold)] hover:bg-white transition-all group">
                  <CheckCircle2 size={24} className="text-[var(--sp-gold)] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black text-gray-600 uppercase tracking-widest">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Content (Weight Management) */}
        {data.extraImage && (
          <div className="aspect-square w-full rounded-[2rem] overflow-hidden bg-gray-50 border-4 border-white shadow-xl">
            <img src={data.extraImage} alt="Extra Details" className="w-full h-full object-contain" />
          </div>
        )}

        {data.showBMICalculator && (
          <div className="mt-16 bg-[var(--sp-brown)] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-md">
                <h3 className="text-3xl md:text-5xl font-black font-serif italic mb-4 whitespace-nowrap">BMI Calculator</h3>
                <p className="text-white/80 text-lg leading-relaxed font-medium">
                  Check your Body Mass Index (BMI) instantly to understand your health status better.
                </p>
              </div>
              <Link to="/bmi-calculator" className="bg-white text-[var(--sp-brown)] px-10 py-5 rounded-xl text-[12px] font-black uppercase tracking-[4px] hover:bg-[var(--sp-gold)] hover:text-white transition-all shadow-xl flex items-center gap-4">
                Calculate Now <Calculator size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </ServiceLayout>
  );
}
