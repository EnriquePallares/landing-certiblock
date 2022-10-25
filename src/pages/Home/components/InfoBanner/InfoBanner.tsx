import React from 'react';
import infoImage from '@//assets/images/banner-info-image.png';
import floatIcon from '@/assets/images/float-bannerInfo-icon.svg';
export interface InfoBannerInterface {}

const InfoBanner: React.FC<InfoBannerInterface> = () => {
  return (
    <section
      id="info-banner"
      className="relative bg-primary rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto relative p-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute right-0 -top-14"
        />

        <div className="grid grid-cols-2 gap-20 font-medium">
          <div className="bg-white text-dark-blue-4 rounded-3xl py-12 px-6 text-section">
            <h4 className="text-4xl mb-8">
              Certificamos <br /> desde el origen
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
