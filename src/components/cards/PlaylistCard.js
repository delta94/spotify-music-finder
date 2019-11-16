import React from "react";

const PlaylistCard = ({ image, name, numberOfTrack }) => {
  const style = {
    background: `url(${image}) center center no-repeat`,
    backgroundSize: "cover"
  };
  return (
    <div className="playlist-card d-flex">
      <div className="image" style={style}></div>
      <div>
        <h5>{name}</h5>
        <p>Number of tracks: <b>{numberOfTrack}</b></p>
      </div>
    </div>
  );
};

export default PlaylistCard;
