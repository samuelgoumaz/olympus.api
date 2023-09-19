/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxImage.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxImageProps {
  position?: number;
  cover?: true | false;
  padding?: true | false;
  display?: string | null;
  type?: string | null;
  image?: string | null;
}



/*
# Class Components
*/
/*const FxImage: React.FC<FxImageProps> = ({
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
const FxImage = ({
  position,
  cover,
  padding,
  type,
  image,
}: FxImageProps) => (
  <div
    className={`
      fx-image
      ${padding === true ? `hv-padding` : ``}
    `}
    style={{
      width: `100%`,
      height: `100%`,
      display: `inline-block`,
      position: `relative`,
      textAlign: `center`,
      zIndex: position ?? 1
    }}
  >
    {image != null ? <img
      src={image}
      style={{
        width: `100%`,
        height: `100%`,
        display: `inline-block`,
        objectFit: cover === true ? `cover` : `contain`
      }}
    /> : ``}

  </div>
);

/*
# Export
*/
export default FxImage;
