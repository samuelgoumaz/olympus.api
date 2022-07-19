/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxProductCard.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProductCardProps {
  position: number;
  display?: string | null;
  image: string | null;
  rotation?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const FxProductCard: React.FC<FxProductCardProps> = ({
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
const FxProductCard = ({
  position,
  display,
  image,
  rotation,
  children
}: FxProductCardProps) => (
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
  </div>
);

/*
# Export
*/
export default FxProductCard;
