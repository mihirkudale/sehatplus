import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#FAF9F6]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-[#2D5A27]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[70%] bg-[#7CB384]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-100 mb-8 animate-fade-in shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#2D5A27]" />
          <span className="text-sm font-semibold tracking-wide text-[#2D5A27] uppercase">Evidence-Based Wellness</span>
        </div>

        <h1 className="max-w-4xl mx-auto mb-8 animate-fade-in stagger-1">
          Rooted in Science,{' '}
          <span className="italic font-normal text-[#2D5A27]">Refined by Results.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12 animate-fade-in stagger-2 leading-relaxed">
          Experience a transformative health journey led by Clinical Nutritionists. We don't just guide; we empower you with sustainable, medical-grade nutrition strategies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
          <a href="#booking" className="btn-primary group flex items-center gap-2 px-8 py-4">
            Begin Your Journey
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="btn-secondary flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full">
            <div className="w-8 h-8 rounded-full bg-[#2D5A27]/10 flex items-center justify-center p-2">
              <Play size={14} className="text-[#2D5A27] fill-[#2D5A27]" />
            </div>
            How We Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
