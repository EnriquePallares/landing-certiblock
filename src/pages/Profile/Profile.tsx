import { MainBannerReusable } from '@/components';
import React, { useContext, useState } from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
import bannerBackgroundMobile from '@/assets/images/bg-mainBanner-mobile.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import { CustomTabs } from '@/components/CustomTabs';
import { CustomTabsHeader } from '@/components/CustomTabs/CustomTabs';
import { CustomTabContent } from '@/components/CustomTabs/CustomTabContent';
import { ProfileDocumentList } from './components/ProfileDocumentList';
export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  const [user] = useContext<any>(AuthContext);



  const headers: CustomTabsHeader[] = [
    {
      description: 'Documentos',
      key: '0',
    },
    {
      description: 'Crear documento',
      key: '1',
    },
    {
      description: 'Favoritos',
      key: '2',
    },
    {
      description: 'Borrador',
      key: '3',
    },
  ];

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
        <div className="container relative mx-auto px-8 py-10 md:px-14 md:py-20">
          <CustomTabs headers={headers} className="my-4">
            <CustomTabContent key={0}>
              <div>
                <ProfileDocumentList />
              </div>
            </CustomTabContent>
            <CustomTabContent key={1}>
              <h4 className="mb-4 text-3xl font-medium text-primary">
                Documentos
              </h4>
            </CustomTabContent>
          </CustomTabs>
        </div>
      </section>
    </section>
  );
};

export default Profile;
