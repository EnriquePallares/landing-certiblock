import React, { useContext, useEffect, useRef, useState } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { Button, Link } from '@/components';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import { NavLink, useNavigate } from 'react-router-dom';

import USERS from '@/assets/json/user.json';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const userName = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const navigation = useNavigate();

  const [user, setUser] = useContext<any | null>(AuthContext);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    user && navigation('/');
  }, []);

  const login = (e: Event) => {
    e.preventDefault();
    USERS.map(USER_INFO => {
      if (
        USER_INFO.username == userName.current?.value &&
        USER_INFO.password == password.current?.value
      ) {
        setUser(USER_INFO);
        USER_INFO.type === 'user'
          ? navigation('/profile')
          : navigation('/companyProfile');
      }
    });
    setError('Usuario o contraseña incorrectos');
  };

  return (
    <section
      id="login-page"
      className="main-banner extend-bg-color relative bg-dark-blue-0"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-auto w-full md:aspect-video"
        />
      </picture>
      <div className="vertical-alignment-abs absolute w-full p-8 flex flex-col items-center">
        <h3 className="my-8 text-center text-3xl font-black text-primary md:text-6xl">
          Inicio de sesión
        </h3>
        <form action="" className=" w-[317px] md:w-[790px] flex flex-col space-y-3">
          <input
            ref={userName}
            placeholder="Correo"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            ref={password}
            placeholder="Contraseña"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-5 md:w-9 absolute top-[185px] right-[35px] md:top-[210px] md:right-[350px] 2xl:right-[600px]'
            width="40"
            height="23"
            viewBox="0 0 40 23"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectángulo_46"
                  data-name="Rectángulo 46"
                  width="40"
                  height="23"
                  transform="translate(0.288 0.022)"
                  fill="none"
                  stroke="#1c1f21"
                  stroke-width="0.5"
                />
              </clipPath>
            </defs>
            <g
              id="Grupo_261"
              data-name="Grupo 261"
              transform="translate(38.288 19.147) rotate(180)"
            >
              <g
                id="Grupo_50"
                data-name="Grupo 50"
                transform="translate(-2 -3.875)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Trazado_65"
                  data-name="Trazado 65"
                  d="M19.577,0C30.39,0,39.155,4.829,39.155,10.785S30.39,21.57,19.577,21.57,0,16.742,0,10.785,8.765,0,19.577,0Z"
                  transform="translate(0.56 0.956)"
                  fill="none"
                  stroke="#1c1f21"
                  stroke-width="0.5"
                />
                <path
                  id="Trazado_46"
                  data-name="Trazado 46"
                  d="M59.57,11.285A10.785,10.785,0,1,1,48.785.5,10.785,10.785,0,0,1,59.57,11.285"
                  transform="translate(-28.648 0.456)"
                  fill="#c3d82d"
                  stroke="#1c1f21"
                  stroke-width="0.5"
                  fill-rule="evenodd"
                />
                <circle
                  id="Elipse_7"
                  data-name="Elipse 7"
                  cx="10.785"
                  cy="10.785"
                  r="10.785"
                  transform="translate(9.352 0.956)"
                  fill="#f2f3f4"
                  stroke="#1c1f21"
                  stroke-miterlimit="10"
                  stroke-width="0.5"
                />
                <path
                  id="Trazado_47"
                  data-name="Trazado 47"
                  d="M71.785,28.893A5.393,5.393,0,1,1,66.393,23.5a5.392,5.392,0,0,1,5.393,5.393"
                  transform="translate(-46.255 -17.152)"
                  fill="#fff"
                  stroke="#1c1f21"
                  stroke-width="0.5"
                  fill-rule="evenodd"
                />
                <circle
                  id="Elipse_8"
                  data-name="Elipse 8"
                  cx="5.393"
                  cy="5.393"
                  r="5.393"
                  transform="translate(14.745 6.348)"
                  fill="none"
                  stroke="#1c1f21"
                  stroke-miterlimit="10"
                  stroke-width="0.5"
                />
              </g>
            </g>
          </svg>

          <p className="text-red-600">{error}</p>
          <NavLink to="#" className="text-right">
            {' '}
            <span className="underline">Olvidé mi contraseña</span> (*_*)
          </NavLink>
          <div className="flex flex-col gap-2 pt-5 md:flex-row-reverse md:gap-5">
            <Button
              className="px-8 font-light"
              text="INICIAR SESIÓN"
              onClick={login}
            ></Button>
            <Link
              to="/register"
              type="light-gray"
              text="REGÍSTRATE"
              className="px-8 font-light"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
