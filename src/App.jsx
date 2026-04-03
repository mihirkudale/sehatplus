import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollManager from './components/ScrollManager';
import WhatsAppButton from './components/layout/WhatsAppButton';
import { motion } from 'framer-motion';

// Page Imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogPage from './pages/BlogPage';
import AchievementsPage from './pages/AchievementsPage';
import MediaPage from './pages/MediaPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BMICalculatorPage from './pages/BMICalculatorPage';

function App() {
  return (
    <div className="bg-white min-h-screen text-black">
      <ScrollManager />
      <Navbar />
      <WhatsAppButton />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
          
          {/* Service Detail Routes (Dynamic) */}
          {[
            'wellness-nutrition',
            'medical-nutrition-therapy',
            'weight-management',
            'nutrition-for-skin-and-hair',
            'sports-nutrition-services',
            'corporate-nutrition-program',
            'school-nutrition-program',
            'online-consultation',
            'hospital-dietetic-department-setup',
            'academics',
            'rd-examination-syllabus-revision',
            'my-life-coach'
          ].map(slug => (
            <Route key={slug} path={`/${slug}`} element={<ServiceDetailPage />} />
          ))}
          
          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Pre-Footer CTA */}
      <section className="bg-white px-6 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--sp-bronze-gradient)] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-b-[12px] border-[#7a655b]"
          >
            <div className="text-center md:text-left flex-1">
              <h3 className="text-4xl md:text-5xl font-black mb-4 font-serif italic text-white">Book an Appointment & Subscribe Sehat+</h3>
              <p className="text-white/80 font-bold text-lg">Take control of your nutrition journey. Schedule your appointment and stay updated with expert tips for a healthier you.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="bg-white text-[#2e2e2e] px-10 py-5 rounded-xl text-[13px] font-black uppercase tracking-widest hover:bg-[var(--sp-gold)] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                Book An Appointment
              </a>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl text-[13px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

