import React from 'react';
import UniversidadesImage from '@/assets/images/university.svg';
import IglesiasImage from '@/assets/images/churchs.svg';
import HospitalesImage from '@/assets/images/hospitals.svg';
import ColegiosImage from '@/assets/images/schools.svg';
export interface SectorWorksInterface {
  className?: string
}

const SectorWorks: React.FC<SectorWorksInterface> = ({className}) => {
  const endRow = [
    { text: 'Universidades', icon: UniversidadesImage },
    { text: 'Hospitales', icon: HospitalesImage },
    { text: 'Colegios', icon: ColegiosImage },
    { text: 'Iglesias', icon: IglesiasImage },
  ];

  return (
    <div className={`flex w-full justify-around items-start flex-wrap ${className}`}>
      {endRow.map((item, index) => (
        <div key={index} className="md:w-auto w-1/2 flex flex-col text-center space-y-4">
          <img src={item.icon} alt={item.text} className="w-1/3 md:w-3/4 mx-auto"/>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SectorWorks;
