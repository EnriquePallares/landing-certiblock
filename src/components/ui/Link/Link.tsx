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

styleType.set('primary', 'bg-primary text-dark-gray');
styleType.set('secondary', 'bg-secondary text-white');
styleType.set(
  'dark',
  'bg-dark-gray text-primary 2xl:first:w-64 first:w-44 first:relative  2xl:first:left-12 first:left-4 first:z-20 first:!rounded-tr-full  first:!rounded-br-full 2xl:last:w-36 last:w-24 last:relative  2xl:last:right-12 last:right-4 last:z-20 last:!rounded-tl-full last:!rounded-bl-full'
);
styleType.set('ligth', 'bg-white text-primary');
styleType.set('light-gray', 'bg-light-gray text-dark-gray');

const CustomLink: React.FC<LinkInterface> = props => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `flex items-center justify-center rounded-full text-sm font-bold ${
          props.className
        } ${
          !isActive
            ? styleType.get(props.type ?? 'primary')
            : styleType.get(props.type ?? 'dark')
        }`
      }
    >
      <span className="flex text-center 2xl:text-xl 2xl:w-48 2xl:h-16 xl:w-36 xl:h-10 items-center justify-center py-2 px-4">
        {props.text}
        {props.children}
      </span>
    </NavLink>
  );
};

export default CustomLink;
