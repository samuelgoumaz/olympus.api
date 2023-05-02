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
  children?: JSX.Element | JSX.Element[];
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
  children,
  elements,
}: TracksProps) => {
  return (
    <section
      className={`
        tracks-component
        panel
      `}
    >
      <div className={`
        tracks-component-inner
      `}>

        {elements != null ? Object.keys(elements).map((key) => (
          <Track
            id={elements[key].key}
            name={elements[key].name}
          />
        )) : ``}

        {children && children}

      </div>
    </section>
  );
};

/*
# Export
*/
export default Tracks;
