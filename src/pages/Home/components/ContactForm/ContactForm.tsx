import { Button } from '@/components';
import { createRef } from 'react';
import { Link } from 'react-router-dom';
export interface ContactFormInterface {}

const ContactForm = (props: ContactFormInterface) => {
  const fullName = createRef<HTMLInputElement>();
  const phone = createRef<HTMLInputElement>();
  const email = createRef<HTMLInputElement>();
  const company = createRef<HTMLInputElement>();

  return (
    <section
      id="form-section"
      className="extend-bg-color relative hidden rounded-t-3xl bg-light-gray md:block md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
        <div className="grid grid-cols-4 items-center gap-6">
          <div className="text-right text-black text-lg">
            <p>¿Te gusta Certiblock?</p>
            <p>
              ¿Quieres más <br />
              información sobre nosotros?
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              ref={fullName}
              placeholder="Nombre y apellidos *"
              className="w-full appearance-none rounded-xl border-none bg-gray-200 px-4 py-2 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
            <input
              type="email"
              ref={email}
              placeholder="Correo electrónico *"
              className="w-full appearance-none rounded-xl border-none bg-gray-200 px-4 py-2 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <input
              type="phone"
              ref={phone}
              placeholder="Teléfono celular * "
              className="w-full appearance-none rounded-xl border-none bg-gray-200 px-4 py-2 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
            <input
              type="text"
              ref={company}
              placeholder="Nombre de tu compañía *"
              className="w-full appearance-none rounded-xl border-none bg-gray-200 px-4 py-2 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex gap-2 text-sm font-medium">
              <input type="radio" className="mt-1" />
              <span>
                Autorizo el tratamiento de datos personales y la política de
                datos personales.{' '}
                <Link to="#" className="hover:underline">
                  Ver política
                </Link>
              </span>
            </div>
            <div>
              <Button
                text="ENVIAR"
                className="w-full text-center font-bold tracking-widest"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
