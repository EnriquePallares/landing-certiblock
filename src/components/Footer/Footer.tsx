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
      <div id="footer" className="extend-bg-color relative z-10 rounded-t-3xl bg-primary text-white md:rounded-t-[4.5rem] md:bg-blue-green">
      <svg className='sm:hidden hand' id="Grupo_53" data-name="Grupo 53" xmlns="http://www.w3.org/2000/svg" width="71.263" height="39.178" viewBox="0 0 71.263 39.178">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectángulo_47" data-name="Rectángulo 47" width="71.263" height="39.178" fill="none"/>
          </clipPath>
        </defs>
        <g id="Grupo_52" data-name="Grupo 52" clip-path="url(#clip-path)">
          <path id="Trazado_48" data-name="Trazado 48" d="M110.428,19.589A19.589,19.589,0,1,1,90.839,0a19.589,19.589,0,0,1,19.589,19.589" transform="translate(-39.165)" fill="#999899" fill-rule="evenodd"/>
          <path id="Trazado_49" data-name="Trazado 49" d="M.5,12.12V32.135l23.084,8.139H49.738V33.069H28.254V31.2H68.419V25.864H28.254V24H71.087V18.658H28.254V16.79H68.419V11.453H28.254V9.585H57.744V4.247H28.254Z" transform="translate(-0.275 -2.335)" fill="none" stroke="#0a6192" strokeMiterlimit="10" strokeWidth="1"/>
        </g>
      </svg>

        <div className="container mx-auto px-8 py-10 md:px-14 md:py-20 max-w-full">
          <div className="flex w-full flex-wrap items-start justify-between space-y-12 md:space-y-4">
            <div className="flex w-full flex-col space-y-3 md:w-2/5">
              <label className="font-medium sm:font-light text-blue-green md:text-5xl md:text-white-200">
                Suscríbete
              </label>
              <div className="email my-6 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none rounded-xl border-none bg-gray-200 py-3 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none md:w-2/3 md:p-3"
                />
                <button className="space-x-5 rounded-xl bg-blue-green px-4 py-2 font-light text-white md:bg-primary md:p-3 md:text-dark-blue-4 flex items-center justify-center">
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
            <div className="list text-blue-green md:text-white">
              <ul className="space-y-2">
                {column2.map((item, index) => (
                  <li key={index} className="">
                    <NavLink className="hover:underline" to="#" ><span className="md:px-4  font-light">{item}</span></NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="list text-blue-green md:text-white">
              <ul className="space-y-2">
                {column3.map((item, index) => (
                  <li key={index} className="">
                    <NavLink className="hover:underline" to="#" ><span className="md:px-4  font-light">{item}</span></NavLink>
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
      <div id="footer-sector" className="relative z-10 overflow-hidden rounded-t-3xl bg-blue-green text-white md:rounded-t-[4.5rem]">
        <div className="icon space-y-4 md:hidden text-center space-x-6 mt-10">
          {inconsRow.map((item, index) => (
            <FontAwesomeIcon key={index} icon={item} fontSize="40 " />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-14 pb-14 md:px-14 md:pt-0 md:pb-20  max-w-full">
          <h2 className="my-6 hidden font-medium md:inline-block md:text-5xl">
            Sectores con <br /> los que trabajamos
          </h2>
          <SectorWorks />
        </div>
        <img
          src={floatIcon}
          alt="Float icon"
          className="Floaticon -left-32 -bottom-44 -z-10 hidden md:absolute md:inline-block"
        />
        <svg className='sm:hidden hand' xmlns="http://www.w3.org/2000/svg" width="64.798" height="45.993" viewBox="0 0 64.798 45.993">
          <g id="Grupo_55" data-name="Grupo 55" transform="translate(84.797 76.993) rotate(180)">
            <path id="Trazado_51" data-name="Trazado 51" d="M45.992,23A23,23,0,1,1,23,0a23,23,0,0,1,23,23" transform="translate(20 30.999)" fill="#0a6192"/>
            <path id="Trazado_52" data-name="Trazado 52" d="M154.3,114.794v9.382l10.821,3.816h12.26v-3.378h-10.07v-.876h18.827v-2.5H167.309v-.876h20.078v-2.5H167.309v-.876h18.827v-2.5H167.309v-.876h13.823v-2.5H167.309Z" transform="translate(-103.09 -57.631)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1"/>
          </g>
        </svg>


      </div>
    </>
  );
};

export default Footer;
