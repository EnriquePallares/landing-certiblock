import React, { MouseEventHandler, ReactNode } from 'react';
export interface ButtonInterface {
  text: string;
  type?: string;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const styleType = new Map();

styleType.set('primary', 'bg-primary text-dark-gray');
styleType.set('primary-text-white', 'bg-primary text-white');
styleType.set('secondary', 'bg-secondary text-white');
styleType.set('dark', 'bg-dark-gray text-white text-primary');
styleType.set('ligth', 'bg-white text-primary');
styleType.set('ligth-text-black', 'bg-white text-black');

const Button: React.FC<ButtonInterface> = props => {
  return (
    <button
      onClick={props.onClick ?? undefined}
      className={`rounded-full py-2 px-4 text-base ${styleType.get(
        props.type || 'primary'
      )} ${props.className}`}
    >
      <div className="flex items-center justify-center space-x-1">
        <span>{props.text}</span>
        {props.children}
      </div>
    </button>
  );
};

export default Button;
