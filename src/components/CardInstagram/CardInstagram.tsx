import React from 'react';

export interface CardInstagramInterface {
  image: string;
}

const CardInstagram: React.FC<CardInstagramInterface> = ({ image }) => {
  return (
    <div className="rounded-3xl">
      <div className="flex flex-row items-center justify-between">
        <span className="title flex items-center">
          <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" width="57" height="53" viewBox="0 0 57 53">
            <ellipse id="Elipse_2" data-name="Elipse 2" cx="28.5" cy="26.5" rx="28.5" ry="26.5" fill="#e4e4e4"/>
          </svg>

          <span className="p-2">Certiblock</span>
        </span>
        <button className="rounded-md bg-gray-200 px-3 py-1 font-light hover:bg-gray-300">
          <span>Seguir</span>
        </button>
      </div>
      <div className="image">
        <img src={image} alt="post" className="w-100 rounded-md object-cover" />
      </div>
      <div className="text text-sm font-light md:text-lg">
        <span className="font-semibold">Certiblock</span> Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem sapiente eaque deleniti
        vero est asperiores quia, natus dolore et illo dolorem hic commodi
        aperiam excepturi praesentium ut iusto amet? Fuga!
      </div>
    </div>
  );
};

export default CardInstagram;
