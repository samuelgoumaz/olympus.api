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
  left_positive: string | null;
  left_negative: string | null;
  middle_positive: string | null;
  middle_negative: string | null;
  fx_aside: false | true;
  fx_negative: false | true;
  fx_top: false | true;
  fx_pinned: true | false;
  title: string;
  subtitle: string;
  children: JSX.Element | JSX.Element[];
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
}: SectionProps) => (
  <div
    className={`
      section-container
      ${fx_aside === true && `fx_aside`}
      ${fx_negative === true && `fx_negative`}
      ${fx_top === true && `fx_top`}
      ${fx_pinned === true && `fx_pinned`}

    `}
  >
    <div className={`section-inner`}>

      <div className={`section-inner-col col-left`}>
        {left_positive != null && left_negative != null && <img
          className={"branding"}
          width="auto"
          height="100%"
          //src={fx_negative == true ? left_negative : left_positive}
        />}
      </div>

      <div className={`section-inner-col col-middle`}>
        {
          middle_positive != null && middle_negative != null ?
            <img
              className={"branding"}
              width="auto"
              height="100%"
              //src={fx_negative == true ? middle_negative : middle_positive}
            />
          :
            <h1 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      }
      </div>

      <div className={`section-inner-col col-right`}>
        {children}
      </div>

    </div>
  </div>
);

/*
# Export
*/
export default Section;
