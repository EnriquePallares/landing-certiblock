import { MainBannerReusable } from '@/components';
import React, { useContext } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { AuthContext } from '@/context/AuthContextProvider/AuthContextProvider';
export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  const [user] = useContext<any>(AuthContext);

  return (
    <section id="blog">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        title={user.fullName}
        classTitle="text-primary text-center"
      />
    </section>
  );
};

export default Profile;
