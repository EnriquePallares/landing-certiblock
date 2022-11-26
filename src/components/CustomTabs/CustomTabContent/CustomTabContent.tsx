import React, { ReactNode } from 'react';
export interface CustomTabContentInterface {
  key: number;
  children: ReactNode | ReactNode[];
  className?: string
}

const CustomTabContent: React.FC<CustomTabContentInterface> = ({
  children, className
}) => {
  return <div className={`${className}`}>{children}</div>;
};

export default CustomTabContent;
