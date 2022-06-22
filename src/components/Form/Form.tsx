/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FormGrid.scss";
import "./FormRow.scss";
import "./FormCard.scss";
import "./FormBanner.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FormProps {
  position?: number | null;
  title: string | null;
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
  fx: JSX.Element | JSX.Element[];
  scene: JSX.Element | JSX.Element[];
  variants: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
const Form = ({
  position,
  title,
  height,
  body,
  slug,
  tags,
  variants,
  display,
  fx,
  scene
}: FormProps) => (
  <article
    className={`
      ${display === `grid` ? `form-component-grid` : ``}
      ${display === `row` ? `form-component-row` : ``}
      ${display === `card` ? `form-component-card` : ``}
      ${display === `banner` ? `form-component-banner` : ``}
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
      form-inner
    `}>

      <div className={`scene`}>
        {scene}
      </div>

      <div className={`content`}>
        {title != null ? <h5 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
        {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}

        <div className={`action`}>
          {variants}
        </div>

      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Form;
