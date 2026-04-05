import ServicesGrid from '../components/sections/ServicesGrid';
import PricingPlans from '../components/sections/PricingPlans';
import FAQ from '../components/sections/FAQ';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div className="pt-24 bg-background min-h-screen font-sans">
      <SEO
        title="Our Services"
        path="/services"
        description="Explore Sehat Plus nutrition services — weight management, hormonal balance, diabetes & medical nutrition, PCOS, family & kids nutrition. Personalised plans by a certified clinical dietitian in Pune."
      />
      <ServicesGrid />
      <PricingPlans />
      <FAQ />
    </div>
  );
};

export default Services;
