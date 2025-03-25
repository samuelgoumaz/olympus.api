/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Tags from "../Tags"
import "./Trade.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TradeProps {
  debug?: true | false;
  position: number;
  color?: string;
  title?: string;
  subtitle?: string;
  display?: string | false;
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
  partners?: JSX.Element | false;
  buttons?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Trade: React.FC<TradeProps> = ({
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
const Trade = ({
  debug,
  display,
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
  partners,
  buttons,
  children
}: TradeProps) => {

  switch (display) {
    case `left`:
      break;
    case `right`:
      break;
    case `middle`:
      break;
    default:
      break;
  }

  return (<section
    className={`
      trade-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      width: "100%",
      display: "block",
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`} style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1
    }}>{fx}</div> : ``}

    <div className={`trade-inner`} style={{
      width: "100%",
      height: "100%",
      display: "block",
      position: "absolute",
      zIndex: 2
    }}>
      {children ? children : <div className={`trade-inner-content ${aside ? `hv-aside` : ``}`} style={{
        width: "100%",
        height: "100%",
        display: "table",
        verticalAlign: "top"
      }}>
        <div className={`trade-inner-col left`} style={{
          width: "65%",
          height: "100%",
          display: "table-cell",
          verticalAlign: "top"
        }}>
          {title && <h2 className={`title ${subtitle ? `hv_subtitle` : ``}`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${title}` }} />}
          {subtitle && <h3 className={`subtitle`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />}
          {tags && tags.length > 0 ? <div className={`tags`}><Tags elements={tags} align={`center`} /></div> : ``}
          {body && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
          {buttons && <div className={`action`}>{buttons}</div>}
          {condition && <div className={`condition`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${condition}` }} />}
          {partners && <div className="partners">
            {partners && partners}
          </div>}
        </div>
        <div className={`trade-inner-col right`} style={{
          width: "35%",
          height: "100%",
          display: "table-cell",
          verticalAlign: "top"
        }}>
          {scene && <div className={`scene`}>{scene}</div>}
          {variants && <div className={`variants`}>{variants}</div>}
          {aside && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${aside}` }} />}
        </div>
      </div>}
    </div>
    
  </section>)

};

/*
# Export
*/
export default Trade;
