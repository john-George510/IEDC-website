import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import { HashScroll } from "react-hash-scroll";
import SectionHeader from "./partials/SectionHeader";
import ReactPlayer from "react-player";
const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const INOPoints = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "INO Points",
    paragraph: "",
  };

  return (
    <HashScroll hash="#INOPoints" position="start">
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile reveal-from-left"
                  data-reveal-container=".split-item"
                >
                  {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                  <h3 className="mt-0 mb-12">INO Points</h3>
                  <p className="m-0">
                  Introducing  𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦
                  A revolution in how CET thinks.
                  Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧.
                  Earn through registrations to events and workshops
                  Redeem cash prize and vouchers.
                  So what are you waiting for !!
                  Start farming your INO POINTS now.
                  𝗖𝗢𝗠𝗣𝗘𝗧𝗘
                  𝗖𝗢𝗟𝗟𝗘𝗖𝗧
                  𝗖𝗢𝗡𝗡𝗘𝗖𝗧
                  </p>

                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                >
                <ReactPlayer
                url={`/Videos/INO.mp4`}
                controls={true}
                className="player w-[45%] h-[70%]"
                width="100%"
                height="100%"
                borderRadius="24px"
                style={{ borderRadius: '24px' }} 
              />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

INOPoints.propTypes = propTypes;
INOPoints.defaultProps = defaultProps;

export default INOPoints;
