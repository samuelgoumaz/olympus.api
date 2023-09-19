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
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    
    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`introduction-inner`}>
      {children ? children : <div className={`introduction-inner-content`}>
        {scene && <div className={`scene`}>{scene}</div>}
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
