import React, { ReactNode } from "react";
export interface ButtonInterface {
  text: string;
  type: string;
  children?: ReactNode;
}

const styleType = new Map();

styleType.set("primary", "bg-primary border-secondary text-white");

styleType.set("secondary", "bg-secondary border-secondary text-white");

styleType.set("ligth", "bg-white text-primary");

const Button: React.FC<ButtonInterface> = (props) => {
  return (
    <button
      className={`font-medium flex self-center py-2 px-4 rounded-full border-[1px] space-x-1 ${styleType.get(
        props.type
      )}`}
    >
      <span>{props.text}</span>
      {props.children}
    </button>
  );
};

export default Button;
