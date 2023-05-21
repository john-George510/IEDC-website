import React, {useState, useEffect} from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { client } from "../../client";
import { HashScroll } from "react-hash-scroll";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "./upcomingevents.css";
import UpcomCard from "../layout/UpcomCard";

const upcevents = [
  {
    title: "Starter Kit Workshop",
    date: "22/05/2023-28/05/2023",
    venue: "Gmeet",
    img: "starter_kit_final",
    link:'https://docs.google.com/forms/d/e/1FAIpQLScFG372-TEJvrn_lztNJODGlkTLYbjAYCxvFQtok_REEVKOlw/viewform?usp=sharing'
  },
  {
    title: "Sub Panel Call",
    date: "Last date 26/05/2023",
    img: "rec_call",
    link:'https://forms.gle/n5bqyX49oxQrwqp69'
  },
]

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const UpcomingEvents = ({
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
    title: "Upcoming Events",
    paragraph: "",
  };

  const [upcomingevents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const query = '*[_type == "events_iedc"]'
        // const UEvents = events.filter((event) => {
        //     return new Date(`${event.date}`) > new Date();
        // });
        // setUpcomingEvents(UEvents);
        client.fetch(query).then((res) => {
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
    <HashScroll hash="#UpcomingEvents" position="start">
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
              {upcevents.map((d, i) => (
                <SwiperSlide>
                  <UpcomCard data={d} key={i}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </HashScroll>
  );
};

UpcomingEvents.propTypes = propTypes;
UpcomingEvents.defaultProps = defaultProps;

export default UpcomingEvents;
