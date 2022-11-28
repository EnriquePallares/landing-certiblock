import { SectorWorks } from '@/components';
import React from 'react';
export interface SectorWorksMainInterface {
  className?: string;
}

const SectorWorksMain: React.FC<SectorWorksMainInterface> = ({ className }) => {
  return (
    <div className="SectorWorksMain extend-bg-color relative hidden rounded-t-3xl bg-dark-gray md:block md:rounded-t-[4.5rem]">
      <div className="container mx-auto">
        <h2 className="mb-11 text-5xl font-medium">
          Sectores con <br /> los que trabajamos
        </h2>
        <SectorWorks />
      </div>
    </div>
  );
};

export default SectorWorksMain;
