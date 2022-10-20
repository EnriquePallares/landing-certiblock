import { BlogSection, InfoBanner, MainBanner } from '@/components';
import React from 'react';
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
