import { SectorWorks } from '@/components';
import React from 'react';
export interface SectorWorksMainInterface {
  className?: string;
}

const SectorWorksMain: React.FC<SectorWorksMainInterface> = ({ className }) => {
  return (
    <div className="extend-bg-color relative hidden rounded-t-3xl bg-dark-gray md:block md:rounded-t-[4.5rem]">
      <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
        <h2 className="mb-8 text-5xl font-medium">
          Sectores con <br /> los que trabajamos
        </h2>
        <SectorWorks />
      </div>
    </div>
  );
};

export default SectorWorksMain;
