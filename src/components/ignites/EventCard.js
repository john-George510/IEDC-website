import React from "react";
import "../layout/upcomcard.css";
import { urlFor } from "../../client";

const EventCard = ({ data }) => {
  return (
    <div className="upcoming-events">
      <div className="top-ue">
        <img src={urlFor(data.imgUrl)} alt="" />
      </div>
      <div className="bottom-ue flex flex-col justify-center items-center">
        <span className="text-base text-justify mt-2 font-semibold" >{data.name}</span>
        {/* <p className="mt-3 mb-0 text-sm">Date: {data.date}</p> */}
        <p className="mt-3 mb-0 text-sm">Date: {data.date}</p>
        {/* <p className="mt-3 mb-0 text-sm">Date: {`${data.date.getUTCDate()} / ${data.date.getUTCMonth()} / ${data.date.getUTCFullYear()}`}</p>
        <p className="mb-0 text-sm">Time: {`${data.date.getUTCHours() < 12 ? data.date.getUTCHours() : data.date.getUTCHours() - 12}:${data.date.getUTCMinutes()} ${data.date.getUTCHours() < 12 ? "AM" : "PM"}`}</p> */}
        <p className="mb-0 text-sm">Time: {data.time}</p>
        <p className="mt-3 mb-0 text-sm">Venue: {data.location}</p>
        <a className="mt-3 mb-0 text-sm cursor-pointer bg-slate-50 p-1 rounded-md " href={data.link} target="_blank" rel="noreferrer">
            <p className="text-black m-0 p-0">Register</p>
            </a>
      </div>
    </div>
  );
};

export default EventCard;