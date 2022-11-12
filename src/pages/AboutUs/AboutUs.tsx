import MainBannerReusable from '@/components/MainBannerReusable/MainBannerReusable';
import React, { ReactNode } from 'react';
import bannerBackground from '@/assets/images/bg-aboutUs.png';
import bannerBackgroundMobile from '@/assets/images/bg-aboutUs-mobile.png';
import CompaniesWithWeWork from './components/CompaniesWithWeWork/CompaniesWithWeWork';
import RegisterYourCompany from './components/RegisterYourCompany/RegisterYourCompany';
import OurTeam from './components/OurTeam/OurTeam';
import TheValues from './components/TheValues/TheValues';
export interface AboutUsInterface {}

const AboutUs: React.FC<AboutUsInterface> = () => {
  const arrowLink: ReactNode = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );

  const paragraph: ReactNode = (
    <p>
      Somos una empresa colombiana que se dedica a la certificación de archivos
      y documentos, tanto digitales como físicos, mediante validación basada en{' '}
      <span className="underline">Blockchain</span>
    </p>
  );

  return (
    <section id="about-us-page">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        title="Quiénes"
        highlightedWord="Somos"
        classTitle="text-white text-center"
        classHighWord="text-primary strokes-font"
        paragraph={paragraph}
        link={{
          text: 'SABER MÁS',
          to: '#',
          className: 'bg-primary text-black border-none font-normal py-5 px-20',
          children: arrowLink,
        }}
      />
      <CompaniesWithWeWork />
      <RegisterYourCompany />
      <OurTeam />
      <TheValues />
    </section>
  );
};

export default AboutUs;
