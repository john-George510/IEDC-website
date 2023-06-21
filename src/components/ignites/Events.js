import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "../sections/partials/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { client } from "../../client";
import { HashScroll } from "react-hash-scroll";
import "swiper/css";
import "./styles.css";
import EventCard from "./EventCard";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Events = ({
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
    "z-10 pb-0"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Upcoming Events",
    paragraph: "",
  };

  const [upcomingevents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const query = '*[_type == "events_ignites"]';
    // const UEvents = events.filter((event) => {
    //     return new Date(`${event.date}`) > new Date();
    // });
    // setUpcomingEvents(UEvents);
    client
      .fetch(query)
      .then((res) => {
        const UEvents = res.filter((event) => {
          return new Date(`${event.date}`) > new Date();
        });
        setUpcomingEvents(UEvents);
      })
      .catch((err) => {
        console.log("Sanity Ignites Event fetching : " + err);
      });
  }, []);

  return (
    <HashScroll hash="#Events" position="start">
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content achv-heading"
            />
            <div className={`${tilesClasses} slider-container`}>
              <Swiper
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                {upcomingevents.map((d, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <EventCard data={d} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;
