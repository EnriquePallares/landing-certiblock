import React from 'react';
import BlogSection from './components/BlogSection/BlogSection';
import InfoBanner from './components/InfoBanner/InfoBanner';
import MainBanner from './components/MainBanner/MainBanner';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <MainBanner />
      <BlogSection />
      <InfoBanner />
    </>
  );
};

export default Home;
