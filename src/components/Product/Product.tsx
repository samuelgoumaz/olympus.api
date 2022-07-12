/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Variant from "../Variant"
import "./ProductGrid.scss";
import "./ProductRow.scss";
import "./ProductCard.scss";
import "./ProductBanner.scss";
import "./ProductDetail.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ProductProps {
  position?: number | null;
  title?: string | null;
  height?: string | null;
  body?: string | null;
  slug?: string | null;
  tags?: {
    id: number;
    slug: string | null;
    name: string | null;
    parent: {
      id: number;
      slug: string | null;
      name: string | null;
    };
    children?: {
      id: number;
      slug: string | null;
      name: string | null;
    };
  };
  display?: string | null;
  fx?: JSX.Element | JSX.Element[];
  scene?: JSX.Element | JSX.Element[];
  variants?: JSX.Element | JSX.Element[];
  getProductFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Product = ({
  position,
  title,
  height,
  body,
  slug,
  tags,
  variants,
  display,
  fx,
  scene,
  getProductFunc
}: ProductProps) => (
  <article
    className={`
      ${display === `grid` ? `product-component-grid` : ``}
      ${display === `row` ? `product-component-row` : ``}
      ${display === `card` ? `product-component-card` : ``}
      ${display === `banner` ? `product-component-banner` : ``}
      ${display === `detail` ? `product-component-detail` : ``}
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
      product-inner
    `}>

      <div onClick={getProductFunc} className={`scene`}>
        {scene}
      </div>

      <div className={`content`}>
        {display === `row` || display === `detail` && title != null ? <h4 onClick={getProductFunc} className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}

        {display === `banner` && title != null ? <h5 onClick={getProductFunc} className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}

        {display === `grid` && title != null ? <h6 onClick={getProductFunc} className="title" dangerouslySetInnerHTML={{ __html: title.toString() }} /> : ``}

        {body != null ? <div className="body" onClick={getProductFunc} dangerouslySetInnerHTML={{ __html: body.toString() }} /> : ``}

        {variants && <div className={`action`}>
          {variants}
        </div>}

      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Product;
