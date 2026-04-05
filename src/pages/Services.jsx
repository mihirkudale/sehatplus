import ServicesGrid from '../components/sections/ServicesGrid';
import TransformationStories from '../components/sections/TransformationStories';
import InsightsArticles from '../components/sections/InsightsArticles';

const Services = () => {
  return (
    <div className="pt-24 bg-background min-h-screen font-sans">
      <ServicesGrid />
      <TransformationStories />
      <InsightsArticles />
    </div>
  );
};

export default Services;
