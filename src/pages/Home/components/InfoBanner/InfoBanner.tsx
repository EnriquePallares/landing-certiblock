import React from 'react';
import infoImage from '@//assets/images/banner-info-image.png';
import floatIcon from '@/assets/images/float-bannerInfo-icon.svg';
export interface InfoBannerInterface {}

const InfoBanner: React.FC<InfoBannerInterface> = () => {
  return (
    <section
      id="info-banner"
      className="relative md:bg-primary bg-light-gray rounded-t-3xl md:rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto relative px-4 md:px-14 py-14 md:py-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="hidden md:inline-block absolute right-14 -top-14"
        />

        <div className="grid md:grid-cols-2 gap-10 font-medium">
          <div className="md:bg-white md:text-dark-blue-4 text-white rounded-3xl py-12 px-6 text-section">
            <h4 className="text-4xl mb-8">
              Certificamos <br /> desde el origen
            </h4>

            <p className="paragraph text-2xl leading-none font-light">
              <span className="font-semibold">Certiblock</span> Lorem ipsum
              dolor sit amet, consectetur adipiscing quis nostrud exercitation
              ullamco laboris nisi
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
