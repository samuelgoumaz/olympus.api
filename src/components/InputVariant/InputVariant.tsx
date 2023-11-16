/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputVariant.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputVariantProps {
  position: number | false;
  title?: string | null;
  subtitle?: string | null;
  formular?: string | null;
  required?: string | null;
  variant: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}

/*
# Class Components */
/*const InputVariant: React.FC<InputVariantProps> = ({
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
const InputVariant = ({
  position,
  title,
  subtitle,
  formular,
  required,
  variant,
  children
}: InputVariantProps) => (
  <div
    className={"form-item form-item-variant"}
  >

    {/*
    # Marker */}
    <div className={`marker`}>
      <span className="material-icons">arrow_downward</span>
    </div>

    {/*
    # Content */}
    {children && <div className={`content`}>

      {title && title !== null ? <h6 className={"title"}>
        {position ? `${position}. ` : ``}{title}
      </h6> : ``}

      <div className={`formular`}>
        {children}
      </div>

    </div>}
    
  </div>
);

/*
# Export
*/
export default InputVariant;
