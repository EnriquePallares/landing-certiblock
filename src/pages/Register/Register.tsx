import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { Button } from '@/components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export interface RegisterInterface {}

const Register = (props: RegisterInterface) => {
  const [typePerson, setTypePerson] = useState('person');

  const handdleTypePerson = (type: string) => {
    setTypePerson(type);
  };

  const isNaturalPerson = (): boolean => typePerson == 'person';

  return (
    <section
      id="register-page"
      className="main-banner extend-bg-color relative bg-dark-blue-0"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-[1/2.8] w-full md:aspect-[4/3.3]"
        />
      </picture>
      <div className="vertical-alignment-abs absolute w-full p-8 md:w-1/2">
        <h3 className="mb-8 text-center text-6xl font-bold text-primary">
          Registro
        </h3>

        <form action="" className="flex flex-col space-y-3">
          <div className="mb-6 flex justify-around rounded-[25px] bg-white">
            <Button
              type={isNaturalPerson() ? 'dark' : 'ligth-text-black'}
              text="PERSONA"
              className={`w-full text-2xl font-light ${
                isNaturalPerson() && 'border border-primary'
              }`}
              onClick={() => handdleTypePerson('person')}
            ></Button>
            <Button
              type={!isNaturalPerson() ? 'dark' : 'ligth-text-black'}
              className={`w-full text-2xl font-light ${
                !isNaturalPerson() && 'border border-primary'
              }`}
              text="EMPRESA"
              onClick={() => handdleTypePerson('company')}
            ></Button>
          </div>
          {!isNaturalPerson() ? (
            <>
              <input
                placeholder="Razón social"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="NIT"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="Teléfono"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
            </>
          ) : (
            <>
              <input
                placeholder="Nombre"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="Número de cédula"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
            </>
          )}
          <input
            placeholder="Celular"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Dirección"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="País"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Ciudad"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Email"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Crear contraseña"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="password"
          />
          <input
            placeholder="Confirmar contraseña"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="password"
          />
          <p className="font-medium text-primary">*Campos obligatorios</p>
          <div className="flex gap-2">
            <input type="checkbox" className="mt-1" />
            <label>
              Aceptar términos y condiciones
              <br />
              <NavLink to="./" className="text-white underline">
                Ver términos y condiciones
              </NavLink>
            </label>
          </div>
          <div className="md:text-right">
            <Button
              className="w-full px-10 py-5 md:w-auto"
              text="REGÍSTRATE"
            ></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
