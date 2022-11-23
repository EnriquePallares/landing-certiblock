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
    <div className="rounded-3xl bg-white p-5 text-sm text-dark-blue-0">
      <h6 className="mb-2 font-medium">{props.title}</h6>
      <div className="post-image mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="font-medium">Por: {props.author}</div>
      <div className="my-4 max-h-28 font-light">{props.description}</div>
      <div className="flex justify-end">
        <Link
          to={props.link}
          text="Seguir leyendo"
          className="text-sm uppercase"
        ></Link>
      </div>
    </div>
  );
};

export default CardPublicaciones;
