import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef } from 'react';
import Slider, { Settings } from 'react-slick';
import floatIcon from '@/assets/images/float-icon-values.svg';
export interface TheValuesInterface {}

const TheValues: React.FC<TheValuesInterface> = () => {
  const values = ['Seguridad', 'Confianza', 'Tecnología'];
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="the-values"
      className="extend-bg-color relative rounded-t-3xl bg-light-gray text-white md:rounded-t-[4.5rem]"
    >
      <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute -top-24 hidden md:block"
        />

        <div className="flex flex-wrap">
          <div className="w-full flex-initial self-end md:w-1/3">
            <h3 className="mb-8 text-3xl font-medium">
              Los valores que nos mueven
            </h3>
            <div className="my-3 hidden gap-2 md:flex">
              <FontAwesomeIcon
                role="button"
                icon={faArrowLeftLong}
                size="lg"
                className="rounded-full bg-dark-gray p-4 text-white"
                onClick={previous}
              />
              <FontAwesomeIcon
                role="button"
                icon={faArrowRightLong}
                size="lg"
                className="rounded-full bg-dark-gray p-4 text-white"
                onClick={next}
              />
            </div>
          </div>

          <div className="w-full flex-initial md:w-2/3">
            <Slider
              {...sliderSettings}
              ref={customSlider}
              className="rounded-3xl border-2 border-white"
            >
              {values.map((value: string, index: number, arr: string[]) => (
                <div key={index}>
                  <div className="relative px-8 py-12 text-center md:p-20">
                    <span className="absolute top-5 left-5 text-xl font-black text-primary md:top-10 md:left-10">
                      {index + 1}/{arr.length}
                    </span>
                    <h4 className="text-5xl font-black md:text-8xl">{value}</h4>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="my-3 flex justify-end gap-2 md:hidden">
              <FontAwesomeIcon
                role="button"
                icon={faArrowLeftLong}
                size="lg"
                className="rounded-full bg-dark-gray p-4 text-white"
                onClick={previous}
              />
              <FontAwesomeIcon
                role="button"
                icon={faArrowRightLong}
                size="lg"
                className="rounded-full bg-dark-gray p-4 text-white"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheValues;
