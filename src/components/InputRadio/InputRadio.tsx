/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputRadio.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputRadioProps {
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
/*const InputRadio: React.FC<InputRadioProps> = ({
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
const InputRadio = ({
  label,
  name,
  required,
  placeholder,
  elements,
  onChange,
  onLoad,
  onClick
}: InputRadioProps) => (
  <div className={"form-item form-item-radio"}>
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    {elements && elements.map(
      (item) => (
        <div className={"form-item-line"} key={`input-radio-${String(name)}-${item.key}`}>
          <div className={"form-item-input-container"}>
            <input
              className={"form-item-input form-item-input-radio"}
              type="radio"
              id={`form-item-radio-${String(item.key)}`}
              name={String(name) ?? `errorName`}
              alt={String(item.value) ?? ``}
              required={required == true ? `required` : ``}
              value={String(item.key)}
              onLoad={onLoad}
              onClick={onClick}
              onChange={onChange}
            />
          </div>

          <label
            htmlFor={`form-item-radio-${String(item.key)}`}
            className={"form-item-label"}
          >{item.value.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</label>
        </div>
      )
    )}
  </div>
);

/*
# Export
*/
export default InputRadio;
