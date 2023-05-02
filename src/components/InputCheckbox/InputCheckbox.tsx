/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputCheckbox.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputCheckboxProps {
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
/*const InputCheckbox: React.FC<InputCheckboxProps> = ({
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
const InputCheckbox = ({
  label,
  name,
  required,
  placeholder,
  elements,
  onChange,
  onLoad,
  onClick
}: InputCheckboxProps) => (
  <div className={"form-item form-item-checkbox"}>

    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    {elements && elements.map(
        (item) => (
          <div className={"form-item-line"}>
            <div className={"form-item-input-container"}>
              <input
                className={"form-item-input form-item-input-checkbox"}
                type={`checkbox`}
                id={`form-item-checkbox-${String(item.key)}`}
                name={String(name) ?? `errorName`}
                required={required == true ? `required` : ``}
                value={String(item.key)}
                onLoad={onLoad}
                onClick={onClick}
                onChange={onChange}
              />
            </div>

            <label
              for={`form-item-checkbox-${String(item.key)}`}
              className={"form-item-label"}
            >{item.value.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</label>
          </div>
        )
      )
    }
  </div>
);

/*
# Export
*/
export default InputCheckbox;
