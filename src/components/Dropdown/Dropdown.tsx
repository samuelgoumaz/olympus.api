/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import "./DropdownInput.scss";
import "./DropdownUi.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface DropdownProps {
  direction?: string;
  display: string | null;
  width?: string;
  selected?: true | false;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components */
const Dropdown = ({
  direction,
  display,
  width,
  selected,
  children
}: DropdownProps) => {

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

  /*
  # initData(elements) */
  function initData (elements) {
    let html = null;
    if (elements && elements.length > 0) {
      if (elements[0].type == 'ul') {
        html = elements[0].props.children[0].props.children;
      } else {
        html = elements[0].props.children;
      }
    } else {
      html = false;
    }

    return html;

  }

  /*
  # selectData(target,current) */
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
        ${direction == `up` ? `up` : `down`}
      `}
      style={{
        width: width ? width : `auto`
      }}
      onClick={
        (event: React.MouseEvent<HTMLElement>) => {
          selectToggle(event.currentTarget)
        }
      }
    >
      <div
        className={`dropdown-handler`}
        style={{
          width: width ? `100%` : `auto`
        }}
      >
        <div className={`dropdown-current`}>{initData(children)}</div>
        <div className={`dropdown-icon dsp-close material-icons`}>{`expand_less`}</div>
        <div className={`dropdown-icon dsp-open material-icons`}>{`expand_more`}</div>
      </div>

      <div
        className={`
          dropdown-content
        `}
        onClick={
          (event: React.MouseEvent<HTMLElement>) => {
            if (selected === true) {
              selectData(event.target, event.currentTarget)
            }
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
