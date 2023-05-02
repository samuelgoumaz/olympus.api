/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputSelect.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputSelectProps {
  label?: string | null;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  elements?: {
    id: number;
    key: string | null;
    value: string | null;
  };
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputSelect: React.FC<InputSelectProps> = ({
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
const InputSelect = ({
  label,
  name,
  required,
  placeholder,
  elements,
  onChange,
  onLoad,
  onClick
}: InputSelectProps) => (
  <p
    className={"form-item form-item-select"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    <select
      className={"form-item-input form-item-input-select"}
      id={`form-item-${String(name)}`}
      name={String(name)}
      required={required == true ? `required` : ``}
      onLoad={onLoad}
      onClick={onClick}
      onChange={onChange}
    >
      {placeholder && <option value="" disabled selected>{placeholder}</option>}
      {
        elements && elements.map(
          (item, index) => (
            <option key={`input-select-option-${String(name)}-${index}`} value={item.key}>{item.value.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</option>
          )
        )
      }
    </select>

    <label htmlFor={`form-item-${String(name)}`} className={`form-item-input-select-handle material-icons`}>
      menu
    </label>
  </p>
);

/*
# Export
*/
export default InputSelect;
