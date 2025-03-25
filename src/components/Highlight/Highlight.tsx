/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Highlight.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface HighlightProps {
  cover?: string | null;
  title?: string | null;
  body?: string | null; // <= mp4 o
  video: JSX.Element | JSX.Element[];nly
  content: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Highlight: React.FC<HighlightProps> = ({
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
const Highlight = ({
  cover,
  video,
  title,
  body,
  content,
}: HighlightProps) => (
  <div
    className={`
      highlight-component
    `}
  >
    {<div className={`fx`}>

      {/*
      # display video */}
      {video ? video : ``}

      {/*
      # display image */}
      {cover && !video ? <img
        className={`cover`}
        src={cover}
      /> : ``}

    </div>}

    <div className={`highlight-component-inner`}>

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
export default Highlight;
