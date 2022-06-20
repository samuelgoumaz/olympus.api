/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxProductDefault.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProductDefaultProps {
  position: number;
  image: string | null;
  rotation?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const FxProductDefault: React.FC<FxProductDefaultProps> = ({
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
const FxProductDefault = ({
  position,
  image,
  rotation,
  children
}: FxProductDefaultProps) => (
  <div
    className={`
      fx-item fx-product-default
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
    <img src={image} />
    <div className={`version`}>FxProductDefault — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxProductDefault;
