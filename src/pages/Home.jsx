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
  return (
    <div className="bg-background min-h-screen font-sans">
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
