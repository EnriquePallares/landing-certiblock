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
  };
  return (
    <section
      id="companies-with-we-work"
      className="bg-dark-gray rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto py-20 px-4 text-white">
        <h3 className="text-4xl font-medium mb-8">
          Empresas con <br /> las que trabajamos
        </h3>

        <Slider {...sliderSettings}>
          {companies.map((company: string, index: number) => (
            <div key={index}>
              <div className="border-2 border-whiter rounded-3xl text-center py-16 px-6 mx-3">
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
