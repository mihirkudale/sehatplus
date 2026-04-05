import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="pt-24 pb-24 bg-[#F3F4F1] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Navigation Breadcrumb placeholder */}

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl relative z-10">
              <img
                src="/ambika-nair.png"
                alt="Ambika Nair"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#2D5A43]/10 rounded-[2.5rem] -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center space-y-8 order-1 md:order-2"
          >
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#2D5A43] mb-4 block">
                FOUNDER & LEAD NUTRITIONIST
              </span>
              <h1 className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] mb-6">
                Ambika Nair
              </h1>
              <div className="w-20 h-1.5 bg-[#2D5A43] mb-8" />
            </div>

            <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed font-light">
              <p>
                With over three decades of clinical experience, I've dedicated my career to understanding the intricate relationship between nutrition and health. My approach combines evidence-based medical nutrition with practical, sustainable lifestyle changes that fit into real life.
              </p>
              <p>
                Every individual is unique, and so should be their nutrition plan. Whether you're managing a chronic condition, seeking hormonal balance, or simply wanting to nourish your family better, I believe in creating plans that work with your lifestyle, not against it.
              </p>
              <footer className="pt-4 italic border-l-4 border-[#2D5A43] pl-6 text-[#1A1A1A] text-xl font-serif">
                "True wellness isn't about restriction—it's about understanding what your body needs and learning to nourish it with intention."
              </footer>
            </div>
          </motion.div>
        </div>

        {/* Credentials & Expertise */}
        <motion.div {...fadeInUp} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">Credentials & Expertise</h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">A foundation of rigorous training and decades of hands-on experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MSc Clinical Nutrition",
                desc: "Specialized training in therapeutic nutrition and dietary management",
                icon: "🎓"
              },
              {
                title: "Certified Diabetes Educator",
                desc: "Expert in managing nutrition for diabetic patients",
                icon: "🩺"
              },
              {
                title: "Jupiter Hospital Affiliated",
                desc: "Clinical dietitian at one of Pune's leading healthcare institutions",
                icon: "🏛️"
              },
              {
                title: "32+ Years Experience",
                desc: "Over three decades of clinical nutrition practice",
                icon: "⚡"
              },
              {
                title: "10,000+ Lives Transformed",
                desc: "Trusted by thousands of individuals and families",
                icon: "👩‍⚕️"
              },
              {
                title: "Holistic Approach",
                desc: "Integrating medical science with sustainable lifestyle changes",
                icon: "🌿"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/50 shadow-xl shadow-[#2D5A43]/5"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Journey */}
        <motion.div {...fadeInUp} className="mb-32 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">The Journey</h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Three decades of learning, growing, and helping others achieve their health goals
              </p>
            </div>

            <div className="md:w-2/3 space-y-12 relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#2D5A43]/10" />

              {[
                {
                  year: "1991",
                  title: "The Beginning",
                  desc: "Started clinical practice in Pune, driven by a passion to help people achieve better health through nutrition."
                },
                {
                  year: "2005",
                  title: "Hospital Affiliation",
                  desc: "Joined Jupiter Hospital as senior clinical dietitian, expanding expertise in medical nutrition therapy."
                },
                {
                  year: "2015",
                  title: "Sehat Plus Founded",
                  desc: "Established Sehat Plus to provide personalized, lifestyle-integrated nutrition care beyond clinical settings."
                },
                {
                  year: "2024",
                  title: "Continuing the Mission",
                  desc: "Expanding reach with digital consultations while maintaining the personal touch that defines our practice."
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-[#F3F4F1] border-4 border-[#2D5A43] z-10" />
                  <span className="text-[12px] font-bold text-[#2D5A43] tracking-widest block mb-1">{step.year}</span>
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* My Philosophy */}
        <motion.div {...fadeInUp} className="mb-32 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-serif text-[#1A1A1A] mb-12">My Philosophy</h2>

          <div className="space-y-10 text-xl font-light text-[#4A4A4A] leading-[1.8]">
            <p>
              I believe that nutrition is deeply personal. What works for one person may not work for another, and that's perfectly okay. My role is to understand your unique body, your lifestyle, your challenges, and your goals—then create a plan that truly fits.
            </p>
            <p>
              I don't believe in fad diets or quick fixes. Real, lasting change comes from understanding the 'why' behind what you eat and making small, sustainable shifts that compound over time. It's not about perfection; it's about progress.
            </p>
            <p>
              Whether you're a busy professional, a new mother, managing a health condition, or simply wanting to feel more energized—I'm here to guide you with the same care and attention I'd give to my own family.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...fadeInUp}
          className="text-center py-16 mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">Ready to Begin?</h2>
          <p className="text-[#4A4A4A] mb-10 max-w-md mx-auto leading-relaxed">
            Let's have a conversation about your health goals and how we can work together to achieve them.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2D5A43] text-white font-medium px-10 py-4 rounded-full hover:bg-[#245038] transition-colors"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
