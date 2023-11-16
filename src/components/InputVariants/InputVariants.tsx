/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputVariants.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputVariantsProps {
  variant: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const InputVariants: React.FC<InputVariantsProps> = ({
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
const InputVariants = ({
  variant,
  children
}: InputVariantsProps) => (
  <div
    className={"form-item form-item-variants"}
  >
    {variant ? <div className={"variant"}>
      {variant}
    </div> : ``}
    
    {children ? <div className={"content"}>
      <div className={"content-inner"}>
        {children}
      </div>
    </div> : ``}

  </div>
);

/*
# Export
*/
export default InputVariants;
