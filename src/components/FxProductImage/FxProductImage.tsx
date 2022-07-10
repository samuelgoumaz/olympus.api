/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxProductImage.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProductImageProps {
  position: number;
  cover?: boolean | false;
  image?: string | null;
  align?: string | false;
  rotation?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const FxProductImage: React.FC<FxProductImageProps> = ({
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
const FxProductImage = ({
  position,
  image,
  cover,
  align,
  rotation,
  children
}: FxProductImageProps) => (
  <div
    className={`
      fx-item fx-product-image
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
    {image && <img src={image} style={{
      objectFit: cover ? `cover` : `contain`,
      transformOrigin: align ? align === `right` ? `right` : align === `left` ? `left` : `center` : `center`,
      float: align ? align === `right` ? `right` : align === `left` ? `left` : `none` : `none`
    }} />}
    <div className={`version`}>FxProductImage — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxProductImage;
