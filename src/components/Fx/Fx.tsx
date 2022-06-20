/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import FxBackground from "../FxBackground"
import "./Fx.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxProps {
  position: number;
  display: string | null;
  fx_background: {
    background: string | null;
    opacity: number | null;
    mixBlendMode: string | null;
  }
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Fx: React.FC<FxProps> = ({
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
const Fx = ({
  position,
  display,
  fx_background,
  children
}: FxProps) => (
  <div
    className={`
      fx-component
    `}
    style={{
      zIndex: position ?? 2
    }}
  >
    <div className={`fx-inner`}>
      {fx_background ? <FxBackground
        background={fx_background.background ? fx_background.background : `black`}
        opacity={fx_background.opacity ? fx_background.opacity : 1}
        mixBlendMode={fx_background.mixBlendMode ? fx_background.mixBlendMode : `normal`}
      /> : ``}
      {children}
    </div>
  </div>
);

/*
# Export
*/
export default Fx;
