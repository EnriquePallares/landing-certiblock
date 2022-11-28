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
      className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 text-white md:px-14 md:py-20">
        <svg className='h-auto hand' xmlns="http://www.w3.org/2000/svg" width="167.639" height="235.598" viewBox="0 0 167.639 235.598">
          <g id="Grupo_94" data-name="Grupo 94" transform="translate(167.64 0.001) rotate(90)">
            <path id="Trazado_51" data-name="Trazado 51" d="M167.639,83.82A83.82,83.82,0,1,1,83.82,0,83.819,83.819,0,0,1,167.639,83.82" transform="translate(0)" fill="#4796e1"/>
            <path id="Trazado_52" data-name="Trazado 52" d="M154.3,124.555v34.2L193.74,172.66h44.685V160.348H201.72v-3.191h68.623v-9.12H201.72v-3.191H274.9v-9.12H201.72v-3.191h68.623v-9.12H201.72v-3.192H252.1V111.1H201.72Z" transform="translate(-39.806 -84.066)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1"/>
          </g>
        </svg>

        <h3 className="mb-8 text-3xl font-medium">
          Empresas con <br /> las que trabajamos
        </h3>

        <Slider {...sliderSettings} className="-mx-1 md:-mx-3">
          {companies.map((company: string, index: number) => (
            <div key={index}>
              <div className="company border-whiter mx-1 rounded-3xl border-2 py-16 px-6 text-center md:mx-3 font-light">
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
