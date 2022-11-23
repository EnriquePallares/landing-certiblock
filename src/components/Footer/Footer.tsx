import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SectorWorks } from '../SectorWorks';
import floatIcon from '@/assets/images/float-footer-icon.svg';
import { NavLink } from 'react-router-dom';
export interface FooterInterface {}

const column2 = ['Compañía', 'Acerca de nosotros', 'Comunidad', 'Partners'];
const column3 = ['Content', 'Blog', 'Podcast', 'Newsletter'];

const inconsRow = [faFacebook, faInstagram, faTiktok];

const Footer: React.FC<FooterInterface> = () => {
  return (
    <>
      <div className="extend-bg-color relative z-10 rounded-t-3xl bg-primary text-white md:rounded-t-[4.5rem] md:bg-blue-green">
        <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
          <div className="flex w-full flex-wrap items-start justify-between space-y-12 md:space-y-4">
            <div className="flex w-full flex-col space-y-3 md:w-2/5">
              <label className="font-medium text-blue-green md:text-5xl md:text-white">
                Suscríbete
              </label>
              <div className="my-6 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none rounded-xl border-none bg-gray-200 py-3 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none md:w-2/3 md:p-3"
                />
                <button className="space-x-5 rounded-xl bg-blue-green px-4 py-2 font-light text-white md:bg-primary md:p-3 md:text-dark-blue-0">
                  <span>Enviar</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="text-blue-green md:text-white">
              <ul className="space-y-2">
                {column2.map((item, index) => (
                  <li key={index} className="">
                    <NavLink className="hover:underline" to="#" ><span className="md:px-4">{item}</span></NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-blue-green md:text-white">
              <ul className="space-y-2">
                {column3.map((item, index) => (
                  <li key={index} className="">
                    <NavLink className="hover:underline" to="#" ><span className="md:px-4">{item}</span></NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden space-y-4 md:flex md:flex-col">
              {inconsRow.map((item, index) => (
                <FontAwesomeIcon key={index} icon={item} fontSize="26" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 overflow-hidden rounded-t-3xl bg-blue-green text-white md:rounded-t-[4.5rem]">
        <div className="space-y-4 md:hidden text-center space-x-6 mt-10">
          {inconsRow.map((item, index) => (
            <FontAwesomeIcon key={index} icon={item} fontSize="50" />
          ))}
        </div>
        <div className="container mx-auto px-4 pt-14 pb-14 md:px-14 md:pt-0 md:pb-20">
          <h2 className="my-6 hidden font-medium md:inline-block md:text-5xl">
            Sectores con <br /> los que trabajamos
          </h2>
          <SectorWorks />
        </div>
        <img
          src={floatIcon}
          alt="Float icon"
          className="-left-32 -bottom-44 -z-10 hidden md:absolute md:inline-block"
        />
      </div>
    </>
  );
};

export default Footer;
