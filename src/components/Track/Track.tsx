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
  key?: string;
}



/*
# Class Components
*/
const Track: React.FC<TrackProps> = ({
  name,
  key
}) => {
  return (
    <div className={`track-component`}>
      <div className={`
        track-component-inner
      `}>
        <iframe
          src={key}
          width="100%"
          height="80px"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        {name != null ? <span className={`title`}>{name}</span> : ``}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Track;
