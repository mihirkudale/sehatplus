import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { GraduationCap, Stethoscope, Building2, Award, Users, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoogleReviews from '../components/sections/GoogleReviews';

const credentials = [
  {
    icon: GraduationCap,
    title: 'MSc Clinical Nutrition',
    description: 'Specialized training in therapeutic nutrition and dietary management',
  },
  {
    icon: Stethoscope,
    title: 'Certified Diabetes Educator',
    description: 'Expert in managing nutrition for diabetic patients',
  },
  {
    icon: Building2,
    title: 'Jupiter Hospital Affiliated',
    description: "Clinical dietitian at one of Pune's leading healthcare institutions",
  },
  {
    icon: Award,
    title: '32+ Years Experience',
    description: 'Over three decades of clinical nutrition practice',
  },
  {
    icon: Users,
    title: '10,000+ Lives Transformed',
    description: 'Trusted by thousands of individuals and families',
  },
  {
    icon: Leaf,
    title: 'Holistic Approach',
    description: 'Integrating medical science with sustainable lifestyle changes',
  },
];

const timeline = [
  {
    year: '1991',
    title: 'The Beginning',
    description:
      'Started clinical practice in Pune, driven by a passion to help people achieve better health through nutrition.',
  },
  {
    year: '2005',
    title: 'Hospital Affiliation',
    description:
      'Joined Jupiter Hospital as senior clinical dietitian, expanding expertise in medical nutrition therapy.',
  },
  {
    year: '2015',
    title: 'Sehat Plus Founded',
    description:
      'Established Sehat Plus to provide personalized, lifestyle-integrated nutrition care beyond clinical settings.',
  },
  {
    year: '2024',
    title: 'Continuing the Mission',
    description:
      'Expanding reach with digital consultations while maintaining the personal touch that defines our practice.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="About Ambika Nair"
        path="/about"
        description="Meet Ambika Nair — MSc Clinical Nutrition, Certified Diabetes Educator, and clinical dietitian at Jupiter Hospital, Pune. 32+ years helping 10,000+ patients transform their health."
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/ambika-nair.png"
                  alt="Ambika Nair, Founder and Lead Nutritionist at Sehat Plus"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary text-sm tracking-widest uppercase mb-4 block font-medium">
                Founder & Lead Nutritionist
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Ambika Nair
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                With over three decades of clinical experience, I've dedicated my career to
                understanding the intricate relationship between nutrition and health. My approach
                combines evidence-based medical nutrition with practical, sustainable lifestyle
                changes that fit into real life.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Every individual is unique, and so should be their nutrition plan. Whether you're
                managing a chronic condition, seeking hormonal balance, or simply wanting to nourish
                your family better, I believe in creating plans that work with your lifestyle, not
                against it.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 py-2 italic text-charcoal/80 font-serif text-xl">
                "True wellness isn't about restriction—it's about understanding what your body needs
                and learning to nourish it with intention."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Credentials & Expertise ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Credentials &amp; Expertise
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              A foundation of rigorous training and decades of hands-on experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm border border-charcoal/10 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Journey ──────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">The Journey</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Three decades of learning, growing, and helping others achieve their health goals
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-charcoal/15"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary" />
                <span className="text-primary font-medium text-sm tracking-wider">{item.year}</span>
                <h3 className="font-serif text-xl text-charcoal mt-2 mb-2">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── My Philosophy ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">My Philosophy</h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed text-left md:text-center">
                <p>
                  I believe that nutrition is deeply personal. What works for one person may not work
                  for another, and that's perfectly okay. My role is to understand your unique body,
                  your lifestyle, your challenges, and your goals—then create a plan that truly fits.
                </p>
                <p>
                  I don't believe in fad diets or quick fixes. Real, lasting change comes from
                  understanding the 'why' behind what you eat and making small, sustainable shifts
                  that compound over time. It's not about perfection; it's about progress.
                </p>
                <p>
                  Whether you're a busy professional, a new mother, managing a health condition, or
                  simply wanting to feel more energized—I'm here to guide you with the same care and
                  attention I'd give to my own family.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Ready to Begin?</h2>
            <p className="text-charcoal/60 max-w-xl mx-auto mb-8">
              Let's have a conversation about your health goals and how we can work together to
              achieve them.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Begin Your Journey
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
