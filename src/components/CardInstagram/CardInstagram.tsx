import React from 'react';
export interface CardInstagramInterface {
  image: string;
}

const CardInstagram: React.FC<CardInstagramInterface> = ({ image }) => {
  return (
    <div className="rounded-3xl">
      <div className="flex flex-row items-center justify-between">
        <span className="flex items-center">
          <svg height="54" width="54">
            <circle cx="26" cy="26" r="25" fill="#E4E4E4" />
          </svg>
          <span className="p-2">Certiblock</span>
        </span>
        <button className="rounded-md bg-gray-200 px-3 py-1 font-normal hover:bg-gray-300">
          <span>Seguir</span>
        </button>
      </div>
      <div className="py-4">
        <img src={image} alt="post" className="w-100 rounded-md object-cover" />
      </div>
      <div className="text-sm font-light md:text-lg">
        <span className="font-semibold">Certiblock</span> Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem sapiente eaque deleniti
        vero est asperiores quia, natus dolore et illo dolorem hic commodi
        aperiam excepturi praesentium ut iusto amet? Fuga!
      </div>
    </div>
  );
};

export default CardInstagram;
