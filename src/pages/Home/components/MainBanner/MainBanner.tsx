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
          className="aspect-[2/5] w-full md:aspect-video"
        />
      </picture>
      <div className="box vertical-alignment-abs absolute flex w-full flex-wrap px-8 text-4xl font-black md:justify-between md:text-8xl md:text-secondary">
        <h3 className="w-full flex-[0_0_auto] md:w-9/12">
          Por qué tener a <span className="text-white">Certiblock</span>
        </h3>
        <Button
          text="SABER MÁS"
          type="primary"
          className="more mb-2 hidden w-auto flex-[0_0_auto] self-end font-normal md:inline-block md:px-16 md:py-5"
        >
          {/* <svg
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
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="39.815" height="31.879" viewBox="0 0 39.815 31.879">
            <g id="Grupo_313" data-name="Grupo 313" transform="translate(-1007.363 -708.564)">
              <path id="Trazado_3" data-name="Trazado 3" d="M1175.411,723.577,1188.7,738.1l-13.291,14.527" transform="translate(-142.879 -13.6)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
              <line id="Línea_26" data-name="Línea 26" x1="30.974" transform="translate(1008.363 724.121)" fill="none" stroke="#030f37" strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </Button>
        <Button
          text="Saber más"
          type="ligth-text-black"
          className="more mt-6 font-light md:ml-10 md:hidden md:px-16 md:py-5"
        >
          {/* <svg
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
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="39.815" height="31.879" viewBox="0 0 39.815 31.879">
            <g id="Grupo_313" data-name="Grupo 313" transform="translate(-1007.363 -708.564)">
              <path id="Trazado_3" data-name="Trazado 3" d="M1175.411,723.577,1188.7,738.1l-13.291,14.527" transform="translate(-142.879 -13.6)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
              <line id="Línea_26" data-name="Línea 26" x1="30.974" transform="translate(1008.363 724.121)" fill="none" stroke="#030f37" strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </Button>

        <div className="collapse mt-24 w-full md:hidden">
          <h4 className="mb-8 text-2xl font-black">
            Aprende con nosotros <br />
            sobre Web 3.0
          </h4>

          <Accordion className="text-dark-blue-4 border-gray-200">
            {posts.map((post, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title className="bg-white text-lg !text-current hover:bg-primary">
                  {post.title}
                </Accordion.Title>
                <Accordion.Content className="content bg-white text-base text-current">
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
