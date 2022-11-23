import { CardPublicaciones } from '@/components/CardPublicaciones';
import React, { useState } from 'react';
import jsonPosts from '@/assets/json/posts.json'
export interface LastPostsInterface {}

interface Posts {
  title: string;
  image: string;
  author: string;
  description: string;
  link: string;
  category: string;
}

const LastPosts: React.FC<LastPostsInterface> = () => {
  const optionsFilter = [
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

  const posts = jsonPosts as Posts[];

  const [newsCategory, setNewsCategory] = useState('all');
  const handleFilter = (event: any) => setNewsCategory(event.target.value);

  return (
    <section
      id="last-posts"
      className="extend-bg-color relative rounded-t-3xl bg-light-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 md:px-14 md:py-20">
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
                      <div className="rounded-3xl bg-white py-2 px-2 text-center text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0 md:px-12">
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
              <div className="rounded-[25px] bg-primary py-2 px-8 uppercase text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0">
                Todas las publicaciones
              </div>
            </label>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4 md:gap-y-12">
          {newsCategory !== 'all'
            ? posts
                .filter((post: Posts) => post.category === newsCategory)
                .map((filteredPost: Posts, index) => (
                  <CardPublicaciones
                    title={filteredPost.title}
                    image={filteredPost.image}
                    author={filteredPost.author}
                    description={filteredPost.description}
                    link={filteredPost.link}
                    key={index}
                  />
                ))
            : posts.map((post: Posts, index) => (
                <CardPublicaciones
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  description={post.description}
                  link={post.link}
                  key={index}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default LastPosts;
