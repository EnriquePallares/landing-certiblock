import { Button } from '@/components';
import React, { createRef, useRef } from 'react';
import { Link } from 'react-router-dom';
export interface ContactFormInterface {}

const ContactForm = (props: ContactFormInterface) => {
  const fullName = createRef<HTMLInputElement>();
  const phone = createRef<HTMLInputElement>();
  const email = createRef<HTMLInputElement>();
  const company = createRef<HTMLInputElement>();

  return (
    <section
      id="info-banner"
      className="relative bg-light-gray rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto py-20 px-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-right text-lg">
            <p className='font-light'>¿Te gusta Certiblock?</p>
            <p>
              ¿Quieres más <br />
              información sobre nosotros?
            </p>
          </div>
          <div className="space-y-2">
            <input
              type="text"
			  ref={fullName}
              placeholder="Nombre y apellidos"
              className="appearance-none bg-gray-200 text-gray-700 rounded-xl px-4 py-2 leading-tight focus:outline-none focus:bg-white font-light w-full border-none"
			  />
            <input
              type="email"
			  ref={email}
              placeholder="Correo electrónico"
              className="appearance-none bg-gray-200 text-gray-700 rounded-xl px-4 py-2 leading-tight focus:outline-none focus:bg-white font-light w-full border-none"
			  />
          </div>
          <div className="space-y-2">
            <input
              type="phone"
			  ref={phone}
              placeholder="Teléfono celular"
              className="appearance-none bg-gray-200 text-gray-700 rounded-xl px-4 py-2 leading-tight focus:outline-none focus:bg-white font-light w-full border-none"
			  />
            <input
              type="text"
			  ref={company}
              placeholder="Nombre de tu compañía"
              className="appearance-none bg-gray-200 text-gray-700 rounded-xl px-4 py-2 leading-tight focus:outline-none focus:bg-white font-light w-full border-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <input type="radio" />
              <span>
                Autorizo el tratamiento de datos personales y la política de
                datos personales. <Link to="#">Ver política</Link>
              </span>
            </div>
            <div>
              <Button text="ENVIAR" className='w-full text-center text-4xl font-light' type='primary-text-white' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
