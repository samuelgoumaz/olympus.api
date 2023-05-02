/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import "./Tab.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TabProps {
  direction?: string;
  display: string | null;
  width?: string;
  title?: string;
  body?: string;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components */
const Tab = ({
  title,
  body,
  width,
  display,
  direction,
  children
}: TabProps) => {

  /*
  # selectToggle(event) */
  function selectToggle (event) {
    if (event.classList.contains("dsp-open")) {
      event.classList.add("dsp-close");
      event.classList.remove("dsp-open");
    } else {
      event.classList.add("dsp-open");
      event.classList.remove("dsp-close");
    }
  }

  return (
    <section
      className={`
        tab-component
        panel
        ${`dsp-close`}
        ${direction == `up` ? `up` : `down`}
      `}
      style={{
        width: width ? width : `100%`
      }}
      onClick={
        (event: React.MouseEvent<HTMLElement>) => {
          selectToggle(event.currentTarget)
        }
      }
    >
      <div
        className={`tab-handler`}
        style={{
          width: width ? `100%` : `100%`
        }}
      >
        <div className={`tab-current`}>
          {title != null ? <h5 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
        </div>
        <div className={`tab-icon dsp-close material-icons`}>{`expand_less`}</div>
        <div className={`tab-icon dsp-open material-icons`}>{`expand_more`}</div>
      </div>

      <div
        className={`
          tab-content
        `}
        onClick={
          (event: React.MouseEvent<HTMLElement>) => {
          }
        }
      >
        {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
      </div>

    </section>
  )
};

/*
# Export
*/
export default Tab;
