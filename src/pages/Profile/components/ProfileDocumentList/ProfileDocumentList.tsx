import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import jsonDocuments from '@/assets/json/documents.json';
import { DocumentCard } from '../DocumentCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import playIcon from '@/assets/images/iconPlay.png';
export interface ProfileDocumentListInterface {}

const ProfileDocumentList: React.FC<ProfileDocumentListInterface> = () => {
  const [newsCategory, setNewsCategory] = useState('all');
  const handleFilter = (event: any) => setNewsCategory(event.target.value);

  const documents = jsonDocuments;
  const optionsFilter = [
    {
      text: 'Año',
      value: 'CE',
    },
    {
      text: 'Referencia',
      value: 'ED',
    },
    {
      text: 'Ubicación',
      value: 'NT',
    },
    {
      text: 'Reclamados',
      value: 'FA',
    },
    {
      text: 'No reclamados',
      value: 'FA',
    },
  ];

  return (
    <>
      <div className="mb-12 flex flex-col gap-y-2 md:flex-row md:justify-between">
        <ul className="-mx-1 flex flex-wrap gap-y-2 md:mx-0 md:gap-1">
          {optionsFilter.map(
            (item: { text: string; value: string }, index: number) => (
              <li key={index} className="w-1/2 px-1 md:w-auto md:px-0">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="posts-filter"
                    value={item.value}
                    onChange={handleFilter}
                  />
                  <div className="rounded-3xl bg-white py-1.5 px-2 text-center text-light-gray ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0 md:px-8">
                    <span className="flex content-center items-center justify-between space-x-4 align-middle">
                      <p>{item.text}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4"
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                      >
                        <g
                          id="Trazado_83"
                          data-name="Trazado 83"
                          transform="translate(21) rotate(90)"
                          fill="none"
                        >
                          <path d="M12,0,24,21H0Z" stroke="none" />
                          <path
                            d="M 12 2.015560150146484 L 1.723176956176758 20 L 22.27682304382324 20 L 12 2.015560150146484 M 12 0 L 24 21 L 0 21 L 12 0 Z"
                            stroke="none"
                            fill="#707070"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </label>
              </li>
            )
          )}
        </ul>
        <div className="relative flex flex-wrap items-stretch md:w-fit">
          <span className="absolute z-10 h-full w-8 items-center justify-center rounded-full bg-transparent py-2 pl-3 text-center text-base font-normal leading-snug text-black">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="relative w-full rounded-full border-0 bg-primary px-3 py-2 pl-10 text-sm text-black placeholder-black shadow outline-none focus:outline-none focus:ring"
          />
        </div>
      </div>
      <h4 className="mb-4 text-3xl font-medium text-primary">Documentos</h4>
      <div className="grid gap-2 transition duration-300 md:grid-cols-4">
        {documents.map((document, index: number) => (
          <DocumentCard document={document} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProfileDocumentList;
