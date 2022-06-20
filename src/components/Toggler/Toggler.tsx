/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import "./Toggler.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TogglerProps {
  display: string | null;
  icon: string | null;
  close: string | null;
  label: string | null;
  fx_status: false | true;
  fx_children: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const Toggler: React.FC<TogglerProps> = ({
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
const Toggler = ({
  display,
  icon,
  close,
  label,
  fx_status,
  fx_children,
  children,
  onClick
}: TogglerProps) => {
  return (
    <div
      className={`
        toggler-component
      `}
    >
      {/*
      Handler */}
      <div
        className={
          `toggler-handler
            ${fx_status === true ? `dsp-active` : ``}
            ${label != null ? `hv_label`
            : ``
          }`
        }
        onClick={onClick}
      >

        <div className={`icon`}>
          <span className={`material-icons`}>
            {!fx_status ? icon : close ?? `close`}
          </span>
        </div>

        {label != null ? <div className={`label`}>
          {!fx_status ? label : close ?? `close`}
        </div> : ``}

      </div>

      {/*
      Content */}
      {fx_status === true && children ? <div className={`
        toggler-container
        ${display === `fullscreen` ? `fullscreen` : ``}
        ${display === `aside` ? `aside` : ``}
        ${display === `popup` ? `popup` : ``}
        ${display == null ? `default` : ``}
      `}>

        {fx_children ? <div className={`toggler-fx`}>
          {fx_children}
        </div> : ``}

        {children ? <div className={`
          toggler-content
        `}>
          <div className={`toggler-content-inner`}>
            {children}
          </div>
        </div> : ``}

      </div> : ``}

    </div>
  )
}

/*
# Export
*/
export default Toggler;
