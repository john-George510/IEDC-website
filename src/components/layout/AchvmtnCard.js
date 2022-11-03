import React from "react";
import "./achvmtncard.css";

const AchvmtnCard = ({ data }) => {
  return (
    <div className="achievement">
      <div className="top">
        <img src={`${data.img}`} alt="" />
      </div>
      <div className="bottom">
        <span style={{fontWeight:"600",fontSize:"20px"}}>{data.title}</span>
        <p style={{textAlign:"left"}}>{data.desc}</p>
      </div>
    </div>
  );
};

export default AchvmtnCard;
