import { CardPublicaciones } from '@/components/CardPublicaciones';
import React from 'react';
import Slider, { Settings } from 'react-slick';
export interface BlogContentInterface {}

const BlogContent: React.FC<BlogContentInterface> = () => {
  const sliderSettings: Settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      id="blog-content"
      className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 text-white md:px-14 md:py-20">
        <div className="md:w-4/5">
          <h3 className="text-3xl font-medium">
            Cómo hacer tu primera certificación
          </h3>
          <h4 className="mb-2 text-2xl font-medium">Por: Pepito Perez</h4>

          <div className="mb-12 flex gap-4">
            <span className="rounded-full bg-white py-2 px-10 text-center font-light text-dark-gray">
              FAQ
            </span>
            <span className="rounded-full bg-white py-2 px-10 text-center font-light text-dark-gray">
              Educación
            </span>
          </div>

          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="https://via.placeholder.com/960x270/B8D2E3/FFFFFF/?text=Imagen"
            alt="Blog image"
            className="w-full rounded-2xl"
          />
          <p className="my-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h4 className="mt-8 mb-4 text-2xl font-medium">
            Más de Pepito Perez
          </h4>

          <div className="md:w-4/5">
            <Slider {...sliderSettings} className="md:-mx-3">
              <div>
                <CardPublicaciones
                  title="Cómo hacer tu primera certificación"
                  image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
                  author="Pepito Perez"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  link="#"
                  className="md:mx-3"
                />
              </div>
              <div>
                <CardPublicaciones
                  title="Cómo hacer tu primera certificación"
                  image="https://via.placeholder.com/350/B8D2E3/FFFFFF/?text=Imagen"
                  author="Pepito Perez"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  link="#"
                  className="md:mx-3"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
