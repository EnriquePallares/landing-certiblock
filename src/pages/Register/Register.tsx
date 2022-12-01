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
          className="aspect-[1/2.8] w-full md:aspect-[4/3.7]"
        />
      </picture>
      <div className="vertical-alignment-abs absolute w-full p-8 md:w-2/3">
        <h3 className="mb-8 text-center text-6xl font-bold text-primary">
          Registro
        </h3>

        <form action="" className="flex flex-col space-y-3 widthform">
          <div className="mb-6 flex justify-around rounded-[25px] bg-white">
            <Button
              type={isNaturalPerson() ? 'dark' : 'ligth-text-black'}
              text="PERSONA"
              className={`w-full font-light md:text-2xl ${
                isNaturalPerson() && 'border border-primary'
              }`}
              onClick={() => handdleTypePerson('person')}
            ></Button>
            <Button
              type={!isNaturalPerson() ? 'dark' : 'ligth-text-black'}
              className={`w-full font-light md:text-2xl ${
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
                placeholder="Nombre*"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
              <input
                placeholder="Número de cédula*"
                className="w-full rounded-[25px] px-8 font-light text-black"
                type="text"
              />
            </>
          )}
          <input
            placeholder="Celular*"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Dirección*"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="País*"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Ciudad*"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            placeholder="Email*"
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
          <div className="text-xl md:text-right">
            <Button
              className="btn w-full px-10 py-5 "
              text="Regístrate"
            ></Button>
          </div>
        </form>
      </div>
      <svg
        className="hand h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="167.639"
        height="235.598"
        viewBox="0 0 167.639 235.598"
      >
        <g
          id="Grupo_94"
          data-name="Grupo 94"
          transform="translate(167.64 0.001) rotate(90)"
        >
          <path
            id="Trazado_51"
            data-name="Trazado 51"
            d="M167.639,83.82A83.82,83.82,0,1,1,83.82,0,83.819,83.819,0,0,1,167.639,83.82"
            transform="translate(0)"
            fill="#4796e1"
          />
          <path
            id="Trazado_52"
            data-name="Trazado 52"
            d="M154.3,124.555v34.2L193.74,172.66h44.685V160.348H201.72v-3.191h68.623v-9.12H201.72v-3.191H274.9v-9.12H201.72v-3.191h68.623v-9.12H201.72v-3.192H252.1V111.1H201.72Z"
            transform="translate(-39.806 -84.066)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
      </svg>
    </section>
  );
};

export default Register;
