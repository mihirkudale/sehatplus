import { useState } from 'react';
import { MessageCircle, Instagram, Mail, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showError = touched && !isValid;

  const handleSubscribe = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please subscribe me to the Sehat Plus newsletter.\n\nEmail: ${email}`);
    window.location.href = `mailto:hello@sehatplus.in?subject=${subject}&body=${body}`;
    setSubscribed(true);
    setEmail('');
    setTouched(false);
  };

  return (
    <footer className="bg-background border-t border-charcoal/8">
      <div className="container mx-auto px-6 max-w-6xl py-16">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Sehat Plus Logo" 
                className="h-12 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <p className="text-charcoal font-medium text-sm">Ambika Nair</p>
              <p className="text-charcoal/50 text-sm mt-0.5">Pune, India</p>
            </div>

            <p className="text-charcoal/40 text-sm italic leading-relaxed max-w-xs">
              Medically guided nutrition. Lifestyle-led care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="https://www.instagram.com/sehatplus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram size={17} />
              </a>
              <a
                href="mailto:hello@sehatplus.in"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Right — Newsletter */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-charcoal font-serif text-xl mb-1">Weekly nutrition insights</p>
              <p className="text-charcoal/50 text-sm leading-relaxed">
                Science-backed tips and seasonal recipes delivered to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>

            {subscribed ? (
              <p className="text-primary text-sm font-semibold bg-primary/10 px-5 py-3 rounded-xl border border-primary/20 w-fit">
                You're in! Check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="flex flex-col gap-1.5">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (touched) setTouched(true); }}
                    onBlur={() => setTouched(true)}
                    placeholder="your@email.com"
                    aria-label="Email for newsletter"
                    className={`flex-1 bg-white border rounded-xl px-4 py-3 text-[13px] text-charcoal placeholder:text-charcoal/40 outline-none focus:ring-2 transition-all ${
                      showError
                        ? 'border-red-400 focus:ring-red-100'
                        : 'border-charcoal/10 focus:border-primary focus:ring-primary/20'
                    }`}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="shrink-0 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Send size={15} />
                  </button>
                </div>
                {showError && (
                  <p className="text-[11px] text-red-500 font-medium">Enter a valid email address.</p>
                )}
                <p className="text-[11px] text-charcoal/35 mt-0.5">Join 2,000+ readers.</p>
              </form>
            )}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-charcoal/8 mt-12 pt-6">
          <p className="text-charcoal/35 text-xs text-center">
            © 2026 Sehat Plus. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
