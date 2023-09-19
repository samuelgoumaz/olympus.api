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
  label?: string;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  elements?: {
    id?: number;
    value?: string;
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
}: InputCheckboxProps) => {
  const convertToSlug = (str) => {
    return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  };
  return (
    <div className={"form-item form-item-checkbox"}>
      
      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}

      {elements && elements.map(
          (item, index) => (
            <div className={"form-item-line"}>
              <div className={"form-item-input-container"}>
                <input
                  className={"form-item-input form-item-input-checkbox"}
                  type={`checkbox`}
                  id={`form-item-checkbox-${convertToSlug(String(item.value))}-${String(index)}`}
                  name={convertToSlug(String(item.value)) ?? `errorKey`}
                  alt={item.value ? item.value : label ? label : String(name) ?? `errorName`}
                  //required={required == true ? `required` : ``}
                  value={item.value ?? true}
                  onLoad={onLoad}
                  onClick={onClick}
                  onChange={onChange}
                />
              </div>

              <label
                for={`form-item-checkbox-${convertToSlug(String(item.value))}-${String(index)}`}
                className={"form-item-label"}
                dangerouslySetInnerHTML={{ __html: String(item.value) ?? `errorKey` }}
              >{}</label>
            </div>
          )
        )
      }
    </div>
  );
}

/*
# Export
*/
export default InputCheckbox;
