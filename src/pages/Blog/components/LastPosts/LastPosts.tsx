import { CardPublicaciones } from '@/components/CardPublicaciones';
import React, { useState } from 'react';
import jsonPosts from '@/assets/json/posts.json';
export interface LastPostsInterface {}

export interface NewsCategories {
  text: string;
  value: string;
}

export interface Posts {
  id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  descriptionBeforeImage: string;
  descriptionAfterImage: string;
  link: string;
  categories: NewsCategories[];
}

const LastPosts: React.FC<LastPostsInterface> = () => {
  const optionsFilter: NewsCategories[] = [
    {
      text: 'Casos de éxito',
      value: 'CE',
    },
    {
      text: 'Educación',
      value: 'ED',
    },
    {
      text: 'Noticias',
      value: 'NT',
    },
    {
      text: 'FAQ',
      value: 'FA',
    },
  ];

  const posts: Posts[] = jsonPosts;

  const [newsCategory, setNewsCategory] = useState('all');
  const handleFilter = (event: any) => setNewsCategory(event.target.value);

  return (
    <section
      id="last-posts"
      className="extend-bg-color relative rounded-t-3xl bg-light-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
        <svg
          className="hand h-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="167.639"
          height="235.598"
          viewBox="0 0 167.639 235.598"
        >
          <g
            id="Grupo_94"
            data-name="Grupo 94"
            transform="translate(167.64 0.001) rotate(90)"
          >
            <path
              id="Trazado_51"
              data-name="Trazado 51"
              d="M167.639,83.82A83.82,83.82,0,1,1,83.82,0,83.819,83.819,0,0,1,167.639,83.82"
              transform="translate(0)"
              fill="#4796e1"
            />
            <path
              id="Trazado_52"
              data-name="Trazado 52"
              d="M154.3,124.555v34.2L193.74,172.66h44.685V160.348H201.72v-3.191h68.623v-9.12H201.72v-3.191H274.9v-9.12H201.72v-3.191h68.623v-9.12H201.72v-3.192H252.1V111.1H201.72Z"
              transform="translate(-39.806 -84.066)"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className='hand-mobile'
          width="75.708"
          height="53.985"
          viewBox="0 0 75.708 53.985"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectángulo_48"
                data-name="Rectángulo 48"
                width="75.708"
                height="53.985"
                fill="none"
              />
            </clipPath>
          </defs>
          <g
            id="Grupo_119"
            data-name="Grupo 119"
            transform="translate(75.708 53.985) rotate(180)"
          >
            <g id="Grupo_54" data-name="Grupo 54" clip-path="url(#clip-path)">
              <path
                id="Trazado_51"
                data-name="Trazado 51"
                d="M53.984,26.993A26.993,26.993,0,1,1,26.992,0,26.992,26.992,0,0,1,53.984,26.993"
                transform="translate(0.001 -0.001)"
                fill="#1c1f21"
              />
              <path
                id="Trazado_52"
                data-name="Trazado 52"
                d="M154.3,115.435v11.013l12.7,4.479h14.39v-3.965h-11.82v-1.028h22.1V123h-22.1V121.97h23.567v-2.937H169.569v-1.028h22.1v-2.937h-22.1V114.04h16.225V111.1H169.569Z"
                transform="translate(-117.429 -102.397)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </g>
          </g>
        </svg>

        <div className="mb-10 flex flex-col gap-y-3 md:flex-row md:justify-between md:gap-y-0">
          <div className="filter-section">
            <h3 className="mb-6 text-3xl font-medium">Última publicaciónes</h3>
            <ul className="-m-1 flex flex-wrap md:m-0 md:gap-2">
              {optionsFilter.map(
                (item: { text: string; value: string }, index: number) => (
                  <li key={index} className="w-1/2 px-1 py-2 md:w-auto md:p-0">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        className="peer sr-only"
                        name="posts-filter"
                        value={item.value}
                        onChange={handleFilter}
                      />
                      <div className="rounded-3xl bg-white py-2 px-2 text-center text-light-gray ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0 md:px-12">
                        {item.text}
                      </div>
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="md:self-end">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="posts-filter"
                value="all"
                onChange={handleFilter}
              />
              <div className=" button text-gray-600 rounded-[25px] bg-primary py-2 px-8 uppercase ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0">
                <h1 className="flex-auto text-lg">Todas las publicaciones</h1>
                <svg
                  id="Grupo_147"
                  className="flex-auto "
                  data-name="Grupo 147"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="20"
                  viewBox="0 0 15.997 24.435"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectángulo_103"
                        data-name="Rectángulo 103"
                        width="15.997"
                        height="24.435"
                        fill="#1c1f21"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Grupo_146"
                    data-name="Grupo 146"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Trazado_77"
                      data-name="Trazado 77"
                      d="M17.475,4.224V0H7.381a.258.258,0,0,0-.245.269v21.2a.258.258,0,0,0,.245.269H21.167a.258.258,0,0,0,.245-.269V4.224Z"
                      transform="translate(-5.415 0)"
                      fill="#1c1f21"
                    />
                    <path
                      id="Trazado_78"
                      data-name="Trazado 78"
                      d="M10.839,13.956V9.732H.745A.258.258,0,0,0,.5,10V31.2a.258.258,0,0,0,.245.269H14.531a.258.258,0,0,0,.246-.269V13.956Z"
                      transform="translate(-0.379 -7.164)"
                      fill="#1c1f21"
                      stroke="#c3d82d"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <line
                      id="Línea_107"
                      data-name="Línea 107"
                      x2="3.381"
                      y2="3.699"
                      transform="translate(12.39 0.196)"
                      fill="none"
                      stroke="#c3d82d"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                  </g>
                </svg>
              </div>
            </label>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4 md:gap-y-12">
          {newsCategory !== 'all'
            ? posts
                .filter((post: Posts) =>
                  post.categories.some(
                    (category: NewsCategories) =>
                      category.value === newsCategory
                  )
                )
                .map((filteredPost: Posts) => (
                  <CardPublicaciones
                    title={filteredPost.title}
                    image={filteredPost.image}
                    author={filteredPost.author}
                    description={filteredPost.description}
                    link={filteredPost.link}
                    key={filteredPost.id}
                  />
                ))
            : posts.map((post: Posts) => (
                <CardPublicaciones
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  description={post.description}
                  link={post.link}
                  key={post.id}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default LastPosts;
