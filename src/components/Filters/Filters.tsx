/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import Toggler from "../Toggler"
import "./Filters.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FiltersProps {
  position?: number;
  left?: JSX.Element | JSX.Element[];
  middle?: JSX.Element | JSX.Element[];
  right?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Filters: React.FC<FiltersProps> = ({
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
const Filters = ({
  position,
  left,
  middle,
  right
}: FiltersProps) => {
  return (
    <div
      className={`filters-component`}
      style={{
        position: `relative`,
        zIndex: position ?? 1
      }}
    >
      <div className={`filters-component-inner`}>

        {left && <div className={`filters-component-col col-left`}>
          {left}
        </div>}

        {middle && <div className={`filters-component-col col-middle`}>
          {middle}
        </div>}

        {right && <div className={`filters-component-col col-right`}>
          {right}
        </div>}

      </div>
    </div>
  )
};

/*
# Export
*/
export default Filters;
