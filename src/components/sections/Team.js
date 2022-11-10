import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { HashScroll } from "react-hash-scroll";
import { team, faculty } from "../../data/team";
// import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import 'swiper/css';
import "./achievements.css";
import TeamCard from "../layout/TeamCard";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

const Team = ({
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
        title: "Team",
        paragraph: "",
    };

    const sectionHeader_Faculty = {
        title: "Faculty",
        paragraph: "",
    };

    const swiper = useSwiper();

    return (
        <HashScroll hash="#Team" position="start">
            <section {...props} className={outerClasses}>
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader
                            data={sectionHeader_Faculty}
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
                                modules={[Autoplay, Pagination, Navigation, Scrollbar]}
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
                                // Scrollbar={{ draggable: true }}

                                className="mySwiper"
                            >
                                {/* <button onClick={() => swiper.slidePrev(100, true)}>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</button> */}
                                {faculty.map((d, i) => (
                                    <SwiperSlide index={i}><TeamCard data={d} /></SwiperSlide>
                                ))}

                                {/* <button onClick={() => swiper.slideNext(100, true)}>TTvvvvvvvvvvvvvvvvvvvvvvvvvvvT</button> */}
                            </Swiper>
                        </div>
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
                                modules={[Autoplay, Pagination, Navigation, Scrollbar]}
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
                                // Scrollbar={{ draggable: true }}

                                className="mySwiper"
                            >
                                {/* <button onClick={() => swiper.slidePrev(100, true)}>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</button> */}
                                {team.map((d, i) => (
                                    <SwiperSlide index={i}><TeamCard data={d} /></SwiperSlide>
                                ))}

                                {/* <button onClick={() => swiper.slideNext(100, true)}>TTvvvvvvvvvvvvvvvvvvvvvvvvvvvT</button> */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </HashScroll>
    );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
