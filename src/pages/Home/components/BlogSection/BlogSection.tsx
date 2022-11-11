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
      className="relative bg-light-gray rounded-t-3xl md:rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto relative px-4 md:px-14 py-14 md:py-20">
        <img
          src={floatIcon}
          alt="Float icon"
          className="md:inline-block hidden absolute -top-12"
        />

        <div className="grid md:grid-cols-5 grid-cols-1 gap-4 font-medium">
          <div className="hidden md:grid list-posts col-span-2">
            <h4 className="text-2xl mb-8">
              Aprende con nosotros <br />
              sobre Web 3.0
            </h4>
            <h4 className="text-xl text-dark-blue-0">
              Inscríbete a nuestro <br />
              news letter
            </h4>
            <div className="flex flex-row space-x-4 my-6">
              <input
                type="email"
                placeholder="Email"
                className="appearance-none bg-gray-200 text-gray-700 rounded-[22px] px-4 py-4 leading-tight focus:outline-none focus:bg-white font-light w-2/3 border-none"
              />
              <button className="bg-primary px-4 text-dark-blue-0 font-light rounded-[22px] space-x-5  py-3">
                <span>Enviar</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <Accordion className="text-dark-blue-4">
              {posts.map((post, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title className="bg-white hover:bg-primary text-current text-2xl">
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
            className={`last-post relative col-span-3 md:bg-[url('@/assets/images/post-image.png')] bg-center bg-no-repeat bg-cover rounded-r-xl bg-image-opacity z-10`}
          >
            <div className="md:w-3/5 ml-auto md:my-5 md:mr-20">
              <h4 className="text-2xl mb-8">Último post</h4>
              <LastPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
