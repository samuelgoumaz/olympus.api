/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Film.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FilmProps {
  debug?: true | false;
  position: number;
  title?: string | false;
  subtitle?: string | false;
  fullscreen?: true | false;
  body?: string;
  fx?: JSX.Element | false;
  buttons?: JSX.Element | JSX.Element[];
  controls?: JSX.Element | false;
  header?: JSX.Element | false;
  children?: JSX.Element | false;
}

/*
# Class Components
*/
/*const Film: React.FC<FilmProps> = ({
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
const Film = ({
  debug,
  position,
  title,
  subtitle,
  video,
  header,
  controls,
  fullscreen,
  body,
  fx,
  children,
  buttons
}: FilmProps) => {
  return <section
    className={`
      film-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    <div className={`film-inner`}>
        {children && <div className={`video`}>{children}</div>}
        {header && <div className={`video-header`}>{header}</div>}
        {controls && <div className={`video-controls`}>{controls}</div>}
    </div>
  </section>
};

/*
# Export
*/
export default Film;
