import { MainBannerReusable } from '@/components';
import React, { useContext, useState } from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
import bannerBackgroundMobile from '@/assets/images/bg-mainBanner-mobile.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import CustomLink from '@/components/ui/Link/Link';
import jsonDocuments from '@/assets/json/documents.json';
import { DocumentCard } from './components/DocumentCard';
import { Tabs } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  const [user] = useContext<any>(AuthContext);

  const documentsMenu = [
    {
      title: 'Documentos',
      to: 'documents',
    },
    {
      title: 'Crear documento',
      to: 'createDocument',
    },
    {
      title: 'Favoritos',
      to: 'favorites',
    },
    {
      title: 'Borrador',
      to: 'draft',
    },
  ];

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

  const [newsCategory, setNewsCategory] = useState('all');
  const handleFilter = (event: any) => setNewsCategory(event.target.value);

  return (
    <section id="blog">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        title={user.fullName}
        classTitle="text-center"
      />
      <section
        id="last-posts"
        className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:block md:rounded-t-[4.5rem]"
      >
        <div className="container mx-auto px-8 pt-10 md:px-14 md:py-20">
          <div className="flex justify-between gap-1">
            <ul className="-m-1 flex flex-wrap md:m-0 md:gap-1">
              {optionsFilter.map(
                (item: { text: string; value: string }, index: number) => (
                  <li key={index} className="w-1/2 px-1 py-1 md:w-auto md:p-0">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        className="peer sr-only"
                        name="posts-filter"
                        value={item.value}
                        onChange={handleFilter}
                      />
                      <div className="rounded-3xl bg-white py-1 px-2 text-center text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0 md:px-12">
                        {item.text}
                      </div>
                    </label>
                  </li>
                )
              )}
            </ul>
            <div className="relative mb-3 flex w-fit flex-wrap items-stretch">
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
          <h4 className="text-3xl font-normal text-primary">Documentos</h4>
          <div className="my-4 grid grid-cols-4 gap-2 transition duration-300">
            {documents.map((document, index: number) => (
              <DocumentCard document={document} key={index} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
