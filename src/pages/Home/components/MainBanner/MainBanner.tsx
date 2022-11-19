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
    <section className="main-banner extend-bg-color relative bg-dark-blue-0">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-[1/3] md:aspect-video"
        />
      </picture>
      <div className="vertical-alignment-abs absolute flex w-full flex-wrap px-8 text-4xl font-black md:justify-center md:text-8xl md:text-secondary">
        <h3 className="w-full flex-[0_0_auto] md:w-6/12">
          Por qué tener a <span className="text-white">Certiblock</span>
        </h3>
        <Button
          text="SABER MÁS"
          type="primary"
          className="mb-2 hidden w-auto flex-[0_0_auto] self-end font-normal md:inline-block md:px-16 md:py-5"
        >
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
        </Button>
        <Button
          text="SABER MÁS"
          type="ligth-text-black"
          className="mt-6 font-normal md:ml-10 md:hidden md:px-16 md:py-5"
        >
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
        </Button>

        <div className="mt-24 w-full md:hidden">
          <h4 className="mb-8 text-2xl font-black">
            Aprende con nosotros <br />
            sobre Web 3.0
          </h4>

          <Accordion className="text-dark-blue-4">
            {posts.map((post, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title className="bg-white text-lg !text-current hover:bg-primary">
                  {post.title}
                </Accordion.Title>
                <Accordion.Content className="bg-white text-base text-current">
                  <p className="my-4 font-light">{post.content}</p>
                  <Link className="underline" to={post.link}>
                    Ver más <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
