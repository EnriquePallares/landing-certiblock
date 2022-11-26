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
        USER_INFO.type === 'user' ? navigation('/profile'): navigation('/companyProfile');
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
      <div className="vertical-alignment-abs absolute w-full p-8 md:w-1/2">
        <h3 className="my-8 text-center text-3xl font-black text-primary md:text-6xl">
          Inicio de sesión
        </h3>
        <form action="" className="flex flex-col space-y-3">
          <input
            ref={userName}
            placeholder="Username"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="text"
          />
          <input
            ref={password}
            placeholder="Contraseña"
            className="w-full rounded-[25px] px-8 font-light text-black"
            type="password"
          />
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
