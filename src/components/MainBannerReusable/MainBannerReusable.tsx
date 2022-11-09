import { ReactNode } from 'react';
import CustomLink, { LinkInterface } from '../ui/Link/Link';

export interface MainBannerReusableInterface {
  bannerBackground: string;
  bannerBackgroundMobile: string;
  title: string;
  paragraph: string | ReactNode;
  highlightedWord?: string;
  link: LinkInterface;
  classTitle?: string;
  classHighWord?: string;
}

const MainBannerReusable = ({
  bannerBackground,
  bannerBackgroundMobile,
  title,
  highlightedWord,
  paragraph,
  link,
  classTitle,
  classHighWord,
}: MainBannerReusableInterface) => {
  return (
    <section className="main-banner relative bg-dark-blue-0 extend-bg-color">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-auto md:aspect-video"
        />
      </picture>
      <div
        className={`w-full md:w-auto text-4xl md:text-8xl py-16 px-4 font-black absolute vertical-alignment-abs ${classTitle}`}
      >
        {title} <span className={classHighWord}>{highlightedWord}</span>
        <div className="rounded-xl p-6 bg-white/95 text-blue-green text-xl font-normal my-6">
          {paragraph}
        </div>
        <div className="link flex justify-center">
          <CustomLink to={link.to} className={link.className} text={link.text}>
            {link.children}
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default MainBannerReusable;
