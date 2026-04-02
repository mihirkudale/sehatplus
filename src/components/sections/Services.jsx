import React from 'react';
import { Heart, Brain, Wind, Activity, Apple, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hormonal Balance",
      description: "Comprehensive care for PCOD, PCOS, and thyroid-related concerns through targeted nutrition.",
      tag: "Women's Health"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Deep Gut Healing",
      description: "Restore your gut microbiome to improve digestion, immunity, and overall mental clarity.",
      tag: "Digestive Health"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Sustainable Weight",
      description: "Scientific weight management that focuses on fat loss while preserving muscle and energy.",
      tag: "Weight Management"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Autoimmune Support",
      description: "Anti-inflammatory protocols designed to manage and reduce autoimmune triggers.",
      tag: "Clinical Care"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Medical Nutrition",
      description: "Evidence-based therapy for diabetes, hypertension, and other lifestyle conditions.",
      tag: "Clinical Nutrition"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Wellness",
      description: "Creating healthy habits for the whole family through balanced and joyful eating.",
      tag: "Holistic Health"
    }
  ];

  return (
    <section id="services" className="bg-[var(--sp-bg-muted)] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#1A1A1A]">
              What Brings You Here? <br />
              <span className="text-[var(--sp-primary)] italic font-normal">Choose Your Path.</span>
            </h2>
            <p className="text-lg text-gray-600">
              We provide specialized nutrition programs designed to address specific health concerns through a clinical and holistic lens.
            </p>
          </div>
          <a href="#booking" className="btn-outline">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border border-gray-100"
            >
              <div className="p-10 flex flex-col h-full bg-white rounded-[2.4rem] overflow-hidden">
                <div className="inline-block px-4 py-1 rounded-full bg-white text-[var(--sp-primary)] text-xs font-bold tracking-widest uppercase mb-8 w-fit mx-auto md:mx-0 border border-[var(--sp-border)]">
                  {service.tag}
                </div>
                
                <div className="mb-8 p-4 bg-[color:var(--sp-primary)]/10 rounded-2xl w-fit group-hover:bg-[var(--sp-primary)] transition-colors duration-500 mx-auto md:mx-0">
                  <div className="text-[var(--sp-primary)] group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--sp-primary)] transition-colors duration-300 text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-center md:text-left">
                  {service.description}
                </p>

                <a 
                  href="#booking" 
                  className="flex items-center gap-2 text-sm font-bold text-[var(--sp-primary)] uppercase tracking-wider group/link justify-center md:justify-start"
                >
                  Explore More
                  <div className="w-6 h-[2px] bg-[var(--sp-primary)] group-hover/link:w-10 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
