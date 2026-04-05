import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Academia from './pages/Academia';
import Transformations from './pages/Transformations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/academia" element={<Academia />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
