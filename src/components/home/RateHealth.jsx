import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedLines from '@components/ui/AnimatedLines';

export default function RateHealth() {
  return (
    <section id="rate-your-health" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[4rem] overflow-hidden bg-[var(--sp-bronze-gradient)] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          {/* Animated arch lines */}
          <AnimatedLines className="z-[1]" lineColor="rgba(255,255,255,0.1)" tracerColor="#f5d78e" />

          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 hover:opacity-30 transition-opacity duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover"
              alt="Healthy Life"
            />
          </div>
          
          {/* Decorative radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[var(--sp-gold)]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-white/30" />
              <span className="text-[12px] font-black uppercase tracking-[4px] text-white/70">
                Self Assessment
              </span>
              <div className="h-[2px] w-12 bg-white/30" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight font-serif italic mb-8">
              Rate Your Health
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12 italic">
              "It is always helpful to check your health and anthropometric measurements to monitor your well-being regularly."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSc55PQCvsd0MefN-3AfqMIzDasHPMFh8YlDGz3mZOpdWwaw4g/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#2e2e2e] px-12 py-5 rounded-2xl text-[13px] font-black uppercase tracking-[3px] shadow-2xl hover:bg-[var(--sp-gold)] hover:text-white transition-all duration-300"
              >
                Rate Your Health
              </motion.a>
              
              <Link to="/bmi-calculator">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl text-[13px] font-black uppercase tracking-[3px] hover:bg-white/10 transition-all duration-300"
                >
                  BMI Calculator
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

