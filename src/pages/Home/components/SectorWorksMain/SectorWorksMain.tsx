import { SectorWorks } from '@/components';
import React from 'react';
export interface SectorWorksMainInterface {
  className?: string;
}

const SectorWorksMain: React.FC<SectorWorksMainInterface> = ({ className }) => {
  return (
    <div className="relative bg-dark-gray rounded-t-[4.5rem] extend-bg-color">
      <div className="container mx-auto py-20 px-3">
        <h2 className="text-5xl mb-6 font-medium">
          Sectores con <br /> los que trabajamos
        </h2>
        <SectorWorks />
      </div>
    </div>
  );
};

export default SectorWorksMain;
