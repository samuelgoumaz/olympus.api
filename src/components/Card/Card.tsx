/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./CardGrid.scss";
import "./CardRow.scss";
import "./CardBanner.scss";
import "./CardSection.scss";
import "./CardLine.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CardProps {
  position?: number | null;
  title: string | null;
  subtitle: string | null;
  height?: string | null;
  body: string | null;
  slug: string | null;
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
  display: string | null;
  padding?: true | false;
  fx: JSX.Element | JSX.Element[];
  scene: JSX.Element | JSX.Element[];
  getProductFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Card = ({
  position,
  title,
  height,
  body,
  slug,
  tags,
  padding,
  display,
  subtitle,
  fx,
  scene,
  getProductFunc
}: CardProps) => (
  <article
    onClick={getProductFunc}
    className={`
      ${display === `grid` ? `card-component-grid` : ``}
      ${display === `row` ? `card-component-row` : ``}
      ${display === `banner` ? `card-component-banner` : ``}
      ${display === `section` ? `card-component-section` : ``}
      ${display === `line` ? `card-component-line` : ``}
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
    `}>

      <div className={`
        scene
      `}>
        <div className={`
          scene-inner
          ${padding != false ? `hv-padding` : ``}
        `}>
          {scene}
        </div>
      </div>

      <div className={`content`}>
        {title != null ? <div className={`header`}>
          {title != null ? <h5 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
          {subtitle != null ? <h5 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
          {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
        </div> : ``}
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
