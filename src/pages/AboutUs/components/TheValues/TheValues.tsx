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
          className="floatIcon absolute -top-24 hidden md:block"
        />

        <div className="flex flex-wrap">
          <div className="box-left w-full flex-initial self-end md:w-1/3">
            <h3 className="mb-8 text-3xl font-medium">
              Los valores que nos mueven
            </h3>
            <div className="arrow my-3 hidden gap-2 md:flex">
              <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
                <g id="Grupo_104" data-name="Grupo 104" transform="translate(-140 -3316)">
                  <circle id="Elipse_11" data-name="Elipse 11" cx="38" cy="38" r="38" transform="translate(140 3316)" fill="#1c1f21"/>
                  <g id="Grupo_97" data-name="Grupo 97" transform="translate(459.196 6026.688) rotate(180)">
                    <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.303 2672.688)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                  </g>
                </g>
              </svg>
              <svg onClick={next} xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
                <g id="Grupo_105" data-name="Grupo 105" transform="translate(-238 -3316)">
                  <circle id="Elipse_12" data-name="Elipse 12" cx="38" cy="38" r="38" transform="translate(238 3316)" fill="#1c1f21"/>
                  <g id="Grupo_98" data-name="Grupo 98" transform="translate(-5.196 681.313)">
                    <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.454 2672.355)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                  </g>
                </g>
              </svg>
              {/* <FontAwesomeIcon
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
              /> */}
            </div>
          </div>

          <div className="box-right w-full flex-initial md:w-2/3">
            <Slider
              {...sliderSettings}
              ref={customSlider}
              className="rounded-3xl border-2 border-white"
            >
              {values.map((value: string, index: number, arr: string[]) => (
                <div key={index}>
                  <div className="card relative px-8 py-12 text-center md:p-20">
                    <span className="absolute top-5 left-5 text-xl font-black text-primary md:top-10 md:left-10">
                      {index + 1}/{arr.length}
                    </span>
                    <h4 className="text-5xl font-black md:text-8xl">{value}</h4>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="arrow my-3 flex justify-end gap-2 md:hidden">
              <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
                <g id="Grupo_104" data-name="Grupo 104" transform="translate(-140 -3316)">
                  <circle id="Elipse_11" data-name="Elipse 11" cx="38" cy="38" r="38" transform="translate(140 3316)" fill="#1c1f21"/>
                  <g id="Grupo_97" data-name="Grupo 97" transform="translate(459.196 6026.688) rotate(180)">
                    <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.303 2672.688)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                  </g>
                </g>
              </svg>
              <svg onClick={next} xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
                <g id="Grupo_105" data-name="Grupo 105" transform="translate(-238 -3316)">
                  <circle id="Elipse_12" data-name="Elipse 12" cx="38" cy="38" r="38" transform="translate(238 3316)" fill="#1c1f21"/>
                  <g id="Grupo_98" data-name="Grupo 98" transform="translate(-5.196 681.313)">
                    <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.454 2672.355)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                  </g>
                </g>
              </svg>
              {/* <FontAwesomeIcon
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
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheValues;
