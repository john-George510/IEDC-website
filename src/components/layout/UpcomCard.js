import React from "react";
import "./upcomcard.css";
import { urlFor } from "../../client";
const UpcomCard = ({ data }) => {

  const date = () => {
    let event = data.date
    return new Date(event).toLocaleDateString()
  }

  const styles = {
    // background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
    borderRadius: '24px',
    padding: '15px',
  }

  return (
    <div className="upcoming-events" style={styles}>
      <div className="top-ue">
        <img src={urlFor(data.imgUrl)} alt="" />
      </div>
      <div className="bottom-ue flex flex-col justify-center items-center">
        <span className="text-base text-justify mt-2 font-semibold cursor-text" >{data.name}</span>
        {/* <p className="mt-3 mb-0 text-sm">Date: {data.date}</p> */}
        <p className="mt-3 mb-0 text-sm">Date: {date()}</p>
        {/* <p className="mt-3 mb-0 text-sm">Date: {`${data.date.getUTCDate()} / ${data.date.getUTCMonth()} / ${data.date.getUTCFullYear()}`}</p>
        <p className="mb-0 text-sm">Time: {`${data.date.getUTCHours() < 12 ? data.date.getUTCHours() : data.date.getUTCHours() - 12}:${data.date.getUTCMinutes()} ${data.date.getUTCHours() < 12 ? "AM" : "PM"}`}</p> */}
        <p className="mb-0 text-sm">{data.time ? `Time: ${data.time}` : ""}</p>
        <p className="mt-3 mb-0 text-sm">{data.venue ? `Venue: ${data.venue}` : ""}</p>
        <a className="mt-3 mb-0 text-sm cursor-pointer bg-slate-50 p-1 rounded-md " href={data.link} target="_blank" rel="noreferrer">
          <p className="text-black m-0 p-0">Register</p>
        </a>
      </div>
    </div>
  );
};

export default UpcomCard;
