import React from 'react';
import Slider, { Settings } from 'react-slick';
export interface CompaniesWithWeWorkInterface {}

const CompaniesWithWeWork: React.FC<CompaniesWithWeWorkInterface> = () => {
  const companies = [
    'Eafit',
    'Cámara de Comercio',
    'Iglesia Maradoniana',
    'Hospital General de Springfield',
    'Notaría 15',
  ];
  const sliderSettings: Settings = {
    autoplay: true,
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
      id="companies-with-we-work"
      className="extend-bg-color rounded-t-3xl bg-dark-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-4 py-14 text-white md:px-14 md:py-20">
        <h3 className="mb-8 text-4xl font-medium">
          Empresas con <br /> las que trabajamos
        </h3>

        <Slider {...sliderSettings}>
          {companies.map((company: string, index: number) => (
            <div key={index}>
              <div className="border-whiter rounded-3xl border-2 py-16 px-6 text-center md:mx-3">
                {company}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesWithWeWork;
