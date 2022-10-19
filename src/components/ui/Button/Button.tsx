import React, { ReactNode } from "react";
export interface ButtonInterface {
  text: string;
  type: string;
  children?: ReactNode;
  className?: string;
}

const styleType = new Map();

styleType.set("primary", "bg-primary border-secondary text-white");
styleType.set("secondary", "bg-secondary border-secondary text-white");
styleType.set("ligth", "bg-white text-primary");

const Button: React.FC<ButtonInterface> = (props) => {
  return (
    <button
      className={`font-medium py-2 px-4 rounded-full border-[1px] text-base ${props.className} ${styleType.get(
        props.type
      )}`}
    >
      <div className="flex space-x-1">
        <span>{props.text}</span>
        {props.children}
      </div>
    </button>
  );
};

export default Button;
