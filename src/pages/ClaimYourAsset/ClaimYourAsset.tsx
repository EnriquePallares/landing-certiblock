import React from 'react';
import bannerBackground from '@/assets/images/bg-claim-your-asset.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import certifiedLogo from '@/assets/images/certified-logo.svg';
export interface ClaimYourAssetInterface {}

const ClaimYourAsset: React.FC<ClaimYourAssetInterface> = () => {
  return (
    <section
      id="claim-your-asset"
      className="extend-bg-color relative bg-dark-blue-0"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-[1/2.8] w-full md:aspect-[4/2.5]"
        />
      </picture>

      <div className="box vertical-alignment-abs absolute flex w-auto flex-wrap justify-center gap-10 md:w-full md:flex-nowrap md:items-center md:gap-20">
        <img
          src={certifiedLogo}
          alt="Logo certificado"
          className="w-1/2 md:w-[15%]"
        />

        <div className="flex flex-col items-center gap-16">
          <h4 className="text-6xl font-medium text-primary">Importante</h4>
          <div className="font-book space-y-8 text-center text-2xl text-white">
            <p>
              Ingresa el correo con el que solicitaste el documento en la
              entidad, empresa o institución.
            </p>
            <p>
              A tu correo también te llegó el mensaje para reclamar el documento
              seguro.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-4 md:w-2/3 md:flex-nowrap">
            <input
              placeholder="E-mail"
              className="w-full rounded-full px-4 font-light text-dark-gray"
              type="email"
            />
            <button className="w-full rounded-full bg-primary py-2 px-6 text-dark-gray md:w-auto">
              RECLAMAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimYourAsset;
