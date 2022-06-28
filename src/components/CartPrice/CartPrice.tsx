/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./CartPrice.scss";
import Button from "../Button"

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CartPriceProps {
  position: number | 0;
  price?: number | 0;
  delivery?: number | null;
  condition?: string | null;
  children?: JSX.Element | JSX.Element[];
}

/*
# Class Components
*/
const CartPrice = ({
  position,
  price,
  delivery,
  condition,
  children
}: CartPriceProps) => (
  <div
    className={`
      cartprice-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    <div className={`cartprice-component-inner`}>

      <div className={`cartprice-component-col col-price`}>
        {Number(price).toFixed(2)} <sup>CHF</sup>
      </div>

      <div className={`cartprice-component-col col-delivery`}>
        {Number(delivery).toFixed(2)} <sup>CHF</sup>
      </div>

      <div
        className={`cartprice-component-col col-condition`}
        dangerouslySetInnerHTML={{ __html: condition }}
      />

      {children && <div className={`cartprice-component-col col-action`}>
        {children}
      </div>}

    </div>
  </div>
);

/*
# Export
*/
export default CartPrice;
