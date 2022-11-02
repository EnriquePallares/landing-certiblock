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
  };

  return (
    <section
      id="our-team"
      className="bg-primary rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto relative py-20 px-4">
        <h3 className="text-4xl font-medium text-dark-gray mb-8">
          Conoce nuestro equipo
        </h3>

        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute -left-5 bottom-60"
        />

        <Slider {...sliderSettings} ref={customSlider}>
          {members.map((member: any, index: number) => (
            <div key={index}>
              <div className="bg-white text-dark-blue-4 rounded-3xl p-8 mx-3">
                <div className="rounded-3xl">
                  <div className="flex flex-row justify-between items-center">
                    <span className="flex items-center">
                      <svg height="54" width="54">
                        <circle cx="26" cy="26" r="25" fill="#E4E4E4" />
                      </svg>
                      <span className="p-2">{member.name}</span>
                    </span>
                  </div>
                  <div className="py-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="object-cover w-100 rounded-md"
                    />
                  </div>
                  <div>{member.description}</div>
                  <div className="flex justify-end">
                    <CustomLink
                      to={member.link}
                      text="VER MÁS"
                      className="bg-transparent px-0 hover:underline"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </CustomLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-end m-3 gap-2">
          <FontAwesomeIcon
            role="button"
            icon={faArrowLeftLong}
            size="lg"
            className="bg-white text-black rounded-full p-4"
            onClick={previous}
          />
          <FontAwesomeIcon
            role="button"
            icon={faArrowRightLong}
            size="lg"
            className="bg-white text-black rounded-full p-4"
            onClick={next}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
