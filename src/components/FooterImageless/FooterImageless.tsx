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
      <div id="FooterImageless" className="rounded-t-3xl bg-blue-green text-white md:rounded-t-[4.5rem]">
        <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
          <div className="flex w-full flex-wrap items-start justify-between space-y-12 md:space-y-4">
            <div className="flex w-full flex-col space-y-3 md:w-2/5">
              <div className="icon space-y-4 md:hidden text-center space-x-6 mt-10">
                {inconsRow.map((item, index) => (
                  <FontAwesomeIcon key={index} icon={item} fontSize="40 " />
                ))}
              </div>
              <label className="font-medium text-white md:text-5xl md:font-light">
                Suscríbete
              </label>
              <div className="email my-6 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none rounded-xl border-none bg-gray-200 py-3 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none md:w-2/3 md:p-3"
                />
                <button className="space-x-5 rounded-xl bg-primary px-4 py-2 font-light text-dark-blue-4 md:p-3 flex items-center justify-center">
                  <span>ENVIAR</span>
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.899" height="20.204" viewBox="0 0 26.899 20.204">
                    <g id="Grupo_87" data-name="Grupo 87" transform="translate(-739.906 -3583.398)">
                      <path id="Trazado_66" data-name="Trazado 66" d="M1175.411,723.577l8.688,8.688-8.688,8.688" transform="translate(-418.708 2861.236)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                      <line id="Línea_97" data-name="Línea 97" x1="20.246" transform="translate(740.906 3593.271)" fill="none" stroke="#03103a" strokeLinecap="round" strokeWidth="2"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="list text-white"> 
              <ul className="space-y-2">
                {column2.map((item, index) => (
                  <li key={index} className="">
                    <span className="md:px-4 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="list text-white">
              <ul className="space-y-2">
                {column3.map((item, index) => (
                  <li key={index} className="">
                    <span className="md:px-4 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="list hidden space-y-4 md:flex md:flex-col">
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
