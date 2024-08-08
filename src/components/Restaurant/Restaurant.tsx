/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Restaurant.scss";
import Tags from "../Tags"
import { Condition } from "postfinancecheckout/src/models/Condition";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface RestaurantProps {
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
  partners?: JSX.Element | false;
  buttons?: JSX.Element | false;
  children?: JSX.Element | false;
  booking?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Restaurant: React.FC<RestaurantProps> = ({
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
const Restaurant = ({
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
  partners,
  buttons,
  children,
  booking
}: RestaurantProps) => {
  return <section
    className={`
      restaurant-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`restaurant-inner`}>
      {children ? children : <div className={`restaurant-inner-content ${aside ? `hv-aside` : ``}`}>
        <div className={`restaurant-inner-col left`}>
          {title && <h2 className={`title ${subtitle ? `hv_subtitle` : ``}`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${title}` }} />}
          {subtitle && <h3 className={`subtitle`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />}
          {variants && <div className={`variants`}>{variants}</div>}
          {body && <div className={`body`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
          {condition && <div className={`condition`} style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: `${condition}` }} />}
          {partners && <div className="partners">
            {partners && partners}
          </div>}
        </div>
        <div className={`restaurant-inner-col right`}>
          {booking && <div className={`booking`}>{booking}</div>}
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
export default Restaurant;
