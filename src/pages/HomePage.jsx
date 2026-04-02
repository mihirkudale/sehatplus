import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Welcome from '../components/home/Welcome';
import WhyJoin from '../components/home/WhyJoin';
import ServicesGrid from '../components/home/ServicesGrid';
import SuccessStories from '../components/home/SuccessStories';
import SubscriptionPackages from '../components/home/SubscriptionPackages';
import Achievements from '../components/home/Achievements';
import LatestUpdates from '../components/home/LatestUpdates';
import RateHealth from '../components/home/RateHealth';
import Association from '../components/home/Association';
import MediaPreview from '../components/home/MediaPreview';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <WhyJoin />
      <ServicesGrid />
      <SuccessStories />
      <SubscriptionPackages />
      <Achievements />
      <LatestUpdates />
      <RateHealth />
      <Association />
      <MediaPreview />
    </>
  );
}

