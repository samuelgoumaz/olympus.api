/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Track.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TrackProps {
  name?: string | null;
  id?: string;
}



/*
# Class Components
*/
const Track: React.FC<TrackProps> = ({
  name,
  id
}) => {
  return (
    <div className={`track-component`}>
      <div className={`
        track-component-inner
      `}>
        <iframe src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {name != null ? <span className={`title`}>{name}</span> : ``}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Track;
