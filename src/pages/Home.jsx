import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import PathSelector from '../components/sections/PathSelector';
import SehatMethod from '../components/sections/SehatMethod';
import OurServices from '../components/sections/OurServices';
import TransformationStories from '../components/sections/TransformationStories';
import InsightsArticles from '../components/sections/InsightsArticles';
import Stats from '../components/sections/Stats';
import BMICalculator from '../components/sections/BMICalculator';
import ConsultationQuiz from '../components/sections/ConsultationQuiz';

const Home = () => {
  const { hash } = useLocation();

  if (hash === '#method') {
    return (
      <div className="bg-background min-h-screen font-sans">
        <SehatMethod />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO
        path="/"
        description="Sehat Plus offers medically guided, personalised nutrition plans for weight management, hormonal health, diabetes, and family wellness. Led by Ambika Nair, clinical dietitian with 32+ years of experience in Pune."
      />
      <Hero />
      <Stats />
      <PathSelector />
      <SehatMethod />
      <OurServices />
      <TransformationStories />
      <InsightsArticles />
      <BMICalculator />
      <ConsultationQuiz />
    </div>
  );
};

export default Home;
