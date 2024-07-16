/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
//import 'material-icons/iconfont/material-icons.css';
import "./Toggler.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TogglerProps {
  display: string | null;
  icon: string | null;
  id: string | false;
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
  id,
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
        ${fx_status === true ? `dsp-open` : `dsp-close`}
      `}
      id={id ? id : ``}
    >
      {/*
      Handler */}
      <div
        className={
          `toggler-handler
          ${fx_status === true ? `dsp-active` : ``}
          ${label != null ? `hv_label` : ``}
          ${display === `inline` ? `float` : ``}
          `
        }
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          if (onClick) { onClick(); } else {

          }
          if (event.currentTarget.parentElement?.classList.contains(`dsp-open`)) {
            event.currentTarget.parentElement?.classList.remove(`dsp-open`);
            event.currentTarget.parentElement?.classList.add(`dsp-close`);
            if (event.currentTarget.classList?.contains(`dsp-active`)) {
              event.currentTarget.classList.remove(`dsp-active`);
            }
          } else {
            event.currentTarget.parentElement?.classList.remove(`dsp-close`);
            event.currentTarget.parentElement?.classList.add(`dsp-open`);
            if (!event.currentTarget.classList?.contains(`dsp-active`)) {
              event.currentTarget.classList.add(`dsp-active`);
            }
          }
          
        }}
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
      {children ? <div className={`
        toggler-container
        ${display === `fullscreen` ? `fullscreen` : ``}
        ${display === `right` ? `right` : ``}
        ${display === `left` ? `left` : ``}
        ${display === `popup` ? `popup` : ``}
        ${display === `dropdown` ? `dropdown` : ``}
        ${display === `inline` ? `inline` : ``}
        ${display == null ? `default` : ``}
        ${fx_status === true ? `dsp-active` : ``}
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
