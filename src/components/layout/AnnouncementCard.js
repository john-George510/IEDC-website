import React from "react";
import "./announcementcard.css";
import { urlFor } from "../../client";
import ReactPlayer from 'react-player'
const AnnouncementCard = ({ data }) => {

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
    border:'1px solid',
    width:'2em'
  }

  const stylep = {
    borderRadius: '24px',
  }

  return (
    <div className="upcoming-events ml-2" style={styles}>
    <div className="top-ue pt-3 rounded-lg">
    {data.mediaType === "video" ? (
      <ReactPlayer
        url={`/Videos/${data.media}.mp4`}
        controls={true}
        className="player w-[45%] h-[70%]"
        width="100%"
        height="100%"
        borderRadius="24px"
        style={{ borderRadius: '24px' }} 
      />
    ) : (
      <img
        src={`/Images/${data.media}.jpg`}
        alt=""
        className="rounded-lg h-[110%] w-[110%] object-contain"
        height="100%"
        width="100%"
      />
    )}
  </div>
  
      <div className="bottom-ue flex flex-col justify-center items-center mt-4">
      <span
      className={`text-base text-justify mt-8 ${
        data.mediaType === "video" ? "pt-2" : "pt-14"
      } font-semibold cursor-text`}
    >
      {data.title}
    </span>
        <span className="text-base text-justify mt-2 font-semibold cursor-text" >{data.name}</span>
        <p className="mb-0 text-sm">{data.content}</p>
        {/* <p className="mt-3 mb-0 text-sm">Date: {data.date}</p> */}
        {/* <p className="mt-3 mb-0 text-sm">Date: {`${<data className="date"></data>.getUTCDate()} / ${data.date.getUTCMonth()} / ${data.date.getUTCFullYear()}`}</p>
        <p className="mb-0 text-sm">Time: {`${data.date.getUTCHours() < 12 ? data.date.getUTCHours() : data.date.getUTCHours() - 12}:${data.date.getUTCMinutes()} ${data.date.getUTCHours() < 12 ? "AM" : "PM"}`}</p> */}
        <p className="mb-0 text-sm">{data.time ? `Time: ${data.time}` : ""}</p>
        <p className="mt-3 mb-0 text-sm">{data.venue ? `Venue: ${data.venue}` : ""}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
