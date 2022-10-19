import { Button, MainBanner } from '@/components';
import React from 'react';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <MainBanner />
    </>
  );
};

export default Home;
