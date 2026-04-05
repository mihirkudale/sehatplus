import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md mx-auto"
            style={{
              background: 'linear-gradient(135deg, #e8e4dc 0%, #d6cfc4 40%, #c9b99a 100%)',
            }}
          >
            <img
              src="/ambika-nair.png"
              alt="Ambika Nair"
              className="w-full h-full object-cover object-top scale-[1.08]"
            />
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                Founder &amp; Lead Nutritionist
              </span>
              <h1 className="text-5xl font-serif text-charcoal mt-2 leading-tight">
                Ambika Nair
              </h1>
            </div>

            <p className="text-charcoal/70 text-sm leading-relaxed">
              With over three decades of clinical experience, I've dedicated my career to understanding the intricate relationship between nutrition and health. My approach combines evidence-based medical nutrition with practical, sustainable lifestyle changes that fit into real life.
            </p>

            <p className="text-charcoal/70 text-sm leading-relaxed">
              Every individual is unique, and so should be their nutrition plan. Whether you're managing a chronic condition, seeking hormonal balance, or simply wanting to nourish your family better, I believe in creating plans that work with your lifestyle, not against it.
            </p>

            <blockquote className="border-l-2 border-charcoal/20 pl-5 italic text-charcoal/60 text-sm leading-relaxed">
              "True wellness isn't about restriction—it's about understanding what your body needs and learning to nourish it with intention."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
