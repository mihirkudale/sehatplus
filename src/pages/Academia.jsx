import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, ChefHat, Video, Podcast,
  Clock, Play, Headphones, ChevronRight, X, Calendar,
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────── */

const tabs = [
  { id: 'insights',  label: 'Insights',     icon: BookOpen },
  { id: 'recipes',   label: 'Food Recipes',  icon: ChefHat  },
  { id: 'videos',    label: 'Videos',        icon: Video    },
  { id: 'podcasts',  label: 'Podcasts',      icon: Podcast  },
];

const articles = [
  { id: 1, category: 'Heart Health',      title: 'Heart-Healthy Nutrition After Medical Procedures',   excerpt: 'Evidence-based dietary strategies to support cardiac recovery and long-term heart health through personalised nutrition.', readTime: '8 min read', date: 'Dec 15, 2024', featured: true },
  { id: 2, category: 'Weight Management', title: 'Understanding BMI: Beyond the Numbers',               excerpt: 'Why BMI is just a starting point and how comprehensive assessment leads to better health outcomes.',                    readTime: '6 min read', date: 'Dec 10, 2024' },
  { id: 3, category: 'Metabolism',        title: 'Metabolic Correction Through Sustainable Eating',     excerpt: 'How gradual dietary changes can reset your metabolism and support lasting weight management.',                         readTime: '7 min read', date: 'Dec 5, 2024'  },
  { id: 4, category: 'Clinical Nutrition',title: 'Cholesterol Management: A Nutritional Approach',     excerpt: 'Clinical insights on managing lipid profiles through targeted nutrition without extreme restriction.',                  readTime: '5 min read', date: 'Nov 28, 2024' },
  { id: 5, category: 'Longevity',         title: 'Nutrition for Healthy Ageing: Skin, Hair & Vitality',excerpt: 'Age-reversing nutrition strategies that support cellular health, skin elasticity, and overall vitality.',              readTime: '9 min read', date: 'Nov 20, 2024' },
];

const recipes = [
  { id: 1, category: 'Heart Health',  title: 'Heart-Healthy Quinoa Bowl',       description: 'A balanced meal with optimal omega-3 fatty acids and fiber for cardiovascular support.',   prepTime: '25 mins', difficulty: 'Easy',   image: '/images/recipes/quinoa-bowl.jpg'   },
  { id: 2, category: 'Gut Health',    title: 'Anti-Inflammatory Turmeric Dal',  description: 'Traditional Indian lentils enhanced with anti-inflammatory spices for gut health.',          prepTime: '35 mins', difficulty: 'Easy',   image: '/images/recipes/turmeric-dal.jpg'  },
  { id: 3, category: 'Metabolism',    title: 'Low-Glycemic Vegetable Khichdi',  description: 'A balanced, easy-to-digest meal perfect for metabolic correction and sustained energy.',    prepTime: '30 mins', difficulty: 'Easy',   image: '/images/recipes/khichdi.jpg'       },
  { id: 4, category: 'Cholesterol',   title: 'Cholesterol-Friendly Oat Upma',   description: 'A heart-smart breakfast option rich in soluble fiber for lipid management.',                prepTime: '20 mins', difficulty: 'Easy',   image: '/images/recipes/oat-upma.jpg'      },
  { id: 5, category: 'Weight Loss',   title: 'Protein-Rich Paneer Tikka Salad', description: 'High-protein, low-carb option for sustained energy and muscle maintenance.',                prepTime: '30 mins', difficulty: 'Medium', image: '/images/recipes/paneer-salad.jpg'  },
  { id: 6, category: 'Longevity',     title: 'Antioxidant Berry Smoothie Bowl', description: 'Loaded with antioxidants for cellular health and skin rejuvenation.',                       prepTime: '10 mins', difficulty: 'Easy',   image: '/images/recipes/smoothie-bowl.jpg' },
];

const videos = [
  { id: 1, category: 'Education',          youtubeId: 'lnvkNGc6YYM', title: "Sugar… It's Not So Sweet",  description: "Calgary Avansino unpacks the hidden dangers of sugar in our diets and how cutting back can transform your health.",                                             duration: '14:37' },
  { id: 2, category: 'Weight Management',  youtubeId: 'uRN9P0dOI6E', title: 'Fighting Fat With Fat',      description: 'A science-backed look at how dietary fat impacts body composition, weight management, and long-term metabolic health.',                                        duration: '16:22' },
  { id: 3, category: 'Clinical Nutrition', youtubeId: 'fbeFn1Xcqo4', title: 'Eat for Real Change',        description: 'Dr. Joanna McMillan shares evidence-based dietary guidance for lasting health transformation through real food.',                                               duration: '18:05' },
  { id: 4, category: 'Longevity',          youtubeId: 'ff40YiMmVkU', title: 'How to Live to Be 100+',     description: "Dan Buettner reveals the nutritional secrets of the world's longest-lived communities and their timeless dietary habits.",                                      duration: '19:35' },
];

const podcasts = [
  { id: 1, episode: 'ZOE Science & Nutrition',   spotifyId: '3yFOOKzqlO7q8gNedEP3v7', title: 'Heart Health: Blood Pressure, Diet & Dementia Risk',      description: 'Prof. Tim Spector reveals why blood pressure is one of the most overlooked health issues — and how small dietary changes can dramatically reduce your cardiovascular risk.', duration: '53 mins' },
  { id: 2, episode: 'Secrets to Mindful Health', spotifyId: '6MWVYZ9MNTNjFWje0VLaG5', title: 'Personalised Nutrition: Your Path to Better Health',       description: 'Registered dietitian Ashley Koff explains why one-size-fits-all diets fail — and how customised nutrition solutions and individual body needs lead to lasting wellness.',    duration: '46 mins' },
  { id: 3, episode: 'T is for Transformation',   spotifyId: '7tDSG2ETca9H8bsD0bXUEw', title: 'Real Patient Journey: A Remarkable Transformation Story',  description: 'Chrystal shares her inspiring journey from a terminal diagnosis to a full health transformation — powered by resilience, proper nutrition, and the right support system.',  duration: '26 mins' },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Academia = () => {
  const [activeTab, setActiveTab] = useState('insights');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [playingPodcast, setPlayingPodcast] = useState(null);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Academia — Insights & Recipes"
        path="/academia"
        description="Free nutrition insights, healthy recipes, expert videos, and wellness podcasts from Sehat Plus. Evidence-based content by clinical dietitian Ambika Nair."
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Knowledge Hub</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Academia</h1>
            <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed">
              Evidence-based nutrition insights for informed, sustainable health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Tab Bar ───────────────────────────────── */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-charcoal/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide snap-x snap-mandatory">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all snap-start ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'bg-muted text-charcoal/60 hover:bg-muted/80 hover:text-charcoal'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Fade hint — visible only on mobile to signal horizontal scroll */}
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background/95 to-transparent pointer-events-none lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Tab Content ──────────────────────────────────── */}
      <section className="pt-8 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12">

          {/* INSIGHTS */}
          {activeTab === 'insights' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">Insights</h2>
                <p className="text-charcoal/60">Educational articles on nutrition, metabolism, and lifestyle medicine.</p>
              </div>

              {articles.filter(a => a.featured).map(a => (
                <div key={a.id} className="bg-muted/30 border border-charcoal/10 rounded-2xl p-8 md:p-10 mb-8 hover:border-primary/30 transition-all cursor-pointer group">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{a.category}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal mt-3 mb-4 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-charcoal/60 mb-6 leading-relaxed max-w-2xl">{a.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/50">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{a.readTime}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{a.date}</span>
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-6">
                {articles.filter(a => !a.featured).map(a => (
                  <div key={a.id} className="bg-background border border-charcoal/10 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{a.category}</span>
                    <h3 className="font-serif text-lg text-charcoal mt-2 mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-charcoal/60 mb-4 line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-charcoal/50">
                      <span>{a.readTime}</span><span>•</span><span>{a.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* RECIPES */}
          {activeTab === 'recipes' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">Food Recipes</h2>
                <p className="text-charcoal/60">Heart-healthy and metabolism-friendly recipes for daily practice.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((r) => (
                  <div key={r.id} className="bg-background border border-charcoal/10 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="aspect-video overflow-hidden">
                      <img src={r.image} alt={r.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{r.category}</span>
                      <h3 className="font-serif text-lg text-charcoal mt-2 mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                      <p className="text-sm text-charcoal/60 mb-4 line-clamp-2">{r.description}</p>
                      <div className="flex items-center gap-3 text-xs text-charcoal/50">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{r.prepTime}</span>
                        <span>•</span>
                        <span>{r.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* VIDEOS */}
          {activeTab === 'videos' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">Videos</h2>
                <p className="text-charcoal/60">Visual education on nutrition science and lifestyle medicine.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((v) => (
                  <div key={v.id} className="bg-background border border-charcoal/10 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
                    <div className="aspect-video relative overflow-hidden">
                      {playingVideo === v.youtubeId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`}
                          title={v.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="relative w-full h-full cursor-pointer" onClick={() => setPlayingVideo(v.youtubeId)}>
                          <img
                            src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                            alt={v.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                          </div>
                          <span className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-xs text-charcoal/70">{v.duration}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{v.category}</span>
                      <h3 className="font-serif text-lg text-charcoal mt-2 mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                      <p className="text-sm text-charcoal/60 line-clamp-2">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PODCASTS */}
          {activeTab === 'podcasts' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">Podcasts</h2>
                <p className="text-charcoal/60">In-depth audio conversations on nutrition and lifestyle medicine.</p>
              </div>

              <div className="space-y-4">
                {podcasts.map((p) => (
                  <div key={p.id} className={`bg-background border rounded-xl transition-all ${playingPodcast === p.spotifyId ? 'border-primary/40 shadow-md' : 'border-charcoal/10 hover:border-primary/30 hover:shadow-lg'}`}>
                    <div className="p-6 flex items-start gap-5">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Headphones className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-charcoal/50">{p.episode}</span>
                        <h3 className="font-serif text-lg text-charcoal mt-1 mb-2">{p.title}</h3>
                        <p className="text-sm text-charcoal/60 mb-3 line-clamp-2">{p.description}</p>
                        <span className="text-xs text-charcoal/50 flex items-center gap-1">
                          <Clock className="w-3 h-3" />{p.duration}
                        </span>
                      </div>
                      <button
                        onClick={() => setPlayingPodcast(playingPodcast === p.spotifyId ? null : p.spotifyId)}
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-charcoal/10 text-charcoal/40 hover:text-primary hover:border-primary/40 transition-colors flex-shrink-0 mt-1"
                      >
                        {playingPodcast === p.spotifyId ? <X className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>
                    </div>
                    {playingPodcast === p.spotifyId && (
                      <div className="px-6 pb-6">
                        <iframe
                          style={{ borderRadius: '12px' }}
                          src={`https://open.spotify.com/embed/episode/${p.spotifyId}?utm_source=generator`}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={p.title}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">Ready for Personalised Guidance?</h2>
            <p className="text-charcoal/60 mb-8 max-w-xl mx-auto">
              Knowledge is the first step. Let's create a nutrition plan tailored specifically to your health goals.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Book a Consultation
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Academia;
