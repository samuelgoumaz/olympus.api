/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Shop.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ShopProps {
  layout_margin: false | true;
  fx_aside: false | true;
  fx_negative: false | true;
  fx_top: false | true;
  fx_pinned: true | false;
  position?: number | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Shop: React.FC<ShopProps> = ({
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
const Shop = ({
  layout_margin,
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  position,
  children
}: ShopProps) => (
  <div
    className={`
      shop-component
      ${layout_margin === true ? `layout_margin` : ``}
      ${fx_aside === true ? `fx_aside` : ``}
      ${fx_negative === true ? `fx_negative` : ``}
      ${fx_top === true ? `fx_top` : ``}
      ${fx_pinned === true ? `fx_pinned` : ``}
    `}
    style={{
      zIndex: position != null ? position : 1
    }}
  >
    <div className={`shop-component-inner`}>
      {children ?? <h1>...</h1>}
    </div>
  </div>
);

/*
# Export
*/
export default Shop;
