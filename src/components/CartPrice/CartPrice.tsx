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
  subTotal?: number | null;
  price?: number | null;
  delivery?: number;
  discountAmount?: number;
  discountPercent?: number;
  currency?: string;
  promocode?: string | false;
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
  currency,
  subTotal,
  discountAmount,
  discountPercent,
  promocode,
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

      {subTotal && <div className={`cartprice-component-col col-subtotal`}>

        {/**
        # cartprice **/}
        <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`icon material-icons`}>receipt_long</span>
            <span className={`value`}>{Number(subTotal).toFixed(2)}</span>
          </div>
        </div>

      </div>}

      {promocode != false ? <div className={`cartprice-component-col col-promocode`}>

        {/**
        # cartprice **/}
        {promocode && <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`icon material-icons`}>grade</span>
            <h6 className={`label`}>{promocode}</h6>
          </div>
        </div>}

        {/**
        # cartprice **/}
        {discountAmount > 0 ? <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`icon material-icons`}>account_balance_wallet</span>
            <span className={`value`}>-{Number(discountAmount).toFixed(2)}</span>
          </div>
        </div> : ``}

        {/**
        # cartprice **/}
        {discountPercent > 0 ? <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`icon material-icons`}>percent</span>
            <span className={`value`}>-{discountPercent}%</span>
          </div>
        </div> : ``}

      </div> : ``}

      {delivery !== false ? <div className={`cartprice-component-col col-delivery`}>
        {/**
        # cartprice **/}
        <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`icon material-icons`}>local_shipping</span>
            <span className={`value`}>{delivery > 0 ? `${Number(delivery).toFixed(2)}` : `Free`}</span>
          </div>
        </div>
      </div>: ``}
      {price && <div className={`cartprice-component-col col-price`}>

        {/**
        # cartprice **/}
        <div className={`cartprice-element`}>
          <div className={`cartprice-element-inner`}>
            <span className={`price`}>{Number(price).toFixed(2)} {currency ? <sup>{currency}</sup> : ``}</span>
          </div>
        </div>

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
