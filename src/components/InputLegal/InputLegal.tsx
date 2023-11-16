/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputLegal.scss";
import Button from "../Button";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputLegalProps {
  label?: string;
  name: string | null;
  required?: string | null;
  href?: string | false;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputLegal: React.FC<InputLegalProps> = ({
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
const InputLegal = ({
  label,
  name,
  required,
  href,
  onChange,
  onLoad,
  onClick
}: InputLegalProps) => {
  const convertToSlug = (str) => {
    return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  };
  return (
    <div className={"form-item form-item-legal"}>
      <div className={"form-item-line"}>
        <div className={"form-item-input-container"}>
          <input
            className={"form-item-input form-item-input-checkbox"}
            type={`checkbox`}
            id={`form-item-checkbox-${convertToSlug(String(name))}`}
            name={convertToSlug(String(name)) ?? `errorKey`}
            alt={label ? label : String(name) ?? `errorName`}
            required={required == true ? `required` : ``}
            value={true}
            onLoad={onLoad}
            onClick={onClick}
            onChange={onChange}
          />
        </div>
        {label && label !== null ? <label 
          htmlFor={`form-item-checkbox-${convertToSlug(String(name))}`}
          className={"form-item-label"}
        >{label}{required == true ? <span className={`required`}>*</span> : ``}</label> : ``}

        {href && <div className={`form-item-action`}>
          <Button
            mode={`indicator`}
            icon={`visibility`}
            href={href}
          />
        </div>}
      </div>
    </div>
  );
}

/*
# Export
*/
export default InputLegal;
