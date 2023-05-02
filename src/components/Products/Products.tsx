/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Products.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ProductsProps {
  position?: number;
  padding?: true | false;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Products: React.FC<ProductsProps> = ({
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
const Products = ({
  position,
  padding,
  children
}: ProductsProps) => (
  <section
    className={`
      products-component
      panel
      ${padding === true ? `hv-padding` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    <div className={`products-component-inner`}>
      {children}
    </div>

  </section>
);

/*
# Export
*/
export default Products;
