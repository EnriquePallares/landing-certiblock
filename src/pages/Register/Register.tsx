import bannerBackground from '@/assets/images/bg-login.png';
import { Button, Link } from '@/components';
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
    <section className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <img src={bannerBackground} alt="Main banner" />
      <div className="absolute vertical-alignment-abs w-2/5 py-14 px-4">
        <h3 className="text-6xl text-primary text-center font-bold my-8">
          Registro
        </h3>

        <form action="" className="flex flex-col space-y-3">
          <div className="flex bg-white rounded-[25px] justify-around mb-6">
            <Button
              type={isNaturalPerson() ? 'dark' : 'ligth-text-black'}
              text="PERSONA"
			  className={`w-full text-2xl font-light ${isNaturalPerson() && 'border border-primary'}`}
              onClick={() => handdleTypePerson('person')}
			  ></Button>
            <Button
              type={!isNaturalPerson() ? 'dark' : 'ligth-text-black'}
			  className={`w-full text-2xl font-light ${!isNaturalPerson() && 'border border-primary'}`}
              text="EMPRESA"
              onClick={() => handdleTypePerson('company')}
            ></Button>
          </div>
          {!isNaturalPerson() ? (
            <>
              <input
                placeholder="Razón social"
                className="rounded-[25px] w-full px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="NIT"
                className="rounded-[25px] w-full px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="Teléfono"
                className="rounded-[25px] w-full px-8 font-light text-black"
                type="text"
              />
            </>
          ) : (
            <>
              <input
                placeholder="Nombre"
                className="rounded-[25px] w-full px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="Número de cédula"
                className="rounded-[25px] w-full px-8 font-light text-black"
                type="text"
              />
            </>
          )}
          <input
            placeholder="Celular"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Dirección"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="País"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Ciudad"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Email"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Crear contraseña"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="password"
          />
          <input
            placeholder="Confirmar contraseña"
            className="rounded-[25px] w-full px-8 font-light text-black"
            type="password"
          />
          <p className="font-medium text-primary">*Campos obligatorios</p>
          <div className="flex flex-col">
            <div className="flex">
              <input type="checkbox" />
              <label htmlFor="" className="flex">
                Aceptar términos y condiciones
              </label>
            </div>
            <NavLink to="./" className="text-white underline">
              <br />
              Ver términos y condiciones
            </NavLink>
          </div>
          <div className="text-right">
            <Button className="px-10 py-5" text="REGÍSTRATE"></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
