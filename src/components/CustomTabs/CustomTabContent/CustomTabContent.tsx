import React, { ReactNode } from 'react';
export interface CustomTabContentInterface {
  key: number;
  children: ReactNode | ReactNode[];
}

const CustomTabContent: React.FC<CustomTabContentInterface> = ({
  key,
  children,
}) => {
  return <div key={key}>{children}</div>;
};

export default CustomTabContent;
