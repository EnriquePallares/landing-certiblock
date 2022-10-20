import React from 'react';
import post1 from '@/assets/images/post-image.png';

export interface LastPostInterface {}

const LastPost: React.FC<LastPostInterface> = () => {
  return (
    <div className="container m-auto bg-white rounded-3xl p-8">
      <div className="rounded-3xl">
        <div className="flex flex-row justify-between items-center">
          <span className="text-primary flex items-center">
            <svg height="54" width="54">
              <circle cx="26" cy="26" r="25" fill="#E4E4E4" />
            </svg>
            <span className="p-2">Certiblock</span>
          </span>
          <button className="bg-gray-200 text-primary font-normal px-3 rounded-md py-1 hover:bg-gray-300">
            <span>Seguir</span>
          </button>
        </div>
        <div className="py-4">
          <img src={post1} alt="post" className="object-cover rounded-md" />
        </div>
        <div className="text-left text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sapiente eaque deleniti vero est asperiores quia, natus dolore et illo
          dolorem hic commodi aperiam excepturi praesentium ut iusto amet? Fuga!
        </div>
      </div>
    </div>
  );
};

export default LastPost;
