import React from 'react';
import infoImage from '@//assets/images/banner-info-image.png';
export interface InfoBannerInterface {}

const InfoBanner: React.FC<InfoBannerInterface> = () => {
  return (
    <section
      id="info-banner"
      className="relative bg-dark-blue-2 rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto p-20">
        <div className="grid grid-cols-2 gap-20 font-medium">
          <div className="text-section">
            <h4 className="text-2xl mb-12">
              Certificamos <br />
              desde el origen
            </h4>

            <p className="paragraph font-normal">
              Certiblock Lorem ipsum dolor sit amet, consectetur adipiscing quis
              nostrud exercitation ullamco laboris nisi
            </p>
          </div>

          <div className="image-section">
            <img src={infoImage} alt="Banner info" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
