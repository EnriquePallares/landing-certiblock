import React, { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `rounded-full py-2 px-4 text-base ${props.className} ${!isActive ? styleType.get(
          props.type ?? 'primary'
        ): styleType.get(
          props.type ?? 'dark'
        )}`
      }
    >
      <div className="flex items-center justify-center space-x-1">
        <span>{props.text}</span>
        {props.children}
      </div>
    </NavLink>
  );
};

export default CustomLink;
