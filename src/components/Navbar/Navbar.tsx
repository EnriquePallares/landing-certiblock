import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
export interface NavbarInterface {}

const menuItems = [
  {
    text: "Quiénes somos",
  },
  {
    text: "Servicios",
  },
  {
    text: "Blog",
  },
];

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav className="p-5 md:flex justify-center space-x-10">
      <a className="self-center" href="#">
        <img src="asdasd" alt="asdasd" />
      </a>
      <div className="inline-flex rounded-full shadow-sm bg-primary space-x-4 self-center border-[1px] border-secondary px-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            className="py-2 first:after:content-['|'] even:after:content-['|']"
            to={"#"}
          >
            <span className="px-4">{item.text}</span>
          </Link>
        ))}
      </div>
      <Button text="Log in" type="primary">
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
      <Button text="Descargas" type="secondary" />
    </nav>
  );
};

export default Navbar;
