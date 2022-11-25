import React from 'react';
import UniversidadesImage from '@/assets/images/university.svg';
import IglesiasImage from '@/assets/images/churchs.svg';
import HospitalesImage from '@/assets/images/hospitals.svg';
import ColegiosImage from '@/assets/images/schools.svg';
export interface SectorWorksInterface {
  className?: string;
}

const SectorWorks: React.FC<SectorWorksInterface> = ({ className }) => {
  const endRow = [
    { text: 'Universidades', icon: UniversidadesImage },
    { text: 'Hospitales', icon: HospitalesImage },
    { text: 'Colegios', icon: ColegiosImage },
    { text: 'Iglesias', icon: IglesiasImage },
  ];

  return (
    <div
      className={`ContainerSectorWork flex w-full flex-wrap items-end justify-between ${className}`}
    >
      {endRow.map((item, index) => (
        <div
          key={index}
          className="SectorWork flex w-1/2 flex-col space-y-4 text-center md:w-auto font-light"
        >
          <img
            src={item.icon}
            alt={item.text}
            className="mx-auto w-1/3 md:w-3/4"
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SectorWorks;
