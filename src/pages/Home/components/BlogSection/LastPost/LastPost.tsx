import React from 'react';
import post1 from '@/assets/images/post-image.png';

export interface LastPostInterface {}

const LastPost: React.FC<LastPostInterface> = () => {
  return (
    <div className="bg-white text-dark-blue-4 rounded-3xl p-8">
      <div className="rounded-3xl">
        <div className="flex flex-row justify-between items-center">
          <span className="flex items-center">
            <svg height="54" width="54">
              <circle cx="26" cy="26" r="25" fill="#E4E4E4" />
            </svg>
            <span className="p-2">Certiblock</span>
          </span>
          <button className="bg-gray-200 font-normal px-3 rounded-md py-1 hover:bg-gray-300">
            <span>Seguir</span>
          </button>
        </div>
        <div className="py-4">
          <img src={post1} alt="post" className="object-cover w-100 rounded-md" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sapiente eaque deleniti vero est asperiores quia, natus dolore et illo
          dolorem hic commodi aperiam excepturi praesentium ut iusto amet? Fuga!
        </div>
      </div>
    </div>
  );
};

export default LastPost;
