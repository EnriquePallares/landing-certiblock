import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SectorWorks } from '../SectorWorks';
export interface FooterInterface {}

const column2 = ['Compañía', 'Acerca de nosotros', 'Comunidad', 'Partners'];
const column3 = ['Content', 'Blog', 'Podcast', 'Newsletter'];

const inconsRow = [faFacebook, faInstagram, faTiktok];

const FooterImageless: React.FC<FooterInterface> = () => {
  return (
    <>
      <div className="relative bg-blue-green text-white rounded-t-[4.5rem] extend-bg-color z-10">
        <div className="container mx-auto py-20 px-3">
          <div className="flex w-full justify-between items-start flex-wrap space-y-4">
            <div className="flex flex-col space-y-3 w-full md:w-2/5 ">
              <label
                className="font-light md:text-5xl text-blue-green md:text-white"
                htmlFor=""
              >
                Suscríbete
              </label>
              <div className="flex flex-row space-x-4 my-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none bg-gray-200 text-gray-700 rounded-xl md:px-4 md:py-4 leading-tight focus:outline-none focus:bg-white font-light w-2/3 border-none"
                />
                <button className="bg-primary px-4 text-dark-blue-0 font-light rounded-xl space-x-5  py-3">
                  <span>Enviar</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="text-white">
              <ul className="space-y-2">
                {column2.map((item, index) => (
                  <li key={index} className="">
                    <span className="px-4">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-white">
              <ul className="space-y-2">
                {column3.map((item, index) => (
                  <li key={index} className="">
                    <span className="px-4">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex md:flex-col space-y-4">
              {inconsRow.map((item, index) => (
                <FontAwesomeIcon key={index} icon={item} fontSize="26" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterImageless;
