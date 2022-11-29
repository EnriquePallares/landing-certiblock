import { MainBannerReusable } from '@/components';
import React, { useContext, useEffect, useState } from 'react';
import bannerBackground from '@/assets/images/eafit-medellin.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import escudoVerificado from '@/assets/images/escudo-blanco.svg';
import { CustomTabs } from '@/components/CustomTabs';
import { CustomTabsHeader } from '@/components/CustomTabs/CustomTabs';
import { CustomTabContent } from '@/components/CustomTabs/CustomTabContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import playIcon from '@/assets/images/iconPlay.png';
export interface CompanyProfileInterface {}

const CompanyProfile: React.FC<CompanyProfileInterface> = () => {
  const [user] = useContext<any>(AuthContext);
  const [newsCategory, setNewsCategory] = useState('all');
  const handleFilter = (event: any) => setNewsCategory(event.target.value);

  const headers: CustomTabsHeader[] = [
    {
      description: 'Colecciones',
      key: '0',
    },
    {
      description: 'Data',
      key: '1',
    },
    {
      description: 'Ajustes',
      key: '2',
    },
  ];

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
    <section id="companyProfile">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackground}
        title={user.fullName}
        classTitle="text-center"
      >
        {user.verified && (
          <div className="container">
            <div className="flex justify-center space-x-2">
              <h3 className="my-auto !w-fit !text-sm font-light">
                Perfil verificado
              </h3>
              <img className="w-6" src={escudoVerificado} />
            </div>
          </div>
        )}
      </MainBannerReusable>
      <section
        id="last-posts"
        className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:block md:rounded-t-[4.5rem]"
      >
        <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
          <CustomTabs headers={headers} className="my-4">
            <CustomTabContent className="" key={0}>
              <div>
                <div className="mb-12 flex flex-col gap-y-2 md:flex-row md:justify-between">
                  <ul className="-mx-1 flex flex-wrap gap-y-2 md:mx-0 md:gap-1">
                    {optionsFilter.map(
                      (
                        item: { text: string; value: string },
                        index: number
                      ) => (
                        <li
                          key={index}
                          className="w-1/2 px-1 md:w-auto md:px-0"
                        >
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
                                <img
                                  src={playIcon}
                                  alt="play icon"
                                  className="h-4"
                                />
                              </span>
                            </div>
                          </label>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="relative flex h-fit flex-wrap items-stretch md:w-fit">
                    <span className="absolute z-10 h-full w-8 items-center justify-center rounded-full bg-transparent py-2 pl-3 text-center text-base font-normal leading-snug text-black">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="relative w-full rounded-full border-0 bg-primary px-2 py-2 pl-10 text-sm text-black placeholder-black shadow outline-none focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <img
                  className="!h-fit w-full rounded-xl"
                  src="https://via.placeholder.com/1080/B8D2E3/FFFFFF/?text=Grafica de data"
                  alt=""
                />
              </div>
            </CustomTabContent>
            <CustomTabContent key={1}>
              <div>
                <img
                  className="!h-fit w-full rounded-xl"
                  src="https://via.placeholder.com/1080/B8D2E3/FFFFFF/?text=Gráfica de
				  Analytics"
                  alt=""
                />
              </div>
            </CustomTabContent>
            <CustomTabContent key={2}>
              <div>
                <img
                  className="!h-fit w-full rounded-xl"
                  src="https://via.placeholder.com/1080/B8D2E3/FFFFFF/?text=Grafica de data"
                  alt=""
                />
              </div>
            </CustomTabContent>
          </CustomTabs>
        </div>
      </section>
    </section>
  );
};

export default CompanyProfile;
