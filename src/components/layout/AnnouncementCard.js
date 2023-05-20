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
      <ReactPlayer url={`/Videos/${data.vid}.mp4`} controls={true} className="player w-[45%] h-[70%]" width="100%" height="100%" borderRadius="24px" style={stylep}/>
      </div>
      <div className="bottom-ue flex flex-col justify-center items-center">
        <span className="text-base text-justify mt-2 font-semibold cursor-text" >{data.title}</span>
        <span className="text-base text-justify mt-2 font-semibold cursor-text" >{data.name}</span>
        <p className="mb-0 text-sm">Introducing  𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦

        A revolution in how CET thinks.
        Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧.
        Earn through registrations to events and workshops
        Redeem cash prize and vouchers.
        
        So what are you waiting for !!
        Start framing your INO POINTS now.
        
        𝗖𝗢𝗠𝗣𝗘𝗧𝗘
        𝗖𝗢𝗟𝗟𝗘𝗖𝗧
        𝗖𝗢𝗡𝗡𝗘𝗖𝗧 </p>
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
