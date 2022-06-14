/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Main.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface MainProps {
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
/*const Main: React.FC<MainProps> = ({
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
const Main = ({
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
}: MainProps) => (
  <div
    className={`
      main-container
      ${fx_aside === true && `fx_aside`}
      ${fx_negative === true && `fx_negative`}
      ${fx_top === true && `fx_top`}
      ${fx_pinned === true && `fx_pinned`}

    `}
  >
    <div className={`main-inner`}>

      <div className={`main-inner-col col-left`}>
        {left_positive != null && left_negative != null && <img
          className={"branding"}
          width="auto"
          height="100%"
          src={fx_negative == true ? left_negative : left_positive}
        />}
      </div>

      <div className={`main-inner-col col-middle`}>
        {
          middle_positive != null && middle_negative != null ?
            <img
              className={"branding"}
              width="auto"
              height="100%"
              src={fx_negative == true ? middle_negative : middle_positive}
            />
          :
            <h1 className="main-title" dangerouslySetInnerHTML={{ __html: title }} />
      }
      </div>

      <div className={`main-inner-col col-right`}>
        {children}
      </div>

    </div>
  </div>
);

/*
# Export
*/
export default Main;
