import React, { ReactElement, ReactNode, useState } from 'react';
import { CustomTabContentInterface } from './CustomTabContent/CustomTabContent';
export interface CustomTabsInterface {
  headers: CustomTabsHeader[];
  className?: string;
  children: Array<ReactElement<CustomTabContentInterface>>;
}

export interface CustomTabsHeader {
  key: string;
  description: string;
}

const CustomTabs: React.FC<CustomTabsInterface> = ({
  headers,
  className,
  children,
}) => {
  const [tabIndex, setTabIndex] = useState<string>(headers[0].key);

  return (
    <div className={`${className}`}>
      <div className="flex w-full justify-between space-x-4 rounded-full bg-white text-black">
        {headers.map(header => (
          <button
            onClick={() => setTabIndex(header.key)}
            key={header.key}
            className={`w-full rounded-full p-4 text-center transition duration-300 ${
              header.key == tabIndex
                ? 'border border-primary bg-dark-gray text-white'
                : ''
            }`}
          >
            {header.description}
          </button>
        ))}
      </div>
      <div className="container py-4 transition duration-300">
        {children.map(content => {
          return content.key == tabIndex ? content : null;
        })}
      </div>
    </div>
  );
};

export default CustomTabs;
