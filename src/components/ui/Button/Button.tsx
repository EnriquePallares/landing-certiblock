import React, { ReactNode } from 'react';
export interface ButtonInterface {
  text: string;
  type?: string;
  children?: ReactNode;
  className?: string;
}

const styleType = new Map();

styleType.set('primary', 'bg-primary border-secondary text-dark-gray');
styleType.set('secondary', 'bg-secondary border-secondary text-white');
styleType.set('dark', 'bg-dark-gray border-secondary text-white text-primary');
styleType.set('ligth', 'bg-white text-primary');

const Button: React.FC<ButtonInterface> = props => {
  return (
    <button
      className={`py-2 px-4 rounded-full text-base ${
        props.className
      } ${styleType.get(props.type || 'primary')}`}
    >
      <div className="flex space-x-1">
        <span>{props.text}</span>
        {props.children}
      </div>
    </button>
  );
};

export default Button;
