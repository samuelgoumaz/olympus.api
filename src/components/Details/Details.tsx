/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Details.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface DetailsProps {
  position: number;
  title?: string | null;
  subtitle?: string | null;
  elements: JSON.Element | JSON.Element[];
  fx?: JSX.Element | JSX.Element[];
  aside?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Title: React.FC<TitleProps> = ({
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
const Details = ({
  position,
  title,
  subtitle,
  elements,
  fx,
  aside
}: DetailsProps) => (
  <div
    className={`
      details-component
      panel
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx && <div className={`fx`}>
      {fx}
    </div>}

    <div className={`details-component-inner`}>
      {elements && <div className={`details-component-content`}>
        {elements.map((item, index) => (
          <div key={`details-component-content-${index}`} className={`details-component-item`}>
            <h4 className={`title`} dangerouslySetInnerHTML={{ __html: item.key }} />
            <div className={`body`} dangerouslySetInnerHTML={{ __html: item.value }} />
          </div>
        ))}
      </div>}
      {aside && <div className={`details-component-aside`}>
        {aside}
      </div>}
    </div>
  </div>
);

/*
# Export
*/
export default Details;
