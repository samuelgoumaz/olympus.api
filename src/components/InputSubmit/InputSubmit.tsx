/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputSubmit.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputSubmitProps {
  label?: string | null;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputSubmit: React.FC<InputSubmitProps> = ({
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
const InputSubmit = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputSubmitProps) => (
  <p
    className={"form-item"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    <input
      className={"form-item-input form-item-input-submit"}
      type="text"
      name={String(name) ?? `errorName`}
      required={required == true ? `required` : ``}
      placeholder={
        `${placeholder ?? ``}${required == true ? `*` : ``}`
      }
      onLoad={onLoad}
      onClick={onClick}
      onChange={onChange}
    />
  </p>
);

/*
# Export
*/
export default InputSubmit;
