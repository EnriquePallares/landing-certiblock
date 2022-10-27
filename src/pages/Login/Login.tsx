import React, { useRef } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import { Button, Link } from '@/components';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const userName = useRef();
  const password = useRef();

  return (
    <section className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <img src={bannerBackground} alt="Main banner" />
      <div className="absolute vertical-alignment-abs w-2/5">
        <h3 className="text-6xl text-primary text-center font-bold my-8">
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
          <div className='flex space-x-5 justify-end'>
            <Link to="/register" type='dark' text="REGÍSTRATE" className='px-8 font-light'/>
            <Button className='px-8 font-light' text="INICIAR SESIÓN"></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
