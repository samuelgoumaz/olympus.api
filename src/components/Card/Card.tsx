/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./CardGrid.scss";
import "./CardRow.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CardProps {
  position?: number | null;
  image?: string | false;
  title: string | null;
  subtitle: string | null;
  height?: string | null;
  body: string | null;
  slug: string | null;
  display: string | null;
  padding?: true | false;
  fx?: JSX.Element | JSX.Element[];
  scene?: JSX.Element | JSX.Element[];
  getProductFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Card = ({
  position,
  image,
  title,
  subtitle,
  height,
  body,
  slug,
  padding,
  display,
  fx,
  scene,
  getProductFunc
}: CardProps) => (
  <article
    onClick={getProductFunc}
    className={`
      ${display === `grid` ? `card-component-grid` : ``}
      ${display === `row` ? `card-component-row` : ``}
    `}
    style={{
      zIndex: position,
      position: `relative`,
      height: height
    }}
  >
    <div className={`fx`}>
      {fx}
    </div>

    <div className={`
      card-inner
      ${fx !== undefined ? `hv-fx` : ``}
    `}>

      {image || scene ? <div className={`
        scene
      `}>
        <div className={`
          scene-inner
          ${padding !== false ? `hv-padding` : ``}
        `}>
          {scene ? scene : ``}
          {image !== false ? <div className={`image`}>
            <img
              src={image}
            />
          </div> : ``}
        </div>
      </div> : ``}

      <div className={`content`}>
        {title !== null || subtitle !== null || body !== null ? <div className={`header`}>
          {title !== null ? <h5 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
          {subtitle !== null ? <h6 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
        </div> : ``}
        {body !== null ? <div className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
        <div className={`action`}>
          {/**<Button
            label={null}
            icon={`arrow_forward`}
            mode={`border`}
          />**/}
        </div>

      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Card;
