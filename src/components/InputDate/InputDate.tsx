/*
# Imports
*/
import React, { useRef, useEffect, useState, Children } from "react";
import "./InputDate.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputDateProps {
  label?: string | null;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const InputDate: React.FC<InputDateProps> = ({
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
const InputDate = ({
  label,
  name,
  required,
  placeholder,
  children
}: InputDateProps) => (
  <div
    className={"form-item form-item-date"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    {children && children}
  </div>
);

/*
# Export
<input
  className={"form-item-input form-item-input-date"}
  type="date"
  name={String(name) ?? `errorName`}
  required={required == true ? `required` : ``}
  placeholder={
    `${placeholder ?? ``}${required == true ? `*` : ``}`
  }
  onLoad={onLoad}
  onClick={onClick}
  onChange={onChange}
/>
*/
export default InputDate;
