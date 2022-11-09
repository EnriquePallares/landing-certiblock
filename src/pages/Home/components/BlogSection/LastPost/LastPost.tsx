import React from 'react';
import post1 from '@/assets/images/post-image.png';
import { CardInstagram } from '@/components/CardInstagram';

export interface LastPostInterface {}

const LastPost: React.FC<LastPostInterface> = () => {
  return (
    <div className="bg-white text-dark-blue-4 rounded-3xl p-8">
      <CardInstagram image={post1}/>
    </div>
  );
};

export default LastPost;
