/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxProductHover.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProductHoverProps {
  position: number;
  display?: string | null;
  image: string | null;
  rotation?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const FxProductHover: React.FC<FxProductHoverProps> = ({
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
const FxProductHover = ({
  position,
  display,
  image,
  rotation,
  children
}: FxProductHoverProps) => (
  <div
    className={`
      fx-item fx-product-card
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
    {image && <img
      className={`
        fx-product-card-image
        ${display === `left` ? `fx-left` : ``}
        ${display === `right` ? `fx-right` : ``}
      `}
      src={image}
    />}
    <div className={`version`}>FxProductHover — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxProductHover;
