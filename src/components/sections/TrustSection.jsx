import React from 'react';
import { ShieldCheck, Search, Leaf, BookOpen } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[var(--sp-primary)]" />,
      title: "Medical Soundness",
      description: "Every program is designed and reviewed by medical professionals to ensure safety and effectiveness."
    },
    {
      icon: <Search className="w-8 h-8 text-[var(--sp-primary)]" />,
      title: "Root Cause Analysis",
      description: "We don't just treat symptoms. We dive deep into your lifestyle and biology to find the root cause."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[var(--sp-primary)]" />,
      title: "Sustainable Results",
      description: "No crash diets or unsustainable routines. We build habits that last a lifetime."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[var(--sp-primary)]" />,
      title: "Evidence Based",
      description: "Our methods are backed by the latest nutritional science and clinical research."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Trust Sehat Plus?</h2>
          <p className="text-lg text-gray-600">
            We combine traditional wisdom with modern science to provide a holistic approach to your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-[var(--sp-bg-muted)] border border-[var(--sp-border)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
