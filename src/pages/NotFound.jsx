import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <SEO title="Page Not Found" path="/404" description="This page doesn't exist." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="text-[96px] font-serif text-primary/20 leading-none select-none">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal mt-2 mb-4">
          Page not found
        </h1>
        <p className="text-charcoal/60 leading-relaxed mb-10">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="h-12 px-8 rounded-xl bg-primary text-white text-[14px] font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="h-12 px-8 rounded-xl border border-charcoal/20 text-charcoal text-[14px] font-medium hover:bg-charcoal/5 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
