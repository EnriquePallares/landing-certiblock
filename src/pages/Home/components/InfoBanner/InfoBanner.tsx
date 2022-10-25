import React from 'react';
import infoImage from '@//assets/images/banner-info-image.png';
export interface InfoBannerInterface {}

const InfoBanner: React.FC<InfoBannerInterface> = () => {
  return (
    <section
      id="info-banner"
      className="relative bg-primary rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-10 font-medium">
          <div className="text-section bg-white rounded-[25px] container py-20 px-10">
            <h4 className="text-5xl mb-12 text-dark-blue-0">
              Certificamos <br />
              desde el origen
            </h4>

            <p className="paragraph text-dark-blue-0 text-2xl leading-none font-light">
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
