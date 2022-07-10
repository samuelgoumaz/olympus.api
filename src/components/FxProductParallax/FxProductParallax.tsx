/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxProductParallax.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProductParallax {
  position: number;
  image: string | null;
  rotation?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const FxProductParallax: React.FC<FxProductParallax> = ({
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
const FxProductParallax = ({
  position,
  image,
  rotation,
  children
}: FxProductParallax) => (
  <div
    className={`
      fx-item fx-product-parallax
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
    {image && <img src={image} />}
    <div className={`version`}>FxProductParallax — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxProductParallax;
