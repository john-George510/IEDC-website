import React from "react";
import "./upcomcard.css";

const UpcomCard = ({ data }) => {
  return (
    <div className="upcoming-events">
      <div className="top-ue">
        <img src={`${data.img}`} alt="" />
      </div>
      <div className="bottom-ue flex flex-col justify-center items-center">
        <span className="text-base text-justify mt-2 font-semibold" >{data.title}</span>
        <p className="mt-3 mb-0 text-sm">Date: {data.date}</p>
        <p className="mb-0 text-sm">Time: {data.time}</p>
        <p className="mt-3 mb-0 text-sm">Venue: {data.venue}</p>
      </div>
    </div>
  );
};

export default UpcomCard;
