/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputEmail.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputEmailProps {
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
/*const InputEmail: React.FC<InputEmailProps> = ({
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
const InputEmail = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputEmailProps) => (
  <p
    className={"form-item"}
  >
    {label && label !== null ? <label className={"form-item-label"}>
      {label}{required == true ? <span className={`required`}>*</span> : ``}
    </label> : ``}
    <input
      className={"form-item-input form-item-input-text"}
      type="email"
      name={String(name) ?? `errorName`}
      required={required == true ? `required` : ``}
      alt={label ? String(label) : placeholder ? String(placeholder) : ``}
      placeholder={
        `${placeholder+`${required === true && label === false ? `*` : ``}` ?? ``}`
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
export default InputEmail;
