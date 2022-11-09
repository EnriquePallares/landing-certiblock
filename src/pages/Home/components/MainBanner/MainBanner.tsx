import { Button } from '@/components/ui/Button';
import React from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
import bannerBackgroundMobile from '@/assets/images/bg-home-mobile.png';
import { Accordion } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export interface MainBannerInterface {}

const posts = [
  {
    title: 'Qué es certificación de origen',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Qué es Web 3.0',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Por qué Certiblock',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Beneficios de certificarse',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
];

const MainBanner: React.FC<MainBannerInterface> = () => {
  return (
    <section className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-auto md:aspect-video w-full"
        />
      </picture>
      <div className="text-4xl md:text-8xl md:text-secondary font-black absolute vertical-alignment-abs">
        Por qué tener a <span className="text-white">Certiblock</span>
        <Button
          text="SABER MÁS"
          type="primary"
          className="md:px-16 md:py-5 font-normal self-end hidden md:flex"
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
        <Button
          text="SABER MÁS"
          type="ligth-text-black"
          className="md:px-16 md:py-5 md:ml-10 font-normal self-end md:hidden"
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
