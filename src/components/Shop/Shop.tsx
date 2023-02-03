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
  position,
  children
}: ShopProps) => (
  <div
    className={`
      shop-component
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
