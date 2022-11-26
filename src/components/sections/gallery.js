import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// import data from "../../data/gallery";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/css";
import "./achievements.css";
import { client, urlFor } from "../../client";

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

  const [data, setData] = useState([]);

    useEffect(() => {
        const query = '*[_type == "gallery_iedc"]'
        // const UEvents = events.filter((event) => {
        //     return new Date(`${event.date}`) > new Date();
        // });
        // setUpcomingEvents(UEvents);
        client.fetch(query).then((res) => {
            // const UEvents = res.filter((event) => {
            //     return new Date(`${event.date}`) > new Date();
            // });
            setData(res);
        })
        .catch((err) => {
            console.log("Sanity Ignites Event fetching : " + err);
        });

    }, []);
  
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
                    <p className="gallery-text">{item.name}</p>
                    <img
                      className="gal-img"
                      // src={`/gallery/${item.img}`}
                      src={urlFor(item.imgUrl)}
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
