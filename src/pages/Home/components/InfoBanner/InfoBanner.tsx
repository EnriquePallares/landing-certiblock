import React from 'react';
import infoImage from '@//assets/images/banner-info-image.png';
import floatIcon from '@/assets/images/float-bannerInfo-icon.svg';
export interface InfoBannerInterface {}

const InfoBanner: React.FC<InfoBannerInterface> = () => {
  return (
    <section
      id="info-banner"
      className="extend-bg-color relative bg-light-gray md:bg-primary"
    >
      <div className="container relative mx-auto"> 
        <img
          src={floatIcon}
          alt="Float icon"
          className="floatIcon absolute right-14 -top-14 hidden md:inline-block"
        />

        <div className="grid gap-10 font-medium md:grid-cols-2">
          <div className="text-section text-white md:bg-white md:text-dark-blue-4">
            <h4 className="mb-8 text-4xl">
              Certificamos <br /> desde el origen
            </h4>

            <p className="paragraph text-2xl font-light leading-none">
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
