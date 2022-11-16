/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Section.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface SectionProps {
  title: string;
  subtitle: string;
  position?: number | false;
  body: string;
  display: string;
  scene: JSX.Element | JSX.Element[];
  fx: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Section: React.FC<SectionProps> = ({
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
const Section = ({
  title,
  subtitle,
  position,
  body,
  display,
  scene,
  fx
}: SectionProps) => (
  <div
    className={`
      section-component
      ${display == `left` || display == null ? `alignLeft` : ``}
      ${display == `middle` ? `alignMiddle` : ``}
      ${display == `right` ? `alignRight` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position != false ? position : 1
    }}
  >
    {fx && <div className={`fx`}>
      {fx}
    </div>}

    <div className={`section-inner`}>

      {/*
      # Col scene */}
      <div className={`section-inner-col col-scene`}>
        {scene && <div className={`scene`}>
          {scene}
        </div>}
      </div>

      {/*
      # Col content */}
      <div className={`section-inner-col col-content`}>
        <div className={`content`}>
          <h4 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>

    </div>
  </div>
);

/*
# Export
*/
export default Section;
