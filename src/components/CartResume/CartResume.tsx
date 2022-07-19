/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./CartResume.scss";
import Button from "../Button"

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CartResumeProps {
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
const CartResume = ({
  children
}: CartResumeProps) => (

  <div
    className={`
      cartresume-component
    `}
  >
    {children && <div className={`cartresume-inner`}>
      {children}
    </div>}
  </div>
);

/*
# Export
*/
export default CartResume;
