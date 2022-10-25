import { Button } from '@/components/ui/Button';
import React from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
export interface MainBannerInterface {}

const MainBanner: React.FC<MainBannerInterface> = () => {
  return (
    <section className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <img src={bannerBackground} alt="Main banner" />
      <div className="text-4xl md:text-8xl text-secondary font-black absolute vertical-alignment-abs">
        Por qué tener a <span className="text-white">Certiblock</span>
        <Button
          text="SABER MÁS"
          type="primary"
          className="px-16 py-5 ml-10 font-normal self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default MainBanner;
