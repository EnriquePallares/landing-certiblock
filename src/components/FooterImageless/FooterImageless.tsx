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
      <div className="rounded-t-3xl bg-blue-green text-white md:rounded-t-[4.5rem]">
        <div className="container mx-auto px-4 py-10 md:px-14 md:py-20">
          <div className="flex w-full flex-wrap items-start justify-between space-y-4">
            <div className="flex w-full flex-col space-y-3 md:w-2/5 ">
              <label
                className="font-light text-blue-green md:text-5xl md:text-white"
                htmlFor=""
              >
                Suscríbete
              </label>
              <div className="my-6 flex flex-row space-x-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-2/3 appearance-none rounded-xl border-none bg-gray-200 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none md:px-4 md:py-4"
                />
                <button className="space-x-5 rounded-xl bg-primary px-4 py-3 font-light  text-dark-blue-0">
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
            <div className="hidden space-y-4 md:flex md:flex-col">
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
