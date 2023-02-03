/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Action.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ActionProps {
  position?: number;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Action: React.FC<ActionProps> = ({
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
const Action = ({
  position,
  children
}: ActionProps) => (
  <div
    className={`
      action-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    <div className={`action-inner`}>
      {children}
    </div>
  </div>
);

/*
# Export
*/
export default Action;
