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
  blur?: false | true;
  negative?: false | true;
  marginTop?: true | false;
  position?: number | null;
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
  blur,
  negative,
  marginTop,
  position,
  children
}: MainProps) => (
  <main
    className={`
      main-container
      ${blur === true ? `hv_blur` : ``}
      ${negative === true ? `hv_negative` : ``}
      ${marginTop === true ? `hv_top` : ``}
    `}
    style={{
      zIndex: position != null ? position : 1
    }}
  >
    <div className={`main-inner`}>
      {children ?? <h1>...</h1>}
    </div>
  </main>
);

/*
# Export
*/
export default Main;
