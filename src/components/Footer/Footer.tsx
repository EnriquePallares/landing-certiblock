import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export interface FooterInterface {}

const column2 = ["Compañía", "Acerca de nosotros", "Comunidad", "Partners"];
const column3 = ["Content", "Blog", "Podcast", "Newsletter"];

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="bg-dark-blue text-white rounded-t-3xl w-full flex justify-around items-start p-20">
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
        <FontAwesomeIcon icon={faFacebook} fontSize="26"/>
        <FontAwesomeIcon icon={faInstagram} fontSize="26"/>
        <FontAwesomeIcon icon={faTiktok} fontSize="26"/>
      </div>
    </footer>
  );
};

export default Footer;
