import { CardPublicaciones } from '@/components/CardPublicaciones';
import React from 'react';
export interface LastPostsInterface {}

interface Posts {
  title: string;
  image: string;
  author: string;
  description: string;
  link: string;
}

const LastPosts: React.FC<LastPostsInterface> = () => {
  const optionsFilter = [
    {
      text: 'Casos de éxito',
      value: 'E',
    },
    {
      text: 'Educación',
      value: 'K',
    },
    {
      text: 'Noticias',
      value: 'N',
    },
  ];

  const posts: Posts[] = [
    {
      title: 'Cómo hacer tu primera certificación',
      image: '',
      author: 'Pepito Perez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/post1',
    },
    {
      title: 'Cómo hacer tu primera certificación',
      image: '',
      author: 'Pepito Perez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/post1',
    },
    {
      title: 'Cómo hacer tu primera certificación',
      image: '',
      author: 'Pepito Perez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/post1',
    },
    {
      title: 'Cómo hacer tu primera certificación',
      image: '',
      author: 'Pepito Perez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/post1',
    },
  ];

  return (
    <div className="extend-bg-color relative rounded-t-[4.5rem] bg-light-gray p-4">
      <div className="p-20">
        <div className="my-8 flex flex-row justify-between">
          <div className="flex-col">
            <h3 className="text-3xl">Última publicaciónes</h3>
            <ul className="flex gap-2">
              {optionsFilter.map((item: { text: string; value: string }, index: number) => (
                <li key={index}>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="pricing"
                    />
                    <div className="rounded-[25px] bg-white py-2 px-12 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0">
                      {item.text}
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-end">
            <label className="cursor-pointer">
              <input type="radio" className="peer sr-only" name="pricing" />
              <div className="rounded-[25px] bg-primary py-2 px-8 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-dark-blue-0 peer-checked:text-white peer-checked:ring-dark-blue-0">
                Todas las publicaciones
              </div>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <CardPublicaciones
              title={post.title}
              author={post.author}
              description={post.description}
              link={post.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPosts;
