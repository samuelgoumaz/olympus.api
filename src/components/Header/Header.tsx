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
  debug?: true | false;
  hv_menu: true | false;
  hv_home: true | false;
  position?: number | null;
  aside?: JSX.Element | JSX.Element[];
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
  debug,
  hv_menu,
  hv_home,
  position,
  aside,
  left,
  middle,
  right
}: HeaderProps) => (
  <header
    className={`header-component
      ${debug === true ? `debug` : ``}
      ${hv_menu === true ? `hv_menu` : ``}
      ${hv_home === true ? `hv_home` : ``}
    `}
    style={{
      width: "100%",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: position != null ? position : 1
    }}
  >
    {/**
      <div className={`header-notification`}>
        hello
      </div>
    **/}

    {aside ? <div className={`header-aside`}>
      <div className={`header-aside-inner`}>
        {aside && aside}
      </div>
    </div> : ``}

    <div className={`header-inner`} style={{
      width: "100%",
      minHeight: "50px",
      display: "flex",
      position: "relative",
      margin: "0 auto"
    }}>

      {left ? <div className={`header-inner-col col-left`} style={{
        width: "100%",
        height: "100%",
        display: "inline-flex",
        verticalAlign: "middle",
        float: "none",
        position: "relative"
      }}>
        <div className={`header-inner-col-content`} style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "inline",
          verticalAlign: "middle",
          textAlign: "left"
        }}>
          {left && left}
        </div>
      </div> : ``}

      {middle ? <div className={`header-inner-col col-middle`} style={{
        width: "100%",
        height: "100%",
        display: "inline-flex",
        verticalAlign: "middle",
        float: "none",
        position: "relative"
      }}>
        <div className={`header-inner-col-content`} style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "inline",
          verticalAlign: "middle",
          textAlign: "center"
        }}>
          {middle && middle}
        </div>
      </div> : ``}

      {right ? <div className={`header-inner-col col-right`} style={{
        width: "100%",
        height: "100%",
        display: "inline-flex",
        verticalAlign: "middle",
        float: "none",
        position: "relative"
      }}>
        <div className={`header-inner-col-content`} style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "inline",
          verticalAlign: "middle",
          textAlign: "right"
        }}>
          {right && right}
        </div>
      </div> : ``}

    </div>
  </header>
);

/*
# Export
*/
export default Header;
