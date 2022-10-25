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
export interface FooterInterface {}

const column2 = ['Compañía', 'Acerca de nosotros', 'Comunidad', 'Partners'];
const column3 = ['Content', 'Blog', 'Podcast', 'Newsletter'];

const inconsRow = [faFacebook, faInstagram, faTiktok];

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="relative bg-blue-green text-white rounded-t-[4.5rem] py-20">
      <div className="container mx-auto">
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col space-y-3 columns-4 w-2/5">
            <label className="font-light text-5xl" htmlFor="">
              Suscríbete
            </label>
            <div className="flex flex-row space-x-4 my-6">
              <input
                type="email"
                placeholder="Email"
                className="appearance-none bg-gray-200 text-gray-700 rounded-xl px-4 py-4 leading-tight focus:outline-none focus:bg-white font-light w-2/3 border-none"
              />
              <button className="bg-primary px-4 text-dark-blue-0 font-light rounded-xl space-x-5  py-3">
                <span>Enviar</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div>
            <ul className="space-y-2">
              {column2.map((item, index) => (
                <li key={index} className="">
                  <span className="px-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {column3.map((item, index) => (
                <li key={index} className="">
                  <span className="px-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            {inconsRow.map((item, index) => (
              <FontAwesomeIcon key={index} icon={item} fontSize="26" />
            ))}
          </div>
        </div>
        <div className="container mx-auto mt-14">
          <h2 className="text-5xl my-6 font-medium">
            Sectores con <br /> los que trabajamos
          </h2>
          <SectorWorks />
        </div>
      </div>

      <img
        src={floatIcon}
        alt="Float icon"
        className="absolute -left-32 -bottom-40"
      />
    </footer>
  );
};

export default Footer;
