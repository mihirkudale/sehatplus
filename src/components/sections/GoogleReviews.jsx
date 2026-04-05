import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Kavita Deshpande',
    location: 'Kothrud, Pune',
    rating: 5,
    date: 'Feb 2025',
    text: "I've consulted 3 dietitians before and never stuck with any plan beyond 6 weeks. It's been 5 months with Ambika ma'am and I've lost 9 kg. She didn't ask me to give up my morning chai or weekend biryani — just adjusted portions and timing. The WhatsApp check-ins are honestly what kept me going.",
  },
  {
    name: 'Suresh Patil',
    location: 'Hadapsar, Pune',
    rating: 5,
    date: 'Dec 2024',
    text: "My doctor at Jupiter Hospital referred me here after my HbA1c hit 8.6. In 4 months it came down to 6.9 — without starting medication. The meal plan was built around what we already cook at home, no expensive superfoods. My wife started following it too and lost 5 kg without even trying.",
  },
  {
    name: 'Ananya Joshi',
    location: 'Wakad, Pune',
    rating: 4,
    date: 'Nov 2024',
    text: "Really happy with the PCOS results — lost 7 kg and my cycles are more regular for the first time in 3 years. One honest note: appointment slots fill up fast so I sometimes waited 2–3 weeks for a follow-up. The first session runs almost 90 minutes though which I wasn't expecting — very thorough.",
  },
  {
    name: 'Neha Kulkarni',
    location: 'Baner, Pune',
    rating: 5,
    date: 'Sep 2024',
    text: "Came for my 11-year-old son who refuses to eat anything green. Expected generic advice but ma'am gave us very specific tricks — recipes that look like things he already likes. 3 months later he's eating 6 vegetables. My husband and I quietly started the family plan too and we've both lost weight without making it a 'diet thing' at home.",
  },
  {
    name: 'Dr. Amit Sharma',
    location: 'Aundh, Pune',
    rating: 4,
    date: 'Aug 2024',
    text: "As a physician I came in skeptical — I've seen too many fad-diet nutritionists. The approach here is genuinely evidence-based. My LDL dropped from 168 to 122 in 3 months using food changes alone. One star off because the follow-up scheduling could be smoother (had to chase a bit). The clinical quality is excellent.",
  },
  {
    name: 'Ritu Mehta',
    location: 'Online — Mumbai',
    rating: 5,
    date: 'Jun 2024',
    text: "Doing this remotely from Mumbai and it works perfectly. Video calls are detailed, the plan document is proper, and WhatsApp response time is fast — usually within a few hours. Had hypothyroidism-related weight gain for 6 years and tried everything. Down 13 kg in 7 months. I refer everyone I know here.",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={13}
        className={i < count ? 'text-amber-400 fill-amber-400' : 'text-charcoal/20'}
      />
    ))}
  </div>
);

const GoogleReviews = () => {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-20 lg:py-28 bg-primary/5">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-charcoal/50 block mb-3">
              Patient Reviews
            </span>
            <h2 className="font-serif text-4xl md:text-[44px] text-charcoal leading-tight">
              What our patients say
            </h2>
          </div>

          {/* Rating badge */}
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 border border-charcoal/10 shadow-sm shrink-0">
            <div className="text-center">
              <p className="text-4xl font-serif text-charcoal font-medium leading-none">{avg}</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-charcoal/45 mt-1">{reviews.length} Google reviews</p>
            </div>
            {/* Google "G" logo */}
            <div className="w-10 h-10 rounded-full bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-charcoal/10 hover:shadow-md hover:border-primary/15 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal leading-none">{r.name}</p>
                    <p className="text-[11px] text-charcoal/45 mt-0.5">{r.location}</p>
                  </div>
                </div>
                <div className="w-6 h-6 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full" aria-label="Google">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>

              <Stars count={r.rating} />

              <p className="text-sm text-charcoal/65 leading-relaxed flex-grow">"{r.text}"</p>

              <p className="text-[11px] text-charcoal/35">{r.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
