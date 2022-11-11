import React, { useRef } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { Button, Link } from '@/components';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const userName = useRef();
  const password = useRef();

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
      <div className="vertical-alignment-abs absolute w-full p-4 md:w-2/5">
        <h3 className="my-8 text-center text-3xl font-bold text-primary md:text-6xl">
          Inicio de sesión
        </h3>
        <form action="" className="flex flex-col space-y-3">
          <input
            placeholder="Username"
            className="w-full rounded-[25px] px-8 font-light"
            type="text"
          />
          <input
            placeholder="Contraseña"
            className="w-full rounded-[25px] px-8 font-light"
            type="text"
          />
          <div className="flex flex-col justify-end space-x-5 space-y-4 md:flex-row">
            <Link
              to="/register"
              type="dark"
              text="REGÍSTRATE"
              className="px-8 font-light"
            />
            <Button className="px-8 font-light" text="INICIAR SESIÓN"></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
