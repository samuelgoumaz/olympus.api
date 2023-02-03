/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Slide.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface SlideProps {
  cover?: string | null;
  video?: string | null; // <= mp4 only
  title?: string | null;
  body?: string | null; // <= mp4 only
  content: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Slide: React.FC<SlideProps> = ({
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
const Slide = ({
  cover,
  video,
  title,
  body,
  content,
}: SlideProps) => (
  <div
    className={`
      slide-component
    `}
  >
    {<div className={`fx`}>

      {/*
      # display video */}
      {video ? <video
        className={`video`}
        muted={true}
        autoPlay={true}
        loop={true}
        playsinline={true}
        controls={false}
        poster={cover}
      >
        <source src={video} type={`video/mp4`} />
      </video> : ``}

      {/*
      # display image */}
      {cover && !video ? <img
        className={`cover`}
        src={cover}
      /> : ``}

    </div>}

    <div className={`slide-component-inner`}>

      <div className={`content`}>
        {content ? content :
          <div className={`content-inner`}>
            {title && <h4 className={`title`} dangerouslySetInnerHTML={{ __html: `${title}` }} />}
            {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
          </div>
        }
      </div>

    </div>
  </div>
);

/*
# Export
*/
export default Slide;
