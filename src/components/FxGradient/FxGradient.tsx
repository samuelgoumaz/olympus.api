/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxGradient.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxGradientProps {
  position: number;
  colors?: string;
  opacity?: string | null;
  mixBlendMode?: string | null;
}



/*
# Class Components
*/
/*const FxGradient: React.FC<FxGradientProps> = ({
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
const FxGradient = ({
  position,
  colors,
  opacity,
  mixBlendMode,
}: FxGradientProps) => (
  <div
    className={`
      fx-item fx-gradient
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      opacity: opacity ?? 1,
      mixBlendMode: mixBlendMode ?? `normal`,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
    <div className={`version`}>FxGradient</div>
    {colors != null ? <div className={`gradient-bottom`} style={{
      background: `radial-gradient(${String(colors)})`,
      backgroundPosition: `center top`
    }} /> : ``}
  </div>
);

/*
# Export
*/
export default FxGradient;
