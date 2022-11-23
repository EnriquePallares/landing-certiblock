import { MainBannerReusable } from '@/components';
import React, { useContext } from 'react';
import bannerBackground from '@/assets/images/bg-mainBanner.png';
import bannerBackgroundMobile from '@/assets/images/bg-mainBanner-mobile.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
import CustomLink from '@/components/ui/Link/Link';
import jsonDocuments from '@/assets/json/documents.json'
import { DocumentCard } from './components/DocumentCard';
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
        <div className="container relative mx-auto px-8 pt-10 md:px-14 md:py-20">
          <div className="inline-flex bg-white rounded-full">
            {documentsMenu.map((menuItem: any) => (
              <CustomLink text={menuItem.title} to={menuItem.to} type='ligth-text-black'/>
            ))}
          </div>
          <div className="grid grid-cols-4 my-4 gap-2">
            {
              documents.map((document, index: number)=>(
                <DocumentCard document={document} key={index}/>
              ))
            }
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
