import { MainBannerReusable } from '@/components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bannerBackground from '@/assets/images/bg-login.png';
import bannerBackgroundMobile from '@/assets/images/bg-login-mobile.png';
import BlogContent from './components/BlogContent/BlogContent';
import SimilarPosts from './components/SimilarPosts/SimilarPosts';
import { Posts } from '../Blog/components/LastPosts/LastPosts';
import jsonPosts from '@/assets/json/posts.json';
export interface InternalBlogInterface {}

const InternalBlog: React.FC<InternalBlogInterface> = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState<Posts>();
  const posts: Posts[] = jsonPosts;

  const handlePost = () => {
    const postFound = posts.find((post: Posts) => post.id === blogId);
    setPost(postFound);
  };

  useEffect(() => {
    handlePost();
  }, [blogId]);

  return (
    <section id={`blog-post-${blogId}`}>
      <MainBannerReusable
        bannerBackground={bannerBackground}
        bannerBackgroundMobile={bannerBackgroundMobile}
        bannerImagesClasses="!aspect-[21/12] md:!aspect-[21/6]"
        title="Blog"
        classTitle="text-primary text-center"
      />
      <BlogContent postFound={post} posts={posts} />
      <SimilarPosts />
    </section>
  );
};

export default InternalBlog;
