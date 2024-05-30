/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Feedback.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FeedbackProps {
  debug?: true | false;
  position: number;
  author: string | null;
  body: string | null;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Feedback: React.FC<FeedbackProps> = ({
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
const Feedback = ({
  debug,
  position,
  author,
  body,
  fx,
  scene,
  children
}: FeedbackProps) => (
  <section
    className={`
      feedback-component
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    
    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`feedback-inner`}>
      {children ? children : <div className={`feedback-inner-content`}>
        {scene && <div className={`scene`}>{scene}</div>}
        <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
        {author && <div className={`author`}>{author}</div>}
      </div>}
    </div>
  </section>
);

/*
# Export
*/
export default Feedback;
