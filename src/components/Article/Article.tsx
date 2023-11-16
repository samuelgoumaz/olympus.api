/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import Tags from "../Tags"
import FxBackground from "../FxBackground"
import "./ArticleGrid.scss";
import "./ArticleSlide.scss";
import "./ArticleRow.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ArticleProps {
  debug?: true | false;
  position: number;
  slug: string | null;
  title?: string | null;
  subtitle?: string | null;
  image?: string | null;
  body?: string | null;
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
  height?: string | null;
  display: string | null;
  fx: JSX.Element | JSX.Element[];
  scene: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  variants: JSX.Element | JSX.Element[];
  buttons: JSX.Element | JSX.Element[];
  color?: string | false;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
}



/*
# Class Components
*/
const Article = ({
  debug,
  position,
  slug,
  title,
  subtitle,
  body,
  image,
  tags,
  height,
  display,
  fx,
  scene,
  children,
  variants,
  color,
  buttons,
  onClick
}: ArticleProps) => {
  switch (display) {
    case "slide":
      return (
        <div
          //onClick={onClick ? onClick : function () { return false }}
          className={`article-component-slide ${debug === true ? `debug` : ``}`}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {/* Fx render */ fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            article-component-inner
          `}>

            {/* Scene Render */ scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            {<div className={`content`}>
                {children ? children : <>
                  {title != null ? <div className={`header`}>
                  {title != null ? <h3 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
                  {subtitle != null ? <h5 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}

                  {tags ? <div className={`tags`}>
                    <Tags elements={tags} align={`left`} />
                  </div> : ``}
                  {body != null ? <div style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
                  {variants && <div className={`variants`}>{variants}</div>}

                </div> : ``}
                {onClick || buttons ? <div className={`action`}>
                  {buttons && buttons}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                    onClick={onClick ? onClick : function () { return false }}
                  /> : ``}
                </div> : ``}
              </>}
            </div>}

          </div>
        </div>
      )
      break;
    case "grid":
      return (
        <div
          //onClick={onClick ? onClick : function () { return false }}
          className={`
            ${display === `slide` ? `article-component-slide` : ``}
            ${display === `grid` ? `article-component-grid` : ``}
            ${display === `row` ? `article-component-row` : ``}
            ${debug === true ? `debug` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >
      
          {fx ? <div className={`fx`}>{fx}</div> : ``}
      
          <div className={`
            article-inner
          `}>
      
            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}
      
            {<div className={`content`}>
              {children ? children : <>

                {title != null ? <h3 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
                {subtitle != null ? <h5 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
                {tags ? <div className={`tags`}>
                  <Tags elements={tags} align={`center`} />
                </div> : ``}
                {body != null ? <div style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
                {variants && <div className={`variants`}>{variants}</div>}

                {onClick || buttons ? <div className={`action`}>
                  {buttons && buttons}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                    onClick={onClick ? onClick : function () { return false }}
                  /> : ``}
                </div> : ``}
              </>}
            </div>}
      
          </div>
        </div>
        )
      break;
    case "row": 
      return (
        <div
          onClick={onClick ? onClick : function () { return false }}
          className={`article-component-row ${debug === true ? `debug` : ``}`}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            article-component-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            {<div className={`content`}>
                {children ? children : <>
                  {title != null ? <div className={`header`}>
                  {title != null ? <h3 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
                  {subtitle != null ? <h5 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
                  {body != null ? <div style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
                  {tags ? <div className="tags"><Tags elements={tags} align={`left`} /></div> : ``}
                </div> : ``}
                {<div className={`action`}>
                  {variants}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                  /> : ``}
                </div>}
              </>}
            </div>}

          </div>
        </div>
      )
      break;
    default:
      break;
  }
}

/*
# Export
*/
export default Article;
