/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Show.scss";
import { Condition } from "postfinancecheckout/src/models/Condition";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ShowProps {
  debug?: true | false;
  position: number;
  color?: string;
  title?: string;
  date?: string;
  body?: string;
  condition?: string;
  aside?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  variants?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Show: React.FC<ShowProps> = ({
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
const Show = ({
  debug,
  position,
  title,
  color,
  date,
  body,
  condition,
  aside,
  fx,
  scene,
  variants,
  children
}: ShowProps) => {
  return <section
    className={`
      show-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`show-inner`}>
      {children ? children : <div className={`show-inner-content ${aside ? `hv-aside` : ``}`}>
        <div className={`show-inner-col left`}>
          {date && <div className={`date`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${date}` }} />}
          {title && <h2 className={`title`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${title}` }} />}
          {variants && <div className={`variants`}>{variants}</div>}
          {body && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
          {condition && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${condition}` }} />}
        </div>
        <div className={`show-inner-col right`}>
          {scene && <div className={`scene`}>{scene}</div>}
          {aside && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${aside}` }} />}
        </div>
      </div>}
    </div>
    
  </section>
};

/*
# Export
*/
export default Show;
