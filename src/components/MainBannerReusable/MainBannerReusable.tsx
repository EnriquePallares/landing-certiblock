import { ReactNode } from 'react';
import CustomLink, { LinkInterface } from '../ui/Link/Link';

export interface MainBannerReusableInterface {
  bannerBackground: string;
  bannerBackgroundMobile: string;
  title: string;
  paragraph?: string | ReactNode;
  highlightedWord?: string;
  link?: LinkInterface;
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
    <section className="main-banner extend-bg-color relative bg-dark-blue-0">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerBackground} />
        <img
          src={bannerBackgroundMobile}
          alt="Main banner"
          className="aspect-auto md:aspect-video"
        />
      </picture>
      <div
        className={`vertical-alignment-abs absolute w-full py-16 px-8 text-4xl font-black md:w-2/3 md:px-4 md:text-8xl ${classTitle}`}
      >
        {title} <span className={classHighWord}>{highlightedWord}</span>
        {paragraph && (
          <div className="my-6 rounded-xl bg-white/95 px-4 py-6 text-xl font-normal text-blue-green md:p-6">
            {paragraph}
          </div>
        )}
        <div className="link flex justify-center">
          <CustomLink
            to={link?.to ?? ''}
            className={link?.className ?? ''}
            type={link?.type ?? ''}
            text={link?.text ?? ''}
          >
            {link?.children ?? ''}
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default MainBannerReusable;
