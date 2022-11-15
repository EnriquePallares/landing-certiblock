import React from 'react';
import post1 from '@/assets/images/post-image.png';
import { CardInstagram } from '@/components/CardInstagram';

export interface LastPostInterface {}

const LastPost: React.FC<LastPostInterface> = () => {
  return (
    <div className="rounded-3xl bg-white p-6 text-dark-blue-4 md:p-8">
      <CardInstagram image={post1} />
    </div>
  );
};

export default LastPost;
