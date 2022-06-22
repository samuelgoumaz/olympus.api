/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./ArticleGrid.scss";
import "./ArticleRow.scss";
import "./ArticleCard.scss";
import "./ArticleBanner.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ArticleProps {
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
const Article = ({
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
}: ArticleProps) => (
  <article
    className={`
      ${display === `grid` ? `article-component-grid` : ``}
      ${display === `row` ? `article-component-row` : ``}
      ${display === `card` ? `article-component-card` : ``}
      ${display === `banner` ? `article-component-banner` : ``}
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
      article-inner
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
export default Article;
