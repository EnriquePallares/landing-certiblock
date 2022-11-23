import React, { useEffect, useState } from 'react';
import DetailModal from '../DetailModal/DetailModal';
export interface ServicesCardsInterface {}

export interface Service {
  image: string;
  title: string;
  description: string;
}

const ServicesCards: React.FC<ServicesCardsInterface> = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState<Service>({
    image: '',
    title: '',
    description: '',
  });

  const closeModal = () => setShowModal(false);
  const setServiceDetail = (service: Service) => {
    setService(service);
    setShowModal(true);
  };

  const services: Service[] = [
    {
      image: 'https://via.placeholder.com/700x300/4796E1/000000/?text=Imagen',
      title: 'Certificamos origen',
      description:
        'Entendemos que muchas empresas, marcas o procesos quieren tener una seguridad de que todo lo que sale de su compañía tiene que ser cuidado de principio a fin, nosotros certificamos el origen de cualquier documento, producto o proceso. Nuestra meta es que todo lo que no este en CERTIBLOCK no es legitimo en su origen.',
    },
    {
      image: 'https://via.placeholder.com/700x300/4796E1/000000/?text=Imagen',
      title: 'Portal seguro',
      description:
        'Somos ese lugar donde vas a poder reclamar todos los documentos de entidades gubernamentales con plena seguridad de que nadie odrá suplantar o falsificar ese documento ya que se encuentra en la blockchain.',
    },
    {
      image: 'https://via.placeholder.com/700x300/4796E1/000000/?text=Imagen',
      title: 'Documentos programables',
      description:
        'Muchos de los documentos que reclamas en entidades gubernamentales tienen una caducidad en el tiempo, nosotros nos encargamos de que no vuelvas a dejar vencer nada, ni envíes documentos vencidos a terceros, esto te ahorrara tiempo e imprevistos',
    },
    {
      image: 'https://via.placeholder.com/700x300/4796E1/000000/?text=Imagen',
      title: 'Educación',
      description:
        'CERTIBLOCK trabaja con cualquier institución educativa donde se emitan diplomas o certificados, donde se entregan virtualmente con un certificado blockchain, lo que garantiza que no podrán ser falsificados una vez estén dentro den nuestra plataforma y el estudiante lo haya reclamado.',
    },
    {
      image: 'https://via.placeholder.com/700x300/4796E1/000000/?text=Imagen',
      title: 'Salud',
      description:
        'Los certificados médicos son de alto interés falsificable y CERTIBLOCK grantiza de que cualquier documento de este tipo tenga un origen ligitimo y su responsabilidad sea absoluta.',
    },
  ];

  return (
    <section
      id="services-cards"
      className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 text-white md:px-14 md:py-20">
        <h3 className="mb-8 text-3xl font-medium">Servicios que prestamos</h3>

        <div className="grid gap-x-3 gap-y-4 md:grid-cols-2">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="space-y-8 rounded-3xl border-2 border-white p-7"
            >
              <h4 className="text-2xl font-light">{service.title}</h4>

              <p className="text-base font-light line-clamp-3">
                {service.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setServiceDetail(service)}
                  className="rounded-full bg-primary px-7 py-2 text-center text-base font-light text-dark-blue-4 hover:bg-white"
                >
                  VER MÁS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <DetailModal
          modalProps={{
            show: showModal,
            onClose: () => closeModal(),
          }}
          service={service}
        />
      )}
    </section>
  );
};

export default ServicesCards;
