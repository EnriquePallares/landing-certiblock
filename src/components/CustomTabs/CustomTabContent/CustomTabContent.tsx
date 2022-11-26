import React, { ReactNode } from 'react';
export interface CustomTabContentInterface {
  key: number;
  children: ReactNode | ReactNode[];
}

const CustomTabContent: React.FC<CustomTabContentInterface> = ({
  children
}) => {
  return <div>{children}</div>;
};

export default CustomTabContent;
