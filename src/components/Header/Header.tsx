/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Header.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface HeaderProps {
  fx_aside: false | true;
  fx_top: false | true;
  fx_pinned: true | false;
  position?: number | null;
  left?: JSX.Element | JSX.Element[];
  middle?: JSX.Element | JSX.Element[];
  right?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Header: React.FC<HeaderProps> = ({
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
const Header = ({
  fx_aside,
  fx_top,
  fx_pinned,
  position,
  left,
  middle,
  right
}: HeaderProps) => (
  <header
    className={`header-component
      ${fx_aside === true ? `fx_aside` : ``}
      ${fx_top === true ? `fx_top` : ``}
      ${fx_pinned === true ? `fx_pinned` : ``}
    `}
    style={{
      zIndex: position != null ? position : 1
    }}
  >
    {/**
      <div className={`header-notification`}>
        hello
      </div>
    **/}
    
    <div className={`header-inner`}>

      {left && <div className={`header-inner-col col-left`}>
        {left}
      </div>}

      {middle && <div className={`header-inner-col col-middle`}>
        {middle}
      </div>}

      {right && <div className={`header-inner-col col-right`}>
        {right}
      </div>}

    </div>
  </header>
);

/*
# Export
*/
export default Header;
