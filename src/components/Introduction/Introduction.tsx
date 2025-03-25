/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Introduction.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface IntroductionProps {
  debug?: true | false;
  position: number;
  body: string | null;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Introduction: React.FC<IntroductionProps> = ({
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
const Introduction = ({
  debug,
  position,
  body,
  fx,
  scene,
  children,
  buttons
}: IntroductionProps) => (
  <section
    className={`
      introduction-component
      ${debug === true ? `debug` : ``}
    `}
    style={{
      width: `100%`,
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`}
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        zIndex: 1
      }}
    >{fx}</div> : ``}
    <div className={`introduction-inner`} style={{
      width: "100%",
      position: "relative",
      display: "block"
    }}>
      {children ? children : <div className={`introduction-inner-content`} style={{
        position: `relative`,
        width: `100%`,
        margin: `0 auto`,
        padding: `1em 0`
      }}>
        {scene && <div className={`scene`} style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          zIndex: 2
        }}>{scene}</div>}
        <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
        {buttons && <div className="action">
            {buttons && buttons}
          </div>}
      </div>}
    </div>
  </section>
);

/*
# Export
*/
export default Introduction;
