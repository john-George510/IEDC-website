import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "../sections/partials/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import data from "../../data/Ignites/gallery";
import { HashScroll } from "react-hash-scroll";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/css";
import "./styles.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Gallery = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    'z-10'
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Gallery",
    paragraph: "",
  };

  return (
    <HashScroll hash="#Gallery" position="start">
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content achv-heading"
            />
            <div className={`${tilesClasses} slider-container`}>
              <div className="gallery">
                {data.map((item) => {
                  return (
                    <div className="gallerycol">
                      <p className="gallery-text">{item.text}</p>
                      <img
                        className="gal-img"
                        src={item.img}
                        alt={item.text}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
