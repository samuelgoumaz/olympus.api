/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import "./DropdownInput.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface DropdownProps {
  display: string | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Dropdown: React.FC<DropdownProps> = ({
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
const Dropdown = ({
  display,
  children
}: DropdownProps) => {

  function selectToggle (event) {
    if (event.classList.contains("dsp-open")) {
      event.classList.add("dsp-close");
      event.classList.remove("dsp-open");
    } else {
      event.classList.add("dsp-open");
      event.classList.remove("dsp-close");
    }
  }

  function initData (elements) {
    if (elements && elements.length > 0) {
      let html = elements[0].props.children ?? false;
      return html;
    } else {
      return false;
    }
  }

  function selectData (target, current) {
    let dsp = `${target}`;
    current.parentNode.getElementsByClassName("dropdown-current")[0].innerHTML = target.textContent;
  }

  return (
    <div
      className={`
        ${display == null || display == `input` ? ` dropdown-component-input` : ``}
        ${display == `ui` ? ` dropdown-component-ui` : ``}
        ${`dsp-close`}
      `}
      onClick={
        (event: React.MouseEvent<HTMLElement>) => {
          selectToggle(event.currentTarget)
        }
      }
    >
      <div
        className={`dropdown-handler`}
      >
        <div className={`dropdown-current`}>{initData(children)}</div>
        <div className={`dropdown-icon dsp-close material-icons`}>{`expand_less`}</div>
        <div className={`dropdown-icon dsp-open material-icons`}>{`expand_more`}</div>
      </div>

      <div
        className={`dropdown-content`}
        onClick={
          (event: React.MouseEvent<HTMLElement>) => {
            selectData(event.target, event.currentTarget)
          }
        }
      >
        {children}
      </div>

    </div>
  )
};

/*
# Export
*/
export default Dropdown;
