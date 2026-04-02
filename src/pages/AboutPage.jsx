import React from 'react';
import AboutHero from '../components/about/AboutHero';
import FoodAsMedicine from '../components/about/FoodAsMedicine';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';
import Association from '../components/about/Association';

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6]">
      <AboutHero />
      <FoodAsMedicine />
      <Mission />
      <Team />
      <Association />
    </div>
  );
}

