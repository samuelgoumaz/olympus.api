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
  background: string | null;
  opacity: string | null;
  mixBlendMode: string | null;
  children: JSX.Element | JSX.Element[];
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
  background,
  opacity,
  mixBlendMode,
  children
}: FxBackgroundProps) => (
  <div
    className={`
      fx-item fx-background
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      background: background ?? `black`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      opacity: opacity ?? 1,
      mixBlendMode: mixBlendMode ?? `normal`,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
    <div className={`version`}>FxBackground — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxBackground;
