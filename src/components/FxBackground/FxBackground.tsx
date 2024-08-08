/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxBackground.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxBackgroundProps {
  position: number;
  cover?: true | false;
  align?: string | false;
  hover?: true | false;
  image: string | false;
  background?: string | false;
  opacity?: string | false;
  mixBlendMode?: string | false;
}



/*
# Class Components
*/
/*const FxBackground: React.FC<FxBackgroundProps> = ({
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
const FxBackground = ({
  position,
  cover,
  image,
  hover,
  background,
  opacity,
  mixBlendMode,
  align
}: FxBackgroundProps) => (
  <div
    className={`
      fx-item fx-background ${cover ? `cover` : `contain`} ${hover === true ? `hv_hover` : ``}
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      backgroundColor: background ? background : `transparent`,
      backgroundImage: image ? `url("${String(image)}")` : ``,
      backgroundSize: cover ? `cover` : `contain`,
      backgroundPosition: align ? align : `center`,
      backgroundRepeat: `no-repeat`,
      opacity: opacity ? opacity : 1,
      mixBlendMode: mixBlendMode ? mixBlendMode : `normal`,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
  </div>
);

/*
# Export
*/
export default FxBackground;
