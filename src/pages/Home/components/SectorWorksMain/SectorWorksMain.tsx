import { SectorWorks } from '@/components';
import React from 'react';
export interface SectorWorksMainInterface {
  className?: string;
}

const SectorWorksMain: React.FC<SectorWorksMainInterface> = ({ className }) => {
  return (
    <div className="extend-bg-color rounded-t-3xl bg-dark-gray md:relative md:rounded-t-[4.5rem]">
      <div className="container mx-auto px-4 py-14 md:px-14 md:py-20">
        <h2 className="mb-8 text-5xl font-medium">
          Sectores con <br /> los que trabajamos
        </h2>
        <SectorWorks />
      </div>
    </div>
  );
};

export default SectorWorksMain;
