/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputText.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputTextProps {
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
/*const InputText: React.FC<InputTextProps> = ({
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
const InputText = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputTextProps) => (
  <p
    className={"form-item form-item-text"}
  >
    {label && label !== null ? <label className={"form-item-label"}>
      {label}{required == true ? <span className={`required`}>*</span> : ``}
    </label> : ``}
    <input
      className={"form-item-input form-item-input-text"}
      type="text"
      name={String(name) ?? `errorName`}
      alt={label ? String(label) : placeholder ? String(placeholder) : ``}
      required={required == true ? `required` : ``}
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
export default InputText;
