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
import UpcomCard from "../layout/AnnouncementCard";

const upcevents = [
  {
    name: "INO Points",
    content:"Introducing  𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦"
    +"\n\n"+
    "A revolution in how CET thinks."
    +"\n\n"+
    "Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧."
    +"\n\n"+
    "Earn through registrations to events and workshops"
    +"\n\n"+
    "Redeem cash prize and vouchers."
    +"\n\n"+
    "So what are you waiting for !!"
    +"\n\n"+
    "Start farming your INO POINTS now."
    +"\n\n"+
    "𝗖𝗢𝗠𝗣𝗘𝗧𝗘 "
    +
    "𝗖𝗢𝗟𝗟𝗘𝗖𝗧 "
    +
    "𝗖𝗢𝗡𝗡𝗘𝗖𝗧 ",
    media: "INO",
    mediaType: "video",
  },
]

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Announcements = ({
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
    title: "Announcements",
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
    <HashScroll hash="#Announcements" position="start">
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

Announcements.propTypes = propTypes;
Announcements.defaultProps = defaultProps;

export default Announcements;
