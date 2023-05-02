/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputTextarea.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputTextareaProps {
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
/*const InputTextarea: React.FC<InputTextareaProps> = ({
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
const InputTextarea = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputTextareaProps) => (
  <p
    className={"form-item"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}

    <textarea
      placeholder={
        `${placeholder ?? ``}${required == true ? `*` : ``}`
      }
      required={required == true ? `required` : ``}
      className={"form-item-input form-item-input-textarea"}
      name={String(name) ?? `errorName`}
      onLoad={onLoad}
      onClick={onClick}
      onChange={onChange}
    >
    </textarea>
    
  </p>
);

/*
# Export
*/
export default InputTextarea;
