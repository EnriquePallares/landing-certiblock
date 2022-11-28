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
    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-4 h-6 w-6">
    //   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/> 
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="39.815" height="31.879" viewBox="0 0 39.815 31.879">
      <g id="Grupo_313" data-name="Grupo 313" transform="translate(-1007.363 -708.564)">
        <path id="Trazado_3" data-name="Trazado 3" d="M1175.411,723.577,1188.7,738.1l-13.291,14.527" transform="translate(-142.879 -13.6)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
        <line id="Línea_26" data-name="Línea 26" x1="30.974" transform="translate(1008.363 724.121)" fill="none" stroke="#030f37" strokeLinecap="round" strokeWidth="2"/>
      </g>
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
        classTitle="text-white text-center font-light"
        classHighWord="text-primary strokes-font"
        paragraph={paragraph}
        link={{
          text: 'SABER MÁS',
          to: '#',
          type: 'primary',
          className: 'border-none font-normal py-1 px-8',
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
