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
}: InputRadioProps) => {

  const convertToSlug = (str) => {
    return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  };
  return (
    <div className={"form-item form-item-radio"}>

      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}

      {elements && elements.map(
        (item, i) => (
          <div className={"form-item-line"} key={`input-radio-${convertToSlug(String(name))}-${i}`}>
            <div className={"form-item-input-container"}>
              <input
                className={"form-item-input form-item-input-radio"}
                type="radio"
                id={`form-item-radio-${convertToSlug(String(item.value))}`}
                name={convertToSlug(String(name)) ?? `errorKey`}
                required={required == true ? `required` : ``}
                alt={item.value ? item.value : label ? label : String(name) ?? `errorName`}
                value={item.value ?? true}
                onLoad={onLoad}
                onClick={onClick}
                onChange={onChange}
              />
            </div>
            <label
              htmlFor={`form-item-radio-${convertToSlug(String(item.value))}`}
              className={"form-item-label"}
            >{item.value.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</label>
          </div>
        )
      )}
    </div>
  );
}

/*
# Export
*/
export default InputRadio;
