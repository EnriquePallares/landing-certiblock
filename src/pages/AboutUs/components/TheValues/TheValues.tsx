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
      className="bg-light-gray text-white rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container relative mx-auto py-20 px-4">
        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute left-0 -top-24"
        />

        <div className="flex flex-wrap">
          <div className="flex-initial w-1/3 self-end">
            <h3 className="text-4xl font-medium mb-8">
              Los valores que nos mueven
            </h3>
            <div className="flex my-3 gap-2">
              <FontAwesomeIcon
                role="button"
                icon={faArrowLeftLong}
                size="lg"
                className="bg-dark-gray text-white rounded-full p-4"
                onClick={previous}
              />
              <FontAwesomeIcon
                role="button"
                icon={faArrowRightLong}
                size="lg"
                className="bg-dark-gray text-white rounded-full p-4"
                onClick={next}
              />
            </div>
          </div>

          <div className="flex-initial w-2/3">
            <Slider
              {...sliderSettings}
              ref={customSlider}
              className="border-2 border-white rounded-[2.5rem]"
            >
              {values.map((value: string, index: number, arr: string[]) => (
                <div key={index}>
                  <div className="relative p-20 text-center">
                    <span className="absolute top-10 left-10 text-primary text-xl font-black">
                      {index + 1}/{arr.length}
                    </span>
                    <h4 className="text-8xl font-black">{value}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheValues;
