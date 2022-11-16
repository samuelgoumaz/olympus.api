/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./CartDiscount.scss";
import Button from "../Button"

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CartDiscountProps {
  position: number | 0;
  total?: number;
  promocode?: {
    code: string;
    discount: {
      amountValueOnTotal: number;
      percentValueOnTotal: number;
      deliveryValueOnTotal: boolean;
      date_expiration: date;
      counter_limit: number;
      counter: number;
      exclude: {
        delivery: boolean;
        promotionPrice: boolean;
      }
    }
  }
}

/*
# Class Components
*/
const CartDiscount = ({
  position,
  total,
  promocode
}: CartDiscountProps) => {
  return (
    <div
      className={`
        cartdiscount-component
      `}
      style={{
        position: `relative`,
        zIndex: position ?? 1
      }}
    >
      <div className={`cartdiscount-component-inner`}>

        <table
          className={`table`}
        >
          <th>
            <td>discount</td>
            <td>value</td>
            <td>subtotal</td>
          </th>
          <tr>
            <td>amount</td>
            <td dangerouslySetInnerHTML={{ __html: `${Number(promocode.discount.amountValueOnTotal).toFixed(2)}` }} />
            <td></td>
          </tr>
          <tr>
            <td>percent</td>
            <td dangerouslySetInnerHTML={{ __html: `${Number(promocode.discount.percentValueOnTotal)}%` }} />
            <td></td>
          </tr>
        </table>

        {/**
        # discount **/}
        <div className={`cartdiscount-component-line`}>
          <div className={`cartdiscount-component-line-inner`}>
            <div className={`label`}>discount</div>
            <div className={`value`} ></div>
          </div>
        </div>

        {/**
        # discount **/}
        <div className={`cartdiscount-component-line`}>
          <div className={`cartdiscount-component-line-inner`}>
            <div className={`label`}>percent</div>
            <div className={`value`} dangerouslySetInnerHTML={{ __html: `${promocode.discount.percentValueOnTotal}%` }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

/*
# Export
*/
export default CartDiscount;
