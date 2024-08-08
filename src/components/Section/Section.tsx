/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Section.scss";
import FxBackground from "../FxBackground";
import FxVideo from "../FxVideo";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface SectionProps {
  debug?: true | false;
  position: number;
  title?: string;
  subtitle?: string;
  body?: string;
  display?: string;
  image?: string | false;
  video?: JSX.Element | false;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | JSX.Element[];
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
  debug,
  position,
  title,
  subtitle,
  body,
  display,
  image,
  video,
  fx,
  scene,
  children,
  buttons
}: SectionProps) => (
  <section
    className={`
      section-component
      ${display == `left` || display == null ? `alignLeft` : ``}
      ${display == `middle` ? `alignMiddle` : ``}
      ${display == `right` ? `alignRight` : ``}
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position != false ? position : 2
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    
    <div className={`section-inner`}>

      {/*
      # Col scene */}
      <div className={`section-inner-col col-scene`}>
        {scene || image || video ? <div className={`scene`}>
          {!scene ? image ? <FxBackground position={2} cover={video ? false : true} image={image ?? false} hover={video ? true : false} /> : `` : ``}
          {scene ? scene : video ? video : ``}
        </div> : ``}
      </div>

      {/*
      # Col content */}
      <div className={`section-inner-col col-content`}>
        {children ? children : <div className={`col-content-inner`}>
          <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
          {buttons && <div className="action">
            {buttons && buttons}
          </div>}
        </div>}
      </div>

    </div>
  </section>
);

/*
# Export
*/
export default Section;
