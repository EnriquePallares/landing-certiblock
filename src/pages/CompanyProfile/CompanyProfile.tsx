import { MainBannerReusable } from '@/components';
import React, { useContext, useEffect } from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
import bannerBackgroundMobile from '@/assets/images/bg-mainBanner-mobile.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import escudoVerificado from '@/assets/images/escudo-blanco.svg';
import { CustomTabs } from '@/components/CustomTabs';
import { CustomTabsHeader } from '@/components/CustomTabs/CustomTabs';
import { CustomTabContent } from '@/components/CustomTabs/CustomTabContent';
export interface CompanyProfileInterface {}

const CompanyProfile: React.FC<CompanyProfileInterface> = () => {
  const [user] = useContext<any>(AuthContext);

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
      description: 'Settings',
      key: '2',
    },
  ];

  return (
    <section id="companyProfile">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
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
            <CustomTabContent key={0}>
              <div>
                <h4 className="mb-4 text-3xl font-medium text-primary">
                  Colecciones
                </h4>
              </div>
            </CustomTabContent>
            <CustomTabContent key={1}>
              <h4 className="mb-4 text-3xl font-medium text-primary">Data</h4>
            </CustomTabContent>
            <CustomTabContent key={2}>
              <h4 className="mb-4 text-3xl font-medium text-primary">Settings</h4>
            </CustomTabContent>
          </CustomTabs>
        </div>
      </section>
    </section>
  );
};

export default CompanyProfile;
