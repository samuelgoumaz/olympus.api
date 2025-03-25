/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
//import 'material-icons/iconfont/material-icons.css';
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
  icon?: string | false,
  label?: string | false,
  current?: true | false,
  width?: string;
  selected?: true | false;
  children: JSX.Element | JSX.Element[];
  onHandler?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
}



/*
# Class Components */
const Dropdown = ({
  direction,
  display,
  icon,
  label,
  current,
  width,
  selected,
  children,
  onHandler
}: DropdownProps) => {

  /*
  # selectToggle(event) */
  function selectToggle (event) {
    console.log("selectToggle >>>> ", event.classList.contains("dsp-close"))
    if (event.classList.contains("dsp-close")) {
      event.classList.remove("dsp-close");
      event.classList.add("dsp-open");
    } else {
      event.classList.add("dsp-close");
      event.classList.remove("dsp-open");
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


  function countData (elements) {
    if (elements && elements.length > 0) {
      if (elements[0].type == 'ul') {
        return elements[0].props?.children?.length ?? 0
      } else {
        return elements[0].length ?? 0
      }
    } else {
      return 0
    }
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
          if (onHandler) {
            let myHandler = onHandler(event.currentTarget);
            if (myHandler === true) {
              selectToggle(event.currentTarget);
            }
          } else {
            selectToggle(event.currentTarget);
          };
        }
      }
    >
      <div
        className={`dropdown-handler`}
        style={{
          width: width ? `100%` : `auto`
        }}
      >
        {children && current !== false && !label || !icon ? <div className={`
          dropdown-current
          ${!icon && countData(children) < 2 ? `hv_no_icon` : ``}
        `}>
          {initData(children)}
        </div> : ``}

        {label ? <span className={`label`}>{label}</span> : ``}
        {icon ? <span className={`icon material-icons`}>{icon}</span> : ``}

        {!icon && countData(children) > 1 ? <div className={`dropdown-icon dsp-close material-icons`}>{`expand_less`}</div> : ``}
        {!icon && countData(children) > 1 ? <div className={`dropdown-icon dsp-open material-icons`}>{`expand_more`}</div> : ``}
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
        {countData(children) > 1 ? children : ``}
      </div>

    </div>
  )
};

/*
# Export
*/
export default Dropdown;
