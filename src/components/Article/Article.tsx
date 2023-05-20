/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import Tags from "../Tags"
import "./ArticleGrid.scss";
import "./ArticleSlide.scss";
import "./ArticleRow.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ArticleProps {
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
  fx: JSX.Element | JSX.Element[];
  scene: JSX.Element | JSX.Element[];
  getProductFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Article = ({
  position,
  title,
  height,
  body,
  slug,
  tags,
  display,
  subtitle,
  fx,
  scene,
  getProductFunc
}: ArticleProps) => (
  <article
    //onClick={getProductFunc}
    className={`
      ${display === `slide` ? `article-component-slide` : ``}
      ${display === `grid` ? `article-component-grid` : ``}
      ${display === `row` ? `article-component-row` : ``}
    `}
    style={{
      zIndex: position,
      position: `relative`,
      height: height != null ? height : `auto`
    }}
  >

    <div className={`fx`}>
      {fx}
    </div>

    <div className={`
      article-inner
    `}>

      <div className={`scene`}>
        {scene}
      </div>

      <div className={`content`}>
        {title != null ? <div className={`header`}>
          {title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
          {subtitle != null ? <h5 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
          {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
        </div> : ``}

        {display === `slide` && tags ? <Tags elements={tags} align={`left`} /> : ``}
        {display === `grid` && tags ? <Tags elements={tags} align={`center`} /> : ``}
        {display === `row` && tags ? <Tags elements={tags} align={`left`} /> : ``}

        <div className={`action`}>
          <Button
            icon={`arrow_forward`}
            mode={`default`}
          />
        </div>

      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Article;
