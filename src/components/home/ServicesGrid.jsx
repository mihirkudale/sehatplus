import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Wellness Nutrition',
    desc: 'Proper nutritional guidance considering your body requirement which helps to improve lifestyle.',
    to: '/wellness-nutrition',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/couch.svg'
  },
  {
    title: 'Medical Nutrition Therapy',
    desc: 'Medical nutrition therapy (MNT) is a type of nutrition counseling that is provided to people who have certain medical conditions.',
    to: '/medical-nutrition-therapy',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/rd.svg' // Using RD for MNT as per theme
  },
  {
    title: 'Weight Management',
    desc: 'Weight management does not include only restrictive diets. It\'s a journey from Being Healthy to being Fit.',
    to: '/weight-management',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/weight%20scale.svg'
  },
  {
    title: 'Corporate Nutrition Program',
    desc: 'With this program, each employee\'s health is optimized through nutritional counseling and lifestyle modifications.',
    to: '/corporate-nutrition-program',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/coporate.svg'
  },
  {
    title: 'School Nutrition Program',
    desc: 'A school nutrition program that provides food and nutrition services to ensure students have access to healthy food.',
    to: '/school-nutrition-program',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/040---School-Lunch.svg'
  },
  {
    title: 'Online Consultation',
    desc: 'Online consultation is a convenient and affordable way to get expert nutritional guidance from anywhere.',
    to: '/online-consultation',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/online.svg'
  },
  {
    title: 'Hospital Dietetic Department',
    desc: 'We are experts in setting up hospital dietetic departments and clinical nutrition services.',
    to: '/hospital-dietetic-department-setup',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/hospital.svg'
  },
  {
    title: 'Sports Nutrition Services',
    desc: 'A sports nutrition program that helps athletes optimize performance, recovery, and endurance.',
    to: '/sports-nutrition-services',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/sports.svg'
  },
  {
    title: 'RD Examination',
    desc: 'We provide specialized guidance and preparation resources for the Registered Dietitian (RD) examination.',
    to: '/rd-examination-syllabus-revision',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/rd.svg'
  },
  {
    title: 'Sehat+ Academia',
    desc: 'Mrs. Ambika Nair is a passionate teacher and has held post as faculty at several prestigious institutions.',
    to: '/academics',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/couch.svg' // Placeholder if not found
  },
  {
    title: 'My Life Coach',
    desc: 'Trained in Neuro-Linguistic Programming, Reiki, and Crystal Healing for holistic mind-body wellness.',
    to: '/my-life-coach',
    icon: 'https://www.sehatplus.in/wp-content/themes/adama/public/playground_assets/online.svg' // Placeholder
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
            One Stop Solution For All Your Nutritional Needs
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black font-serif italic">
            We Provide Best Nutrition Services
          </h2>
          <p className="mt-4 text-[16px] text-gray-500 max-w-2xl mx-auto">
            Offering range of expertise services to enhance the wellbeing of society
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group p-10 pt-16 rounded-[20px] bg-[#f1ebe1] border border-transparent transition-all duration-500 relative mt-8"
            >
              <div className="absolute -top-10 left-10 h-20 w-20 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center p-4">
                <img src={s.icon} alt={s.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#8a6d5c] mb-6">
                {s.title}
              </h3>
              <p className="text-[15px] text-gray-500 font-medium leading-relaxed mb-8 line-clamp-4">{s.desc}</p>
              <Link
                to={s.to}
                className="inline-flex items-center gap-2 text-[#8a6d5c] font-bold text-[13px] uppercase tracking-wider hover:gap-4 transition-all"
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
