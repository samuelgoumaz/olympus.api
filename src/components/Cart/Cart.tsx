/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Cart.scss";
import Button from "../Button"

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CartProps {
  mode?: string;
  title?: string;
  children: JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Cart = ({
  mode,
  title,
  children,
  onClick
}: CartProps) => (

  <div
    className={`
      cart-container
    `}
  >
    <div className={`cart-header`}>
      <span className={`cart-header-icon icon material-icons`}>
        {`local_mall`}
      </span>
      <h6 className={`cart-header-title`}>
        {`Cart`}
      </h6>
      <div className={`cart-header-action`}>
        <Button
          mode={`header`}
          icon={`close`}
          onClick={onClick}
        />
      </div>
    </div>
    <div className={`cart-inner`}>
      {children}
    </div>
  </div>
);

/*
# Export
*/
export default Cart;
