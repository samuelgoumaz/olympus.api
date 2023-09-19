/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Text.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TextProps {
  debug?: true | false;
  position: number;
  body?: string;
  aside?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Text: React.FC<TextProps> = ({
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
const Text = ({
  debug,
  position,
  body,
  aside,
  fx,
  scene,
  children,
  buttons
}: TextProps) => {
  return <section
    className={`
      text-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`text-inner`}>
      {children ? children : <div className={`text-inner-content ${aside ? `hv-aside` : ``}`}>
        {scene && <div className={`scene`}>{scene}</div>}
        {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
        {aside && <div className={`aside`} dangerouslySetInnerHTML={{ __html: `${aside}` }} />}
        {buttons && <div className="action">
          {buttons && buttons}
        </div>}
      </div>}
    </div>
    
  </section>
};

/*
# Export
*/
export default Text;
