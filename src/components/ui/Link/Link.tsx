import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
export interface LinkInterface {
  text: string;
  type?: string;
  children?: ReactNode;
  className?: string;
  to: string;
}

const styleType = new Map();

styleType.set('primary', 'bg-primary text-dark');
styleType.set('secondary', 'bg-secondary text-white');
styleType.set('dark', 'bg-dark-gray text-primary');
styleType.set('ligth', 'bg-white text-primary');
styleType.set('light-gray', 'bg-light-gray text-dark-gray');

const CustomLink: React.FC<LinkInterface> = props => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `flex items-center justify-center rounded-full text-sm font-normal ${
          props.className
        } ${
          !isActive
            ? styleType.get(props.type ?? 'primary')
            : `${styleType.get(props.type ?? 'dark')} after:content-['']`
        }`
      }
    >
      <span className="flex items-center justify-center py-2 px-4">
        {props.text}
        {props.children}
      </span>
    </NavLink>
  );
};

export default CustomLink;
