import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '@/assets/images/logo-certiblock.svg';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import logo from '@/assets/images/logo-certiblock.svg';
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
      display: menu,
    },
    {
      text: 'Descargas',
      display: menu,
    },
  ];

  return (
    <header className="container mx-auto absolute top-0 left-[-25px] right-0 z-50">
      <nav
        className={`md:p-5 md:flex md:justify-center md:items-center md:space-x-10 w-full left-0 md:bg-transparent p-8 transition-all ease-in duration-100`}
      >
        <div className="flex flew-row justify-between">
          <a className="self-center" href="#">
            <img src={logo} alt="logo" className="w-1/2" />
          </a>
          <FontAwesomeIcon
            className="md:hidden block"
            role={'button'}
            icon={!menu ? faBars : faClose}
            fontSize="24"
            onClick={handdleMenu}
          />
        </div>
        <div
          className={`bg-white absolute ${
            menu ? 'left-[0px]' : 'left-[-800px]'
          } md:static transition-all ease-in duration-150 md:opacity-100 flex flex-col md:flex-row md:items-center z-10 md:z-auto text-primary md:text-white md:rounded-full md:bg-primary md:space-x-4 md:self-center md:border-[1px] md:border-secondary md:px-2 top-[80px] h-screen md:h-auto w-3/4 md:w-auto space-y-4 md:space-y-0`}
        >
          {menuItems.map(
            (item, index) =>
              !!item.display && (
                <Link
                  key={index}
                  className="md:py-2 md:first:after:content-['|'] md:even:after:content-['|']"
                  to={'#'}
                >
                  <span className="px-4">{item.text}</span>
                </Link>
              )
          )}
        </div>
        <Button className="hidden md:inline" text="Log in" type="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Button>
        <Button
          text="Descargas"
          type="secondary"
          className="hidden md:inline"
        />
      </nav>
    </header>
  );
};

export default Navbar;
