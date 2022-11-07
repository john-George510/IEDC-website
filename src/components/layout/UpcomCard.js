import React from "react";
import "./upcomcard.css";

const UpcomCard = ({ data }) => {
  return (
    <div className="upcoming-events">
      <div className="top-ue">
        <img src={`${data.img}`} alt="" />
      </div>
      <div className="bottom-ue">
        <span style={{fontWeight:"600",fontSize:"20px"}}>{data.title}</span>
        <p style={{textAlign:"left"}}>Date: {data.date}</p>
        <p style={{textAlign:"left"}}>Time: {data.time}</p>
        <p style={{textAlign:"left"}}>Venue: {data.venue}</p>
      </div>
    </div>
  );
};

export default UpcomCard;
