import { Modal, ModalProps } from 'flowbite-react';
import { Service } from '../ServicesCards/ServicesCards';
export interface DetailModalInterface {
  service: Service;
  modalProps: ModalProps;
}

const DetailModal = ({ modalProps, service }: DetailModalInterface) => {
  return (
    <Modal
      position="center"
      show={modalProps.show}
      onClose={modalProps.onClose}
      popup={true}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 font-light text-dark-gray md:px-12">
          <h4 className="text-2xl">{service.title}</h4>
          <p className="text-base">{service.description}</p>
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-3xl"
          />

          <div className="flex justify-center">
            <button
              onClick={modalProps.onClose}
              className="rounded-full bg-primary px-7 py-2 text-center text-base font-light text-dark-blue-4 hover:bg-dark-gray hover:text-primary"
            >
              CERRAR
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DetailModal;
