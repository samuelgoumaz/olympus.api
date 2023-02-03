/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Error.scss";
import "./ErrorCover.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ErrorProps {
  position: number;
  icon?: string | null;
  error?: number | null;
  state: number | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
const Error: React.FC<ErrorProps> = ({
  position,
  icon,
  error,
  state, // <= cover, inline
  children
}) => {

  function iconSwitcher (name) {
    switch (name) {
      case "loading":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "rotate(45deg)",
              margin: "auto",
              background: "transparent",
              display: "block",
              shapeRendering: "auto",
            }}
            width="50"
            height="50"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <rect x="19" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
            </rect><rect x="40" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
            </rect><rect x="61" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
            </rect><rect x="19" y="40" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
            </rect><rect x="61" y="40" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
            </rect><rect x="19" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
            </rect><rect x="40" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
            </rect><rect x="61" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
            </rect>
          </svg>
        )
        break;

      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "auto",
              background: "transparent",
              display: "block",
              shapeRendering: "auto"
            }}
            width="50"
            height="50"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="50" cy="23" r="13" fill="#000000">
              <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
            </circle>
          </svg>
        )
        break;
    }
  }

  return (
    <div
      className={`
        ${state === null ? 'error-component' : ''}
        ${state === 'inline' ? 'error-component-inline' : ''}
        ${state === 'cover' ? 'error-component-cover' : ''}
      `}
      style={{
        position: `relative`,
        zIndex: position ?? 2
      }}
    >
      <div className={`error-component-inner`}>
        <div className={`error-component-content`}>

          <div className={`error-scene`}>

            <div className={`icon`}>
              {iconSwitcher(icon)}
            </div>

            {error && <div className={`name`}>
              {error ?? 404}
            </div>}

          </div>


          <div className={`error-content`}>
            {children ?? <p>No results could be found</p>}
          </div>

          {/** title != null ? <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : `` **/}
          {/** subtitle != null ? <h3 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : `` **/}
        </div>
      </div>
    </div>

  )
}

/*
# Export
*/
export default Error;
