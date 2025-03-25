/*
# Imports
*/
import React, { useRef, useEffect, useState, Children } from "react";
import "./InputTime.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputTimeProps {
  label?: string | null;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const InputTime: React.FC<InputTimeProps> = ({
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
const InputTime = ({
  label,
  name,
  required,
  placeholder,
  children,
  onChange,
  onLoad,
  onClick
}: InputTimeProps) => (
  <div
    className={"form-item form-item-time"}
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
export default InputTime;
