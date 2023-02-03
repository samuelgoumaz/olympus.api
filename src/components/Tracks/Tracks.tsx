/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Track from "../Track"
import "./Tracks.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TracksProps {
  elements?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Tracks: React.FC<TracksProps> = ({
  left_positive,
  left_negative,
  middle_positive,
  middle_negative,
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  title,
  subtitle,
  children
}) => (
*/
const Tracks = ({
  elements,
}: TracksProps) => {
  return (
    <div
      className={`
        tracks-component
      `}
    >
      <div className={`
        tracks-component-inner
      `}>

        {elements != null ? Object.keys(elements).map((key) => (
          <Track
            key={`http://open.spotify.com/embed/track/5kWbmJzK2LYNLhcs7DKR9e?utm_source=generator`}
            name={elements[key].name}
          />
        )) : ``}

      </div>
    </div>
  );
};

/*
# Export
*/
export default Tracks;
