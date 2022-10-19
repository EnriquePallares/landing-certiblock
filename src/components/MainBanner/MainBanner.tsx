import { Button } from '@/components/ui/Button';
import React from 'react';
export interface MainBannerInterface {}

const MainBanner: React.FC<MainBannerInterface> = () => {
  return (
    <section className="main-banner relative text-white">
      <img src="/src/assets/images/bg-mainBanner.png" alt="Main banner" />
      <p className="text-4xl md:text-8xl font-black absolute vertical-alignment-abs">
        Por qué tener <br />a <span className="strokes-font">Certiblock</span>
        <Button text="SABER MÁS" type="ligth" className="px-16 ml-10">
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
      </p>
    </section>
  );
};

export default MainBanner;
