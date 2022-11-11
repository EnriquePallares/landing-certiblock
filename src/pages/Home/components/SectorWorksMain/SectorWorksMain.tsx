import { SectorWorks } from '@/components';
import React from 'react';
export interface SectorWorksMainInterface {
  className?: string;
}

const SectorWorksMain: React.FC<SectorWorksMainInterface> = ({ className }) => {
  return (
    <div className="md:relative bg-dark-gray rounded-t-3xl md:rounded-t-[4.5rem] extend-bg-color">
      <div className="container mx-auto px-4 md:px-14 py-14 md:py-20">
        <h2 className="text-5xl mb-8 font-medium">
          Sectores con <br /> los que trabajamos
        </h2>
        <SectorWorks />
      </div>
    </div>
  );
};

export default SectorWorksMain;
