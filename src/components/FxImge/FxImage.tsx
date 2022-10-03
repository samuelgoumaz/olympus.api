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
  position: number;
  image?: string | null;
  images?: array | null;
  opacity?: string | null;
  cover?: boolean | false;
  display?: string | null;
  backgroundColor?: string | null;
  mixBlendMode?: string | null;
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
  image,
  images,
  opacity,
  cover,
  display, // relative || absolute
  backgroundColor,
  mixBlendMode,
}: FxImageProps) => (
  <div
    className={`
      fx-item
      fx-image
      ${display != null && display == `absolute` ? `absolute` : `relative`}
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      background: backgroundColor != null ? backgroundColor : `transparent`,
      opacity: opacity ?? 1,
      mixBlendMode: mixBlendMode ?? `normal`,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
    {image ? <img
      className={`fx-image-single`}
      src={image ?? null}
      style={{
        width: `100%`,
        height: `100%`,
        objectFit: cover == true ? `cover` : `contain`
      }}
    /> : ``}
  </div>
);

/*
# Export
*/
export default FxImage;
