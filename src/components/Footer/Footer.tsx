import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import UniversidadesImage from "/src/assets/images/university.svg";
import IglesiasImage from "/src/assets/images/churchs.svg";
import HospitalesImage from "/src/assets/images/hospitals.svg";
import ColegiosImage from "/src/assets/images/schools.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export interface FooterInterface {}

const column2 = ["Compañía", "Acerca de nosotros", "Comunidad", "Partners"];
const column3 = ["Content", "Blog", "Podcast", "Newsletter"];

const inconsRow = [faFacebook, faInstagram, faTiktok];

const endRow = [
  { text: "Universidades", icon: UniversidadesImage },
  { text: "Hospitales", icon: HospitalesImage },
  { text: "Colegios", icon: ColegiosImage },
  { text: "Iglesias", icon: IglesiasImage },
];

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="bg-dark-blue-3 text-white rounded-t-[4.5rem]">
      <div className="container mx-auto">
        <div className="flex w-full justify-around items-start p-20">
          <div className="flex flex-col space-y-3 columns-4 w-2/5">
            <label htmlFor="">Suscríbete</label>
            <input type="text" className="rounded-md p-2 text-black" />
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
        <div className="flex w-full justify-around items-start pb-10">
          {endRow.map((item, index) => (
            <div key={index} className="flex flex-col text-center space-y-4">
              <img src={item.icon} alt={item.text} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
