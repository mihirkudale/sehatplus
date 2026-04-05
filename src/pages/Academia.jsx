import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, ChefHat, Video, Podcast, ChevronRight, Clock, Bookmark, Play, Headphones, Calendar, X
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────── */

const tabs = [
  { id: 'insights', label: 'Insights', icon: BookOpen },
  { id: 'recipes', label: 'Food Recipes', icon: ChefHat },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'podcasts', label: 'Podcasts', icon: Podcast },
];

const articles = [
  {
    tag: 'HEART HEALTH',
    title: 'Heart-Healthy Nutrition After Medical Procedures',
    description: 'Evidence-based dietary strategies to support cardiac recovery and long-term heart health through personalised nutrition.',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    featured: true,
  },
  {
    tag: 'WEIGHT MANAGEMENT',
    title: 'Understanding BMI: Beyond the Numbers',
    description: 'Why BMI is just a starting point and how comprehensive assessment leads to better health outcomes.',
    readTime: '6 min read',
    date: 'Dec 10, 2024',
  },
  {
    tag: 'METABOLISM',
    title: 'Metabolic Correction Through Sustainable Eating',
    description: 'How gradual dietary changes can reset your metabolism and support lasting weight management.',
    readTime: '7 min read',
    date: 'Dec 5, 2024',
  },
  {
    tag: 'CLINICAL NUTRITION',
    title: 'Cholesterol Management: A Nutritional Approach',
    description: 'Clinical insights on managing lipid profiles through targeted nutrition without extreme restriction.',
    readTime: '5 min read',
    date: 'Nov 28, 2024',
  },
  {
    tag: 'LONGEVITY',
    title: 'Nutrition for Healthy Ageing: Skin, Hair & Vitality',
    description: 'Age-reversing nutrition strategies that support cellular health, skin elasticity, and overall vitality.',
    readTime: '9 min read',
    date: 'Nov 20, 2024',
  },
];

const recipesList = [
  { tag: 'HEART HEALTH', title: 'Heart-Healthy Quinoa Bowl', description: 'A balanced meal with optimal omega-3 fatty acids and fiber for cardiovascular support.', time: '25 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1000' },
  { tag: 'GUT HEALTH', title: 'Anti-Inflammatory Turmeric Dal', description: 'Traditional Indian lentils enhanced with anti-inflammatory spices for gut health.', time: '35 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1626500154744-e4b394ffea16?q=80&w=1000&auto=format&fit=crop' },
  { tag: 'METABOLISM', title: 'Low-Glycemic Vegetable Khichdi', description: 'A balanced, easy-to-digest meal perfect for metabolic correction and sustained energy.', time: '30 mins', difficulty: 'Easy', image: 'https://images.pexels.com/photos/6363501/pexels-photo-6363501.jpeg?auto=compress&cs=tinysrgb&w=1000' },
  { tag: 'CHOLESTEROL', title: 'Cholesterol-Friendly Oat Upma', description: 'A heart-smart breakfast option rich in soluble fiber for lipid management.', time: '20 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1589899476489-2b5e3e2b323f?q=80&w=1000&auto=format&fit=crop' },
  { tag: 'WEIGHT LOSS', title: 'Protein-Rich Paneer Tikka Salad', description: 'High-protein, low-carb option for sustained energy and muscle maintenance.', time: '30 mins', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000' },
  { tag: 'LONGEVITY', title: 'Antioxidant Berry Smoothie Bowl', description: 'Loaded with antioxidants for cellular health and skin rejuvenation.', time: '10 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000' }
];

const videosList = [
  { tag: 'EDUCATION', title: 'Sugar…It\'s Not So Sweet', description: 'Calgary Avansino unpacks the hidden dangers of sugar in our diets and how cutting back can transform your health.', youtubeId: 'lnvkNGc6YYM' },
  { tag: 'WEIGHT MANAGEMENT', title: 'Fighting Fat With Fat', description: 'A science-backed look at how dietary fat impacts body composition, weight management, and long-term metabolic health.', youtubeId: 'uRN9P0dOI6E' },
  { tag: 'CLINICAL NUTRITION', title: 'Eat for Real Change', description: 'Dr. Joanna McMillan shares evidence-based dietary guidance for lasting health transformation through real food.', youtubeId: 'fbeFn1Xcqo4' },
  { tag: 'LONGEVITY', title: 'How to Live to Be 100+', description: 'Dan Buettner reveals the nutritional secrets of the world\'s longest-lived communities and their timeless dietary habits.', youtubeId: 'ff40YiMmVkU' }
];

const podcastsList = [
  {
    ep: 'ZOE Science & Nutrition',
    title: 'Heart Health: Blood Pressure, Diet & Dementia Risk',
    description: 'Prof. Tim Spector reveals why blood pressure is one of the most overlooked health issues — and how small dietary changes can dramatically reduce your cardiovascular risk.',
    duration: '53 mins',
    spotifyId: '3yFOOKzqlO7q8gNedEP3v7',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400',
  },
  {
    ep: 'Secrets to Mindful Health',
    title: "Personalised Nutrition: Your Path to Better Health",
    description: 'Registered dietitian Ashley Koff explains why one-size-fits-all diets fail — and how customised nutrition solutions, GLP-1 understanding, and individual body needs lead to lasting wellness.',
    duration: '46 mins',
    spotifyId: '6MWVYZ9MNTNjFWje0VLaG5',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400',
  },
  {
    ep: 'T is for Transformation',
    title: 'Real Patient Journey: A Remarkable Transformation Story',
    description: 'Chrystal shares her inspiring journey from a terminal diagnosis to a full health transformation — powered by resilience, proper nutrition, and the right support system.',
    duration: '26 mins',
    spotifyId: '7tDSG2ETca9H8bsD0bXUEw',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

const Academia = () => {
  const [activeTab, setActiveTab] = useState('insights');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [playingPodcast, setPlayingPodcast] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* ── Hero ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-left space-y-5 mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider shadow-sm">
            <BookOpen size={13} />
            Knowledge Hub
          </div>
          <h1 className="text-5xl md:text-[64px] font-serif text-charcoal leading-tight">
            Academia
          </h1>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Evidence-based nutrition insights for informed, sustainable health.
          </p>
        </motion.div>

        {/* ── Tabs Navigation ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-start gap-3 mb-10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-charcoal/50'} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Dynamic Content ──────────────────────────────── */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* INSIGHTS */}
            {activeTab === 'insights' && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {articles.map((article, i) => (
                  <div key={i} className={`bg-[#fdfcfb]/40 rounded-[2rem] p-8 md:p-10 border border-charcoal/10 hover:border-primary/30 transition-colors cursor-pointer flex flex-col justify-between ${article.featured ? 'md:col-span-2' : ''}`}>
                    <div>
                      <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-3">{article.tag}</p>
                      <h3 className="text-3xl lg:text-[34px] font-serif text-charcoal leading-snug mb-4">{article.title}</h3>
                      <p className="text-[15px] text-charcoal/60 leading-relaxed mb-10 max-w-3xl">{article.description}</p>
                    </div>
                    <div className="flex items-center gap-8 text-[13px] text-charcoal/50 font-medium">
                      <div className="flex items-center gap-2">
                        <Clock size={15} strokeWidth={1.5} />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={15} strokeWidth={1.5} />
                        {article.date}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* FOOD RECIPES */}
            {activeTab === 'recipes' && (
              <motion.div
                key="recipes"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {recipesList.map((recipe, i) => (
                  <div key={i} className="bg-transparent rounded-3xl border border-charcoal/10 overflow-hidden flex flex-col hover:border-primary/30 transition-colors cursor-pointer group">
                    <div className="aspect-[4/3] bg-black/5 relative flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3">{recipe.tag}</p>
                      <h3 className="text-xl font-serif text-charcoal leading-snug mb-3">{recipe.title}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed mb-6 flex-grow">{recipe.description}</p>
                      <div className="flex items-center text-xs text-charcoal/40 font-medium">
                        <Clock size={13} className="mr-1.5" />
                        {recipe.time} &nbsp;&bull;&nbsp; {recipe.difficulty}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* VIDEOS */}
            {activeTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {videosList.map((vid, i) => (
                  <div key={i} className="bg-transparent rounded-3xl border border-charcoal/10 overflow-hidden group hover:border-primary/30 transition-colors flex flex-col">
                    <div className="aspect-video relative shrink-0 overflow-hidden">
                      {playingVideo === vid.youtubeId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1`}
                          title={vid.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => setPlayingVideo(vid.youtubeId)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                            alt={vid.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Play size={24} className="ml-1" strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3">{vid.tag}</p>
                      <h3 className="text-2xl font-serif text-charcoal leading-snug mb-2">{vid.title}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{vid.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* PODCASTS */}
            {activeTab === 'podcasts' && (
              <motion.div
                key="podcasts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
              >
                {podcastsList.map((pod, i) => (
                  <div key={i} className={`bg-transparent rounded-3xl border transition-colors group ${playingPodcast === pod.spotifyId ? 'border-primary/40' : 'border-charcoal/10 hover:border-primary/30'}`}>
                    <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                      {/* Cover image */}
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                        <img
                          src={pod.image}
                          alt={pod.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Info */}
                      <div className="flex-grow space-y-1 w-full md:w-auto text-center md:text-left">
                        <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{pod.ep}</p>
                        <h3 className="text-xl md:text-2xl font-serif text-charcoal leading-snug mb-1">{pod.title}</h3>
                        <p className="text-sm text-charcoal/60 leading-relaxed mb-2">{pod.description}</p>
                        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-charcoal/40 font-medium">
                          <Clock size={12} />
                          {pod.duration}
                        </div>
                      </div>
                      {/* Play / Close toggle */}
                      <button
                        onClick={() => setPlayingPodcast(playingPodcast === pod.spotifyId ? null : pod.spotifyId)}
                        className="hidden md:flex ml-auto w-11 h-11 rounded-full items-center justify-center border border-charcoal/10 text-charcoal/40 hover:text-primary hover:border-primary/40 transition-colors shrink-0"
                      >
                        {playingPodcast === pod.spotifyId
                          ? <X size={18} strokeWidth={1.5} />
                          : <Play size={18} className="ml-0.5" strokeWidth={1.5} />
                        }
                      </button>
                    </div>
                    {/* Spotify embed */}
                    {playingPodcast === pod.spotifyId && (
                      <div className="px-6 pb-6">
                        <iframe
                          style={{ borderRadius: '12px' }}
                          src={`https://open.spotify.com/embed/episode/${pod.spotifyId}?utm_source=generator`}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={pod.title}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <div className="mt-32 pt-20 border-t border-charcoal/5 bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-xl mx-auto px-6 space-y-4"
        >
          <h2 className="text-4xl lg:text-[42px] font-serif text-charcoal">Ready for Personalised Guidance?</h2>
          <p className="text-charcoal/55 text-sm leading-relaxed mb-8">
            Knowledge is the first step. Let's create a nutrition plan tailored specifically to your health goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg -translate-y-0.5 hover:-translate-y-1"
          >
            Book a Consultation
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>

    </div>
  );
};

export default Academia;
