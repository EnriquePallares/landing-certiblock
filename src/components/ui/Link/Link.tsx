import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
export interface LinkInterface {
  text: string;
  type?: string;
  children?: ReactNode;
  className?: string;
  to: string;
}

const styleType = new Map();

styleType.set('primary', 'bg-primary border-secondary text-dark-gray');
styleType.set('secondary', 'bg-secondary border-secondary text-white');
styleType.set('dark', 'bg-dark-gray border-secondary text-white text-primary');
styleType.set('ligth', 'bg-white text-primary');

const CustomLink: React.FC<LinkInterface> = props => {
  return (
    <Link
      to={props.to}
      className={`py-2 px-4 rounded-full text-base ${
        props.className
      } ${styleType.get(props.type || 'primary')}`}
    >
      <div className="flex space-x-1 items-center justify-center">
        <span>{props.text}</span>
        {props.children}
      </div>
    </Link>
  );
};

export default CustomLink;
