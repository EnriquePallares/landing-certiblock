import { CardPublicaciones } from '@/components/CardPublicaciones';
import {
  NewsCategories,
  Posts,
} from '@/pages/Blog/components/LastPosts/LastPosts';
import Slider, { Settings } from 'react-slick';
export interface BlogContentInterface {
  postFound?: Posts;
  posts?: Posts[];
}

const BlogContent = ({ postFound, posts }: BlogContentInterface) => {  
  const sliderSettings: Settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: 'slick-dots custom-dots',
        },
      },
    ],
  };

  return (
    <section
      id="blog-content"
      className="extend-bg-color relative rounded-t-3xl bg-dark-gray md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto px-8 py-10 text-white md:px-14 md:py-20">
        <div className="md:w-4/5">
          <h3 className="text-3xl font-medium">{postFound?.title}</h3>
          <h4 className="mb-2 text-2xl font-medium">
            Por: {postFound?.author}
          </h4>

          <div className="mb-12 flex gap-4">
            {postFound?.categories.map((category: NewsCategories) => (
              <span
                key={category.value}
                className="rounded-full bg-white py-2 px-10 text-center font-light text-dark-gray"
              >
                {category.text}
              </span>
            ))}
          </div>

          <p className="my-4 font-light">{postFound?.descriptionBeforeImage}</p>
          <img
            src="https://via.placeholder.com/960x270/B8D2E3/FFFFFF/?text=Imagen"
            alt="Blog image"
            className="w-full rounded-2xl"
          />
          <p className="my-4 font-light">{postFound?.descriptionAfterImage}</p>

          <h4 className="mt-8 mb-4 text-2xl font-medium">
            Más de {postFound?.author}
          </h4>

          <div className="md:w-4/5">
            <Slider {...sliderSettings} className="-mx-1 md:-mx-2">
              {posts
                ?.filter((post: Posts) => post.author === postFound?.author)
                .map((postFiltered: Posts) => (
                  <div key={postFiltered.id}>
                    <CardPublicaciones
                      title={postFiltered.title}
                      image={postFiltered.image}
                      author={postFiltered.author}
                      description={postFiltered.description}
                      link={postFiltered.link}
                      className="mx-1 md:mx-2"
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
