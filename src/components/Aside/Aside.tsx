/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";
import "./Aside.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface AsideProps {
  fx_aside: false | true;
  fx_negative: false | true;
  fx_top: false | true;
  fx_pinned: true | false;
  position?: number | null;
  testing?: boolean | false;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Aside: React.FC<AsideProps> = ({
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
const Aside = ({
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  position,
  testing,
  children
}: AsideProps) => (
  <div
    className={`
      aside-component
      ${fx_aside === true ? `fx_aside` : ``}
      ${fx_negative === true ? `fx_negative` : ``}
      ${fx_top === true ? `fx_top` : ``}
      ${fx_pinned === true ? `fx_pinned` : ``}
      ${testing === true ? `testing` : ``}
    `}
    style={{
      zIndex: position != null ? position : 1
    }}
  >
    <div className={`aside-inner`}>
      {children ?? <Button
        icon={`texture`}
        mode={`header`}
      />}
    </div>
  </div>
);

/*
# Export
*/
export default Aside;
