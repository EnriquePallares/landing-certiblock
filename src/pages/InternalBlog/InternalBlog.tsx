import { MainBannerReusable } from '@/components';
import React from 'react';
import { useParams } from 'react-router-dom';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import BlogContent from './components/BlogContent/BlogContent';
export interface InternalBlogInterface {}

const InternalBlog: React.FC<InternalBlogInterface> = () => {
  const { blogId } = useParams();

  return (
    <section id={`blog-post-${blogId}`}>
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        bannerImagesClasses="!aspect-[21/12] md:!aspect-[21/6]"
        title="Blog"
        classTitle="text-primary text-center"
      />
      <BlogContent />
    </section>
  );
};

export default InternalBlog;
