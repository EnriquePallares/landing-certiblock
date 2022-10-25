import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LastPost from './LastPost/LastPost';
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
      className="relative bg-light-gray rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto p-20">
        <div className="grid grid-cols-2 gap-5 font-medium">
          <div className="list-posts">
            <h4 className="text-2xl my-4">
              Aprende con nosotros <br />
              sobre Web 3.0
            </h4>
            <h4 className="text-xl">
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

            <Accordion alwaysOpen={true} className="bg-primary">
              {posts.map((post, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title>{post.title}</Accordion.Title>
                  <Accordion.Content>
                    <p className="my-4">{post.content}</p>
                    <Link to={post.link}>Ver más</Link>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>

          <div className="last-post">
            <h4 className="text-2xl mb-12">Último post</h4>
            <LastPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
