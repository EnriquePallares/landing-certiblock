import CustomLink from '@/components/ui/Link/Link';
import {
  faArrowLeftLong,
  faArrowRightLong,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef } from 'react';
import Slider, { Settings } from 'react-slick';
import AngelaOcado from '@/assets/images/AngelaOcado.png';
import ElonMusk from '@/assets/images/ElonMusk.png';
import LoganPaul from '@/assets/images/LoganPaul.png';
import floatIcon from '@/assets/images/float-podcast-icon.svg';
export interface PodcastsSliderInterface {}

interface Podcast {
  image: string;
  text: string;
  side: string;
}

const podcasts: Podcast[] = [
  {
    image: ElonMusk,
    side: 'rigth',
    text: 'Elon musk sobre Digitalización de documentos',
  },
  {
    image: LoganPaul,
    side: 'left',
    text: 'Logan Paul sobre Malas inversiones digitales',
  },
  {
    image: AngelaOcado,
    side: 'rigth',
    text: 'Angela Ocando Sobre el futuro de los NFTs',
  },
];

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
  slidesToShow: 2,
  slidesToScroll: 2,
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

const PodcastsSlider: React.FC<PodcastsSliderInterface> = () => {
  return (
    <section
      id="podcasts"
      className="extend-bg-color relative rounded-t-3xl bg-dark-gray text-white md:rounded-t-[4.5rem]"
    >
      <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
        <h3 className="mb-8 text-3xl font-medium">Podcast</h3>

        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute -top-14 hidden md:block"
        />

        <Slider {...sliderSettings} ref={customSlider} className="md:-mx-3">
          {podcasts.map((value: Podcast, index: number) => (
            <div key={index}>
              <div className="rounded-3xl border-2 md:mx-3">
                <div
                  className={`flex ${
                    value.side === 'left' && 'flex-row-reverse'
                  }`}
                >
                  <div className="w-[30%] md:w-2/5">
                    <img
                      src={value.image}
                      alt={value.text}
                      className={`aspect-square h-full ${
                        value.side === 'left'
                          ? 'rounded-r-3xl'
                          : 'rounded-l-3xl'
                      } object-cover`}
                    />
                  </div>
                  <div
                    className={`flex w-[70%] flex-col gap-4 px-4 py-6 md:w-3/5 md:px-6 md:py-12`}
                  >
                    <h3 className="text-xl font-light md:text-3xl">
                      {value.text}
                    </h3>
                    <CustomLink
                      text="Escuchar"
                      to="#"
                      type="primary"
                      className="w-fit rounded-lg text-lg uppercase"
                    >
                      <FontAwesomeIcon icon={faPlay} className="ml-2" />
                    </CustomLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-3 flex justify-end gap-2">
          <FontAwesomeIcon
            role="button"
            icon={faArrowLeftLong}
            size="lg"
            className="rounded-full bg-white p-4 text-dark-blue-0"
            onClick={previous}
          />
          <FontAwesomeIcon
            role="button"
            icon={faArrowRightLong}
            size="lg"
            className="rounded-full bg-white p-4 text-dark-blue-0"
            onClick={next}
          />
        </div>
      </div>
    </section>
  );
};

export default PodcastsSlider;
