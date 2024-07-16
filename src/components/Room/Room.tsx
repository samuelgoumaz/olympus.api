/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Room.scss";
import Tags from "../Tags"
import { Condition } from "postfinancecheckout/src/models/Condition";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface RoomProps {
  debug?: true | false;
  position: number;
  color?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  body?: string;
  condition?: string;
  aside?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  tags: {
    id: number;
    slug: string | null;
    name: string | null;
    parent: {
      id: number;
      slug: string | null;
      name: string | null;
    };
    children: {
      id: number;
      slug: string | null;
      name: string | null;
    };
  };
  variants?: JSX.Element | false;
  buttons?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Room: React.FC<RoomProps> = ({
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
const Room = ({
  debug,
  position,
  title,
  subtitle,
  color,
  date,
  body,
  condition,
  aside,
  fx,
  scene,
  tags,
  variants,
  buttons,
  children
}: RoomProps) => {
  return <section
    className={`
      room-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`room-inner`}>
      {children ? children : <div className={`room-inner-content ${aside ? `hv-aside` : ``}`}>
        <div className={`room-inner-col left`}>
          {title && <h2 className={`title`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${title}` }} />}
          {subtitle && <h3 className={`subtitle`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />}
          {variants && <div className={`variants`}>{variants}</div>}
          {body && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
          {condition && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${condition}` }} />}
        </div>
        <div className={`room-inner-col right`}>
          {scene && <div className={`scene`}>{scene}</div>}
          {tags && <div className={`tags`}><Tags elements={tags} align={`center`} /></div>}
          {buttons && <div className={`action`}>{buttons}</div>}
          {aside && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${aside}` }} />}
        </div>
      </div>}
    </div>
    
  </section>
};

/*
# Export
*/
export default Room;
