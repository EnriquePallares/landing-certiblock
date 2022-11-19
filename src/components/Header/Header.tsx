import React from 'react';
import logo from '@/assets/images/logo-certiblock.svg';
import { Navbar } from 'flowbite-react';
import CustomLink from '../ui/Link/Link';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  const menuItems = [
    {
      text: 'Quiénes somos',
      link: '/about-us',
    },
    {
      text: 'Servicios',
      link: '/services',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto p-5">
        <Navbar fluid={true} className="bg-transparent">
          <Navbar.Brand href="/landing-certiblock/">
            <img src={logo} className="w-48" alt="Logo certiblock" />
          </Navbar.Brand>

          <Navbar.Toggle className="!text-white hover:!text-gray-500" />
          <Navbar.Collapse className="rounded bg-gray-100 px-2 pb-4 md:rounded-none md:bg-transparent md:px-0 md:pb-0">
            <div className="hidden font-normal md:inline-flex">
              {menuItems.map((item, index) => (
                <CustomLink
                  key={index}
                  to={item.link}
                  className="!rounded-none first:!rounded-tl-full first:!rounded-bl-full last:!rounded-tr-full last:!rounded-br-full even:before:content-['|'] even:after:content-['|']"
                  text={item.text}
                />
              ))}
            </div>

            <div className="block md:hidden">
              {menuItems.map((item, index) => (
                <CustomLink
                  key={index}
                  to={item.link}
                  className="mb-1"
                  text={item.text}
                />
              ))}
            </div>

            <CustomLink to="/login" className="mb-1 md:mb-0" text="Log in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </CustomLink>

            <CustomLink to="/test" text="Reclama tu activo" type="secondary" />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
