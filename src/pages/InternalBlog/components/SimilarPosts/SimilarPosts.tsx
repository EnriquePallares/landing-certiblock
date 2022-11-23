import React, { createRef } from 'react';
import floatIcon from '@/assets/images/float-podcast-icon.svg';
import Slider, { Settings } from 'react-slick';
import { CardPublicaciones } from '@/components/CardPublicaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
export interface SimilarPostsInterface {}

const SimilarPosts: React.FC<SimilarPostsInterface> = () => {
  const customSlider = createRef<Slider>();

  const next = () => {
    customSlider?.current?.slickNext();
  };
  const previous = () => {
    customSlider?.current?.slickPrev();
  };

  const sliderSettings: Settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: 'slick-dots custom-dots',
        },
      },
    ],
  };

  return (
    <section
      id="similar-posts"
      className="extend-bg-color relative rounded-t-3xl bg-light-gray text-white md:rounded-t-[4.5rem]"
    >
      <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
        <h3 className="mb-8 text-3xl font-medium">Publicaciones similares</h3>

        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute -top-14 hidden md:block"
        />

        <Slider
          {...sliderSettings}
          ref={customSlider}
          className="-mx-1 md:-mx-2"
        >
          <div>
            <CardPublicaciones
              title="Cómo hacer tu primera certificación"
              image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
              author="Pepito Perez"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="#"
              className="mx-1 md:mx-2"
            />
          </div>
          <div>
            <CardPublicaciones
              title="Cómo hacer tu primera certificación"
              image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
              author="Pepito Perez"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="#"
              className="mx-1 md:mx-2"
            />
          </div>
          <div>
            <CardPublicaciones
              title="Cómo hacer tu primera certificación"
              image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
              author="Pepito Perez"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="#"
              className="mx-1 md:mx-2"
            />
          </div>
          <div>
            <CardPublicaciones
              title="Cómo hacer tu primera certificación"
              image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
              author="Pepito Perez"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="#"
              className="mx-1 md:mx-2"
            />
          </div>
        </Slider>
        <div className="my-3 hidden justify-end gap-2 md:flex">
          <FontAwesomeIcon
            role="button"
            icon={faArrowLeftLong}
            size="lg"
            className="rounded-full bg-white p-4 text-black"
            onClick={previous}
          />
          <FontAwesomeIcon
            role="button"
            icon={faArrowRightLong}
            size="lg"
            className="rounded-full bg-white p-4 text-black"
            onClick={next}
          />
        </div>
      </div>
    </section>
  );
};

export default SimilarPosts;
