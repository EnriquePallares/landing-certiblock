import { MainBannerReusable } from '@/components';
import React, { ReactNode } from 'react';
import bannerBackground from '@/assets/images/bg-services.png';
import bannerBackgroundMobile from '@/assets/images/bg-services-mobile.png';
import ServicesCards from './components/ServicesCards/ServicesCards';
export interface ServicesInterface {}

const Services: React.FC<ServicesInterface> = () => {
  const paragraph: ReactNode = (
    <p>
      Entendemos que muchas empresas, marcas o procesos quieren tener una
      seguridad de que todo lo que sale de su compañía tiene que ser cuidado de
      principio a fin, nosotros certificamos el origen de cualquier documento,
      producto o proceso. Nuestra meta es que todo lo que no este en CERTIBLOCK
      no es legitimo en su origen.
    </p>
  );

  return (
    <section id="services">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        title="Servicios"
        classTitle="text-white text-center"
        paragraph={paragraph}
      />
      <ServicesCards />
    </section>
  );
};

export default Services;
