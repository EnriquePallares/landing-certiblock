import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LastPost from './LastPost/LastPost';
import floatIcon from '@/assets/images/float-blog-icon.svg';
export interface BlogSectionInterface {}

const posts = [
  {
    title: 'Qué es certificación de origen',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Qué es Web 3.0',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Por qué Certiblock',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    title: 'Beneficios de certificarse',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
];

const BlogSection: React.FC<BlogSectionInterface> = () => {
  return (
    <section
      id="blog-section"
      className="extend-bg-color relative rounded-t-3xl bg-light-gray md:rounded-t-[4.5rem]"
    >
      <div className="container relative mx-auto px-8 pt-10 md:px-14 md:py-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="absolute -top-12 hidden md:inline-block"
        />

        <div className="grid grid-cols-1 gap-4 font-medium md:grid-cols-5">
          <div className="list-posts col-span-2 hidden md:grid">
            <h4 className="mb-8 text-2xl">
              Aprende con nosotros <br />
              sobre Web 3.0
            </h4>
            <h4 className="text-xl text-dark-blue-0">
              Inscríbete a nuestro <br />
              news letter
            </h4>
            <div className="my-6 flex flex-row space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-2/3 appearance-none rounded-[22px] border-none bg-gray-200 px-4 py-4 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
              />
              <button className="space-x-5 rounded-[22px] bg-primary px-4 py-3 font-light  text-dark-blue-0">
                <span>Enviar</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <Accordion className="text-dark-blue-4">
              {posts.map((post, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title className="bg-white text-2xl text-current hover:bg-primary">
                    {post.title}
                  </Accordion.Title>
                  <Accordion.Content className="bg-white text-current">
                    <p className="my-4 font-light">{post.content}</p>
                    <Link className="underline" to={post.link}>
                      Ver más <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>

          <div
            className={`last-post bg-image-opacity relative z-10 col-span-3 rounded-r-xl bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/images/post-image.png')]`}
          >
            <div className="md:my-5 md:ml-auto md:mr-20 md:w-3/5">
              <h4 className="mb-6 text-2xl md:mb-8">Último post</h4>
              <LastPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
