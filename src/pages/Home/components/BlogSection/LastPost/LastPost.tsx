import React from 'react';
import post1 from '@/assets/images/post-image.png';
import { CardInstagram } from '@/components/CardInstagram';
import floatIcon from '@/assets/images/float-blog-icon.svg';

export interface LastPostInterface {}

const LastPost: React.FC<LastPostInterface> = () => {
  return (
    <div className="rounded-3xl bg-white p-6 text-dark-blue-4 md:p-8">
      <img
          src={floatIcon}
          alt="Float icon"
          className="floatIcon absolute -bottom-12 right-0 inline-block sm:hidden"
        />
      <CardInstagram image={post1} />
    </div>
  );
};

export default LastPost;
