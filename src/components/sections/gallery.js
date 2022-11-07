import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import achievements from "../../data/achievements";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/css";
import "./achievements.css";
import AchvmtnCard from "../layout/AchvmtnCard";

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
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Gallery",
    paragraph: "",
  };
  const data = [
    {
      img: "pic6.jpg",
      text: "GOKUL BABY ALEX AT WORKSHOP ON ML AND QAUNTUM COMPUTING ",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
    {
      img: "pic6.jpg",
      text: "",
    },
  ];
  return (
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
                      src={`/gallery/${item.img}`}
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
  );
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
