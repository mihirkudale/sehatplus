import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building2, User } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Diabetes Wellness Client',
    content: 'The clinical guidance I received completely changed my perspective on managing my health. It was not just about dietary restrictions, but about sustainable lifestyle transformation.',
    rating: 5,
    icon: <User className="text-primary" />
  },
  {
    name: 'Dr. Michael R.',
    role: 'Clinical Partner',
    content: 'As a healthcare provider, I highly recommend Ambika Nair and the Sehat Plus team. Their approach is truly evidence-based and is a vital part of integrated care for many of our patients.',
    rating: 5,
    icon: <Building2 className="text-primary" />
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Client Success" 
          title="Clinical Impact & Transformative Journeys" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col items-start p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-charcoal/70 text-lg leading-relaxed mb-8 italic italic italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    {testimonial.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">{testimonial.name}</h4>
                    <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
