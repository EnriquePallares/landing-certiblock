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
      <div className="container relative mx-auto max-w-full">
        <img
          src={floatIcon}
          alt="Float icon"
          className="floatIcon absolute -top-12 hidden md:inline-block"
        />

        <div className="grid grid-cols-1 gap-4 font-medium md:grid-cols-6">
          <div className="list-posts col-span-2 hidden md:grid">
            <h4 className="title mb-8 text-2xl text-white-200">
              Aprende con nosotros <br />
              sobre Web 3.0
            </h4>
            <h4 className="label text-xl text-dark-blue-4">
              Inscríbete a nuestro <br />
              news letter
            </h4>
            <div className="email h-max my-6 mt-0 flex flex-row space-x-4 justify-between">
              <input
                type="email"
                placeholder="Email"
                className="w-2/3 appearance-none rounded-[22px] border-none bg-white px-4 py-4 font-light leading-tight text-gray-700 focus:bg-white focus:outline-none"
              />
              <button className="send space-x-5 rounded-[22px] bg-primary px-4 py-3 font-light text-dark-blue-4 flex items-center">
                <span>ENVIAR</span>
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" width="26.899" height="20.204" viewBox="0 0 26.899 20.204">
                  <g id="Grupo_313" data-name="Grupo 313" transform="translate(-622.906 -2247.398)">
                    <path id="Trazado_63" data-name="Trazado 63" d="M1175.411,723.577l8.688,8.688-8.688,8.688" transform="translate(-535.707 1525.236)" fill="none" stroke="#03103a" stroke-linecap="round" stroke-width="2"/>
                    <line id="Línea_90" data-name="Línea 90" x1="20.246" transform="translate(623.906 2257.271)" fill="none" stroke="#03103a" stroke-linecap="round" stroke-width="2"/>
                  </g>
                </svg>

              </button>
            </div>

            <Accordion className="accordion text-dark-blue-4 border-gray-200 h-max">
              {posts.map((post, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title className="bg-white text-2xl !text-current hover:bg-primary">
                    {post.title}
                  </Accordion.Title>
                  <Accordion.Content className="text-content bg-white text-current">
                    <p className="text my-4 font-light">{post.content}</p>
                    <Link className="underline flex justify-between w-max" to={post.link}>
                      VER MÁS
                      {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                      <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" width="26.899" height="20.204" viewBox="0 0 26.899 20.204">
                        <g id="Grupo_313" data-name="Grupo 313" transform="translate(-252.906 -1665.586)">
                          <path id="Trazado_64" data-name="Trazado 64" d="M1175.411,723.577l8.688,8.688-8.688,8.688" transform="translate(-905.707 943.423)" fill="none" stroke="#03103a" stroke-linecap="round" stroke-width="2"/>
                          <line id="Línea_92" data-name="Línea 92" x1="20.246" transform="translate(253.906 1675.459)" fill="none" stroke="#03103a" stroke-linecap="round" stroke-width="2"/>
                        </g>
                      </svg>

                    </Link>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </div>

          <div
            className={`last-post bg-image-opacity relative z-10 col-span-4 rounded-r-xl bg-cover bg-center bg-no-repeat md:bg-[url('@/assets/images/post-image.png')]`}
          >
            <div className="md:my-5 md:ml-auto md:mr-20 md:w-1/2">
              <h4 className="mb-6 text-2xl md:mb-8">Último post</h4>
              <LastPost/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
