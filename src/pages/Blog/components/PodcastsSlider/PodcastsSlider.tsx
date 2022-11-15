import CustomLink from '@/components/ui/Link/Link';
import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef } from 'react';
import Slider, { Settings } from 'react-slick';
import AngelaOcado from '@/assets/images/AngelaOcado.png';
import ElonMusk from '@/assets/images/ElonMusk.png';
import LoganPaul from '@/assets/images/LoganPaul.png';
import floatIcon from '@/assets/images/float-blog-icon.svg';
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
  slidesToScroll: 1,
};

const PodcastsSlider: React.FC<PodcastsSliderInterface> = () => {
  return (
    <section
      id="the-values"
      className="extend-bg-color rounded-t-3xl bg-dark-gray text-white md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto space-y-4 px-4 py-10 md:px-4 md:py-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute hidden md:inline-block"
        />
        <div className="">
          <Slider {...sliderSettings} ref={customSlider}>
            {podcasts.map((value: Podcast, index: number) => (
              <div key={index} className="container p-2">
                <div className="rounded-[25px] border-2 p-6">
                  <div
                    className={`flex gap-6 ${
                      value.side === 'left' && 'flex-row-reverse'
                    }`}
                  >
                    <div className="w-2/3 self-end">
                      <img
                        src={value.image}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                    <div className="flex w-1/3 flex-col space-y-4">
                      <h3 className="text-3xl font-thin">{value.text}</h3>
                      <CustomLink text="Escuchar" to="#" type="primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-end gap-2">
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
