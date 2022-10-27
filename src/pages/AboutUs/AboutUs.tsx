import MainBannerReusable from '@/components/MainBannerReusable/MainBannerReusable';
import React, { FunctionComponent, ReactNode } from 'react';
import bannerBackground from '@/assets/images/bg-aboutUs.png';
export interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  const arrowLink: ReactNode = (
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
  );

  return (
    <section id="about-us-page">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        title="Quiénes"
        highlightedWord="Somos"
        classTitle="text-white text-center"
        classHighWord="text-primary strokes-font"
        paragraph="Somos una empresa colombiana que se dedica a la certificación de archivos y documentos, tanto digitales como físicos, mediante validación basada en Blockchain"
        link={{
          text: 'SABER MÁS',
          to: '#',
          className: 'bg-primary text-black border-none font-normal py-5 px-20',
          children: arrowLink,
        }}
      />
    </section>
  );
};

export default AboutUs;
