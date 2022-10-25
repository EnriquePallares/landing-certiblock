import React from 'react';
import BlogSection from './components/BlogSection/BlogSection';
import InfoBanner from './components/InfoBanner/InfoBanner';
import MainBanner from './components/MainBanner/MainBanner';
import SectorWorksMain from './components/SectorWorksMain/SectorWorksMain';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <MainBanner />
      <SectorWorksMain/>
      <BlogSection />
      <InfoBanner />
    </>
  );
};

export default Home;
