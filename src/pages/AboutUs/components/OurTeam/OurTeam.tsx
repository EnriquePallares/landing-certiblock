import React, { createRef } from 'react';
import Slider, { Settings } from 'react-slick';
import member1 from '@/assets/images/member-1.png';
import member2 from '@/assets/images/member-2.png';
import member3 from '@/assets/images/member-3.png';
import member4 from '@/assets/images/member-4.png';
import CustomLink from '@/components/ui/Link/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRight,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import floatIcon from '@/assets/images/float-icon-our-team.svg';
export interface OurTeamInterface {}

const OurTeam: React.FC<OurTeamInterface> = () => {
  const customSlider = createRef<Slider>();

  const next = () => {
    customSlider?.current?.slickNext();
  };
  const previous = () => {
    customSlider?.current?.slickPrev();
  };

  const members = [
    {
      name: 'Rick Sanchez',
      description:
        'Certiblock  Lorem ipsum dolor sit amet, consectetur adipiscing quis nostrud exercitation ullamco laboris nisi',
      photo: member1,
      link: '#',
    },
    {
      name: 'Thomas Anderson',
      description:
        'Certiblock  Lorem ipsum dolor sit amet, consectetur adipiscing quis nostrud exercitation ullamco laboris nisi',
      photo: member2,
      link: '#',
    },
    {
      name: 'Mr robot',
      description:
        'Certiblock  Lorem ipsum dolor sit amet, consectetur adipiscing quis nostrud exercitation ullamco laboris nisi',
      photo: member3,
      link: '#',
    },
    {
      name: 'M1000',
      description:
        'Certiblock  Lorem ipsum dolor sit amet, consectetur adipiscing quis nostrud exercitation ullamco laboris nisi',
      photo: member4,
      link: '#',
    },
  ];

  const sliderSettings: Settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="our-team"
      className="extend-bg-color relative rounded-t-3xl bg-primary md:rounded-t-[4.5rem]"
    >
      <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
        <h3 className="mb-8 text-3xl font-medium text-dark-gray">
          Conoce nuestro equipo
        </h3>

        <img
          src={floatIcon}
          alt="Float icon"
          className="Floaticon absolute left-4 bottom-60 hidden md:block"
        />

        <Slider
          {...sliderSettings}
          ref={customSlider}
          className="-mx-1 md:-mx-3"
        >
          {members.map((member: any, index: number) => (
            <div key={index}>
              <div className="card mx-1 rounded-3xl bg-white p-6 text-dark-blue-4 md:mx-3 md:p-8">
                <div className="rounded-3xl">
                  <div className="flex flex-row items-center justify-between">
                    <span className="name flex items-center">
                      {/* <svg height="54" width="54">
                        <circle cx="26" cy="26" r="25" fill="#E4E4E4" />
                      </svg> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="53" viewBox="0 0 57 53">
                        <ellipse id="Elipse_2" data-name="Elipse 2" cx="28.5" cy="26.5" rx="28.5" ry="26.5" fill="#e4e4e4"/>
                      </svg>
                      <span className="p-2 font-light">{member.name}</span>
                    </span>
                  </div>
                  <div className="image py-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-100 rounded-md object-cover"
                    />
                  </div>
                  <div>{member.description}</div>
                  <div className="flex justify-end">
                    <CustomLink
                      to={member.link}
                      text="VER MÁS"
                      className="!bg-transparent px-0 hover:underline"
                      type="primary"
                    >
                      {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="27.505" height="20.634" viewBox="0 0 27.505 20.634">
                        <g id="Grupo_313" data-name="Grupo 313" transform="translate(-95.23 0.39)">
                          <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l8.9,8.9-8.9,8.9" transform="translate(-1062.992 -722.552)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                          <line id="Línea_92" data-name="Línea 92" x1="20.747" transform="translate(96.23 9.693)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                        </g>
                      </svg>

                    </CustomLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="arrow my-3 flex justify-end gap-2">
          <svg onClick={previous}
            xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
            <g id="Grupo_102" data-name="Grupo 102" transform="translate(-140 -2631)">
              <circle id="Elipse_9" data-name="Elipse 9" cx="38" cy="38" r="38" transform="translate(140 2631)" fill="#fff"/>
              <g id="Grupo_96" data-name="Grupo 96" transform="translate(459.196 5341.688) rotate(180)">
                <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.304 2672.688)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
              </g>
            </g>
          </svg>
          <svg onClick={next}
          xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76">
            <g id="Grupo_103" data-name="Grupo 103" transform="translate(-238 -2631)">
              <circle id="Elipse_10" data-name="Elipse 10" cx="38" cy="38" r="38" transform="translate(238 2631)" fill="#fff"/>
              <g id="Grupo_95" data-name="Grupo 95" transform="translate(-5.196 -3.688)">
                <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l12.59,12.59-12.59,12.591" transform="translate(-889.062 1936.52)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                <line id="Línea_92" data-name="Línea 92" x1="29.341" transform="translate(263.454 2672.355)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
              </g>
            </g>
          </svg>


          {/* <FontAwesomeIcon
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
          /> */}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
