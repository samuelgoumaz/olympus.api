/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Submenu.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface SubmenuProps {
  debug?: true | false;
  position: number;
  fx?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Submenu: React.FC<SubmenuProps> = ({
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
const Submenu = ({
  debug,
  position,
  fx,
  children
}: SubmenuProps) => {
  return <section
    className={`
      submenu-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    <div className={`submenu-inner`}>
      {children && children}
    </div>
    
  </section>
};

/*
# Export
*/
export default Submenu;
