import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '@/assets/images/logo-certiblock.svg';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import CustomLink from '../ui/Link/Link';
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [menu, setMenu] = useState(false);

  const handdleMenu = (e: any) => {
    setMenu(!menu);
  };

  const menuItems = [
    {
      text: 'Quiénes somos',
      display: true,
      link: '/about-us',
    },
    {
      text: 'Servicios',
      display: true,
    },
    {
      text: 'Blog',
      display: true,
    },
    {
      text: 'Log in',
      link: '/login',
      display: menu,
    },
    {
      text: 'Descargas',
      display: menu,
    },
  ];

  return (
    <header className="container absolute top-0 right-0 left-0 z-50 mx-auto px-8">
      <nav className="left-0 w-full py-8 transition-all duration-100 ease-in md:flex md:items-center md:justify-center md:space-x-10 md:bg-transparent">
        <div className="flew-row flex justify-between">
          <a className="self-center" href="/">
            <img src={logo} alt="logo" className="w-1/2" />
          </a>
          <FontAwesomeIcon
            className="block md:hidden"
            role={'button'}
            icon={!menu ? faBars : faClose}
            fontSize="24"
            onClick={handdleMenu}
          />
        </div>
        <div
          className={`absolute bg-white ${
            menu ? 'left-[0px]' : 'left-[-800px]'
          } top-[80px] z-10 flex h-screen w-3/4 flex-col space-y-4 text-black transition-all duration-150 ease-in md:static md:z-auto md:h-auto md:w-auto md:flex-row md:items-center md:space-x-4 md:space-y-0 md:self-center md:rounded-full md:bg-primary md:px-2 md:opacity-100`}
        >
          {menuItems.map(
            (item, index) =>
              !!item.display && (
                <Link
                  key={index}
                  className="md:py-2 md:first:after:content-['|'] md:even:after:content-['|']"
                  to={item.link || '#'}
                >
                  <span className="px-4">{item.text}</span>
                </Link>
              )
          )}
        </div>
        <CustomLink
          to="/login"
          className="hidden border-none bg-primary font-normal text-black md:inline"
          text="Log in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </CustomLink>
        <Button
          text="Reclama tu activo"
          className="hidden font-normal md:inline"
          type="secondary"
        />
      </nav>
    </header>
  );
};

export default Navbar;
