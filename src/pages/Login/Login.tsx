import React, { useRef } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { Button, Link } from '@/components';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const userName = useRef();
  const password = useRef();

  return (
    <section id='login-page' className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-auto md:aspect-video w-full"
        />
      </picture>
      <div className="absolute vertical-alignment-abs md:w-2/5 w-full p-4">
        <h3 className="md:text-6xl text-primary text-center font-bold my-8 text-3xl">
          Inicio de sesión
        </h3>
        <form action="" className="flex flex-col space-y-3">
          <input
            placeholder="Username"
            className="rounded-[25px] w-full px-8 font-light"
            type="text"
          />
          <input
            placeholder="Contraseña"
            className="rounded-[25px] w-full px-8 font-light"
            type="text"
          />
          <div className='flex flex-col md:flex-row space-x-5 justify-end space-y-4'>
            <Link to="/register" type='dark' text="REGÍSTRATE" className='px-8 font-light'/>
            <Button className='px-8 font-light' text="INICIAR SESIÓN"></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
