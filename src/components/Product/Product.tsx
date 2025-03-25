/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Variant from "../Variant"
import Button from "../Button"
import Tags from "../Tags"
import FxBackground from "../FxBackground"
import "./ProductGrid.scss";
import "./ProductRow.scss";
import "./ProductCard.scss";
import "./ProductBanner.scss";
import "./ProductDetail.scss";
import "./ProductSlide.scss";
import "./ProductCheckout.scss";
import "./ProductPanel.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ProductProps {
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
  color?: string | false;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Product = ({
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
  onClick
}: ProductProps) => {
  switch (display) {
    case "grid":
      return (
        <div
          className={`product-component-grid ${debug === true ? `debug` : ``}`}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-component-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <div className={`content-inner`}>

                {title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {subtitle != null ? <h6 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle.toString() }} /> : ``}

                {tags && <div className={`tags`}>
                  {display === `grid` ? <Tags elements={tags} align={`center`} /> : ``}
                  {display === `row` || display === `detail` ? <Tags elements={tags} align={`left`} /> : ``}
                </div>}

                {body ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                
                {<div className={`action`}>
                  {variants ? variants : ``}
                  {onClick ? <Button
                    onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                  /> : ``}
                </div>}
              </div>}
            </div>

          </div>
        </div>
      )
      break;
    
    /* 
    # Row display */
    case "row":
      return (
        <div
          //onClick={onClick ? onClick : function () { return false }}
          className={`product-component-row ${debug === true ? `debug` : ``}`}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-component-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {body ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                {tags && <div className={`tags`}>
                  {display === `grid` ? <Tags elements={tags} align={`center`} /> : ``}
                  {display === `row` || display === `detail` ? <Tags elements={tags} align={`left`} /> : ``}
                </div>}
                {<div className={`action`}>
                  {variants ? variants : ``}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
                  /> : ``}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    case "panel":
      return (
        <div
          //onClick={onClick ? onClick : function () { return false }}
          className={`
            ${display === `panel` ? `product-component-panel` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {<div className={`content-inner`}>
                  {title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                  {subtitle != null ? <h6 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle.toString() }} /> : ``}
                  {display === `slide` && tags ? <div className="tags"><Tags elements={tags} align={`left`} /></div> : ``}
                  {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
                  /> : ``}
                </div>}
                {<div className={`action`}>
                  {variants && <div className="tags">{variants}</div>}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    case "slide":
      return (
        <div
          //onClick={onClick ? onClick : function () { return false }}
          className={`
            ${display === `grid` ? `product-component-grid` : ``}
            ${display === `row` ? `product-component-row` : ``}
            ${display === `card` ? `product-component-card` : ``}
            ${display === `banner` ? `product-component-banner` : ``}
            ${display === `detail` ? `product-component-detail` : ``}
            ${display === `slide` ? `product-component-slide` : ``}
            ${display === `checkout` ? `product-component-checkout` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {<div className={`content-inner`}>
                  {title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                  {subtitle != null ? <h6 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle.toString() }} /> : ``}
                  {display === `slide` && tags ? <div className="tags"><Tags elements={tags} align={`left`} /></div> : ``}
                  {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                  {<div className={`action`}>
                    {onClick ? <Button
                      icon={`arrow_forward`}
                      mode={`default`}
                      color={color && color !== false && color !== `false` ? color : `inherit`}
                      onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
                    /> : ``}
                  </div>}
                </div>}
                {variants && <div className={`variants`}>
                  {variants && <div className="variants-inner">{variants}</div>}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    case "card":
      return (
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
          className={`
            ${display === `grid` ? `product-component-grid` : ``}
            ${display === `row` ? `product-component-row` : ``}
            ${display === `card` ? `product-component-card` : ``}
            ${display === `banner` ? `product-component-banner` : ``}
            ${display === `detail` ? `product-component-detail` : ``}
            ${display === `slide` ? `product-component-slide` : ``}
            ${display === `checkout` ? `product-component-checkout` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {display === `detail` && title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `checkout` || display === `card` && title != null ? <h6 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `banner` || display === `slide` ? <div className={`content-inner`}>
                  {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} />}
                  {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                  {display === `slide` && tags ? <Tags elements={tags} align={`left`} /> : ``}
                </div> : ``}
                {display === `row` || display === `grid` && title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `banner` || display === `grid` || display === `detail` || display === `row` ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                {tags && <div className={`tags`}>
                  {display === `grid` ? <Tags elements={tags} align={`center`} /> : ``}
                  {display === `row` || display === `detail` ? <Tags elements={tags} align={`left`} /> : ``}
                </div>}
                {<div className={`action`}>
                  {variants ? variants : ``}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                  /> : ``}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    case "checkout":
      return (
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
          className={`
            ${display === `grid` ? `product-component-grid` : ``}
            ${display === `row` ? `product-component-row` : ``}
            ${display === `card` ? `product-component-card` : ``}
            ${display === `banner` ? `product-component-banner` : ``}
            ${display === `detail` ? `product-component-detail` : ``}
            ${display === `slide` ? `product-component-slide` : ``}
            ${display === `checkout` ? `product-component-checkout` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {display === `detail` && title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `checkout` || display === `card` && title != null ? <h6 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `banner` || display === `slide` ? <div className={`content-inner`}>
                  {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} />}
                  {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                  {display === `slide` && tags ? <Tags elements={tags} align={`left`} /> : ``}
                </div> : ``}
                {display === `row` || display === `grid` && title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `banner` || display === `grid` || display === `detail` || display === `row` ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                {tags && <div className={`tags`}>
                  {display === `grid` ? <Tags elements={tags} align={`center`} /> : ``}
                  {display === `row` || display === `detail` ? <Tags elements={tags} align={`left`} /> : ``}
                </div>}
                {<div className={`action`}>
                  {variants ? variants : <p>no variant</p>}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                  /> : ``}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    case "banner":
      return (
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick) onClick() }}
          className={`
            ${display === `grid` ? `product-component-grid` : ``}
            ${display === `row` ? `product-component-row` : ``}
            ${display === `card` ? `product-component-card` : ``}
            ${display === `banner` ? `product-component-banner` : ``}
            ${display === `detail` ? `product-component-detail` : ``}
            ${display === `slide` ? `product-component-slide` : ``}
            ${display === `checkout` ? `product-component-checkout` : ``}
          `}
          style={{
            zIndex: position,
            position: `relative`,
            height: height != null ? height : `auto`
          }}
        >

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`
            product-inner
          `}>

            {scene || image ? <div className={`scene`}>
              <div className={`scene-inner`}>
                {scene ? scene : image ? <FxBackground image={image} /> : ``}
              </div>
            </div> : ``}

            <div className={`content`}>
              {children ? children : <>
                {display === `detail` && title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `checkout` || display === `card` && title != null ? <h6 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `banner` || display === `slide` ? <div className={`content-inner`}>
                  {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} />}
                  {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                  {display === `slide` && tags ? <Tags elements={tags} align={`left`} /> : ``}
                </div> : ``}
                {display === `row` || display === `grid` && title != null ? <h3 className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}
                {display === `row` || display === `grid` && subtitle != null ? <h3 className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle.toString() }} /> : ``}
                {tags && <div className={`tags`}>
                  {display === `grid` ? <Tags elements={tags} align={`center`} /> : ``}
                  {display === `row` || display === `detail` ? <Tags elements={tags} align={`left`} /> : ``}
                </div>}
                {display === `banner` || display === `grid` || display === `detail` || display === `row` ? <div className="body" dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}
                {<div className={`action`}>
                  {variants ? variants : ``}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    mode={`default`}
                    color={color && color !== false && color !== `false` ? color : `inherit`}
                  /> : ``}
                </div>}
              </>}
            </div>

          </div>
        </div>
      )
      break;
    default:
      return (<h1>No display</h1>)
      break;
  }
}

/*
# Export
*/
export default Product;
