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
  price?: number | null;
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

      {price && <div className={`cartprice-component-col col-price`}>
        <span>{price}</span> <sup>CHF</sup>
      </div>
}
      {delivery && <div className={`cartprice-component-col col-delivery`}>
        <span>{delivery}</span> <sup>CHF</sup>
      </div>}

      {condition && <div
        className={`cartprice-component-col col-condition`}
        dangerouslySetInnerHTML={{ __html: condition }}
      />}

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
