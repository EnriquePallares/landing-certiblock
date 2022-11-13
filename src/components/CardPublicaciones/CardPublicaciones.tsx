import React from 'react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';
export interface CardPublicacionesInterface {
  title: string;
  image?: string;
  author: string;
  description: string;
  link: string;
}

const CardPublicaciones: React.FC<CardPublicacionesInterface> = props => {
  return (
    <div className="rounded-3xl bg-white p-5 text-dark-blue-0 overflow-hidden text-sm">
      <div className="flex flex-row items-center justify-between">
        <span className="flex items-center">
          <span className="p-2">{props.title}</span>
        </span>
      </div>
      <div className="py-4 bg-indigo-300 rounded-xl max-h-[250px] h-[200px]">

      </div>
      <div>Por: {props.author}</div>
      <div className="my-4 font-light max-h-28 overflow-hidden">
        {props.description}
      </div>
      <div className="flex justify-end">
        <Link to={props.link} text="Seguir leyendo" className=""></Link>
      </div>
    </div>
  );
};

export default CardPublicaciones;
