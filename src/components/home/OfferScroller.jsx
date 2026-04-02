import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { 
    title: 'Wellness Nutrition', 
    desc: 'Focuses on achieving optimal health through tailored nutritional plans that support overall well-being and energy levels. Proper nutritional guidance considering your body requirement which helps to improve lifestyle.', 
    to: '/wellness-nutrition',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/coporate.svg'
  },
  { 
    title: 'Medical Nutrition Therapy', 
    desc: 'Medical nutrition therapy (MNT) is a type of nutrition counseling that is provided to people who have certain medical conditions. It involves a detailed assessment of the person’s nutritional status.', 
    to: '/medical-nutrition-therapy',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/hospital.svg'
  },
  { 
    title: 'Weight Management', 
    desc: 'To lose weight, you need to have a balanced diet and a regular exercise routine. Weight management is the process of adopting long-term lifestyle modifications.', 
    to: '/weight-management',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/online.svg'
  },
  { 
    title: 'Nutrition for Skin and Hair', 
    desc: 'The health of your skin and hair is a reflection of your overall nutritional status. A balanced diet provides the essential nutrients for growth and repair.', 
    to: '/nutrition-for-skin-and-hair',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/sports.svg'
  },
  { 
    title: 'Corporate Nutrition Program', 
    desc: 'With this program, each employee’s health is optimized through nutritional counseling, healthy eating tips, and lifestyle modifications.', 
    to: '/corporate-nutrition-program',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/coporate.svg'
  },
  { 
    title: 'School Nutrition Program', 
    desc: 'A school nutrition program is a program that provides food and nutrition services to students. These programs are essential for ensuring that students have access to healthy and nutritious food.', 
    to: '/school-nutrition-program',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/040---School-Lunch.svg'
  },
];

export default function OfferScroller() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-2">One Stop Solution For All Your Nutritional Needs</div>
          <h2 className="text-3xl md:text-5xl font-black text-black font-serif italic">We Provide Best Nutrition Services</h2>
          <div className="mt-4 text-[16px] text-gray-500 max-w-2xl mx-auto">
            Offering range of expertise services to enhance the wellbeing of society
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group p-8 rounded-[2rem] bg-[#faf9f6] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-gray-100 mb-8 flex items-center justify-center group-hover:bg-[var(--sp-gold)] group-hover:text-white transition-colors">
                 {/* Icon placeholder */}
                 <div className="w-6 h-6 border-2 border-current rounded-full" />
              </div>
              <h3 className="text-xl font-black text-black mb-4 group-hover:text-[var(--sp-brown)] transition-colors">{s.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-8 line-clamp-3">{s.desc}</p>
              <Link
                to={s.to}
                className="inline-flex items-center gap-2 text-[var(--sp-brown)] font-black text-[12px] uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Read More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
