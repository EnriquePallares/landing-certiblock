import { MainBannerReusable } from '@/components';
import React, { ReactNode } from 'react';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { LastPosts } from './components/LastPosts';
import { PodcastsSlider } from './components/PodcastsSlider';
export interface BlogInterface {}

const Blog: React.FC<BlogInterface> = () => {
  const arrowLink: ReactNode = <FontAwesomeIcon icon={faArrowDown} />;

  const paragraph: ReactNode = (
    <p>
      Aquí te compartimos <span className="underline">experiencias</span> de
      usuarios reales con nuestros servicios, noticias sobre{' '}
      <span className="underline">cryptos</span> y{' '}
      <span className="underline">blockchain</span> y mucho contenido para que
      aprendas y te informas sobre <span className="underline">Web 3.0 </span>
    </p>
  );

  return (
    <section id="blog">
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        title="Blog"
        classTitle="text-primary text-center"
        paragraph={paragraph}
        link={{
          text: 'Leer más',
          to: '#',
          type: 'primary',
          className:
            'border-none font-normal text-lg uppercase py-5 px-10 md:px-20',
          children: arrowLink,
        }}
      />
      <LastPosts />
      <PodcastsSlider />
    </section>
  );
};

export default Blog;
