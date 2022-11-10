import React from "react";
import "./achvmtncard.css";

const TeamCard = ({ data }) => {
  return (
    <div className="achievement  rounded-2xl p-3">
      <div className="top">
        <img src={`${data.img}`} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xl mt-2 font-semibold" >{data.name}</span>
        <p className="mt-3 mb-0 text-sm">{data.position}</p>
        <p className="m-0 text-sm">{data.email}</p>
        <p className="mt-3 mb-0 text-sm">{`+91 ${data.phone}`}</p>
      </div>
    </div>
  );
};

export default TeamCard;