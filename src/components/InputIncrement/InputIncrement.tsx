/*
# Imports
*/
import React, { useRef, useEffect, useState, Children } from "react";
import "./InputIncrement.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputIncrementProps {
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
/*const InputIncrement: React.FC<InputIncrementProps> = ({
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
const InputIncrement = ({
  label,
  name,
  required,
  placeholder,
  children,
  onChange,
  onLoad,
  onClick
}: InputIncrementProps) => (
  <div
    className={"form-item form-item-increment"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    <input
      className={"form-item-input form-item-input-increment"}
      type="number"
      name={String(name) ?? `errorName`}
      required={required == true ? `required` : ``}
      placeholder={
        `${placeholder ?? ``}${required == true ? `*` : ``}`
      }
      onLoad={onLoad}
      onClick={onClick}
      onChange={onChange}
    />
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
export default InputIncrement;
